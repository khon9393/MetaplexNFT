import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imagePath } = req.query; // Capture dynamic path

  if (!imagePath || !Array.isArray(imagePath)) {
    return res.status(400).json({ error: 'Image path is required' });
  }

  // Convert array into a full path (e.g., ["avatars", "image1.png"] → "avatars/image1.png")
  const fullImagePath = imagePath.join('/');

  try {
    const imageUrl = `https://kslav1upda8ecner.public.blob.vercel-storage.com/${fullImagePath}`; // Vercel Blob storage URL

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Image not found');

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await response.arrayBuffer();

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    res.status(404).json({ error: 'Image not found' });
  }
}
