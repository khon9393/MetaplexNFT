import type { NextApiRequest, NextApiResponse } from 'next';
import Cache from '../../../lib/cache';

<<<<<<< HEAD
const cache = new Cache<Uint8Array>(3600000); // Cache TTL set to 1 hour
=======
const cache = new Cache<Uint8Array>(2678400000); // Cache TTL set to 31 days (31 * 24 * 60 * 60 * 1000)
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451

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
<<<<<<< HEAD
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
=======
    res.setHeader('Cache-Control', 'public, max-age=2678400, immutable'); // Cache for 31 days
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
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
<<<<<<< HEAD
    res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate'); // Lower TTL for freshness max-age=3600 for 1 hour)
=======
    res.setHeader('Cache-Control', 'public, max-age=2678400, immutable'); // Cache for 31 days
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
    res.send(Buffer.from(imageBuffer)); // Convert Uint8Array back to Buffer
  } catch (error) {
    console.error(`Error fetching image: ${cacheKey}`, error);
    res.status(404).json({ error: 'Image not found' });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
