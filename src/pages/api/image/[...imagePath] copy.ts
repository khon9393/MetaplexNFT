import type { NextApiRequest, NextApiResponse } from 'next';
import Cache from '../../../lib/cache';

const cache = new Cache<Uint8Array>(3600000); // Cache TTL set to 1 hour

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imagePath } = req.query;

  if (!imagePath || !Array.isArray(imagePath)) {
    return res.status(400).json({ error: 'Image path is required' });
  }

  const fullImagePath = imagePath.join('/');
  const cacheKey = fullImagePath;

  // Check if the image is cached
  const cachedImage = cache.get(cacheKey);
  if (cachedImage) {
    console.log(`Cache hit: ${cacheKey}`);
    res.setHeader('Content-Type', 'image/jpeg'); // Adjust as needed
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.send(Buffer.from(cachedImage)); // Convert back to Buffer for response
  }

  try {
    const imageUrl = `https://kslav1upda8ecner.public.blob.vercel-storage.com/${fullImagePath}`; // Ensure correct URL format
    const response = await fetch(imageUrl);
    
    if (!response.ok) throw new Error('Image not found');

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = new Uint8Array(await response.arrayBuffer()); // Convert to Uint8Array

    // Store in cache
    cache.set(cacheKey, imageBuffer);
    console.log(`Cache miss: ${cacheKey}`);

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate'); // Lower TTL for freshness max-age=3600 for 1 hour)
    res.send(Buffer.from(imageBuffer)); // Convert Uint8Array back to Buffer
  } catch (error) {
    console.error(`Error fetching image: ${cacheKey}`, error);
    res.status(404).json({ error: 'Image not found' });
  }
}
