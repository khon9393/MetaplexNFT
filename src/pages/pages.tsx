import { useState, useEffect } from 'react';

export default function DisplayImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchImage() {
      // Replace with your stored image URL
      const url = 'https://kslav1upda8ecner.public.blob.vercel-storage.com/CandibarImg/Candi/candi_00_500-2WxvpIIqCmHZBtBjBZTNYPzf8RRrCP.jpg';
      setImageUrl(url);
    }
    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Uploaded Blob" style={{ maxWidth: '100%' }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
