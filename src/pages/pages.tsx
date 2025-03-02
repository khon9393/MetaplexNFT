import { FC } from 'react';

const images = [
  { path: 'CandibarImg/Candi/candi_00_500-2WxvpIIqCmHZBtBjBZTNYPzf8RRrCP.jpg', alt: 'User Avatar' },
  { path: 'CandibarImg/Candi/candi_01_500-y4ReaS9fjPQCDGtPEK2ELI5oJ5LTPy.jpg', alt: 'Product Image' },
  { path: 'CandibarImg/Candi/candi_02_500-BcGaCj5UpkRskrh4gsbp7Ihcx1WgJ1.jpg', alt: 'Website Banner' },
  { path: 'CandibarImg/Candi/candi_03_500-WTiNFp0A2zWdz3mx5eXCAMa0YNwIAE.jpg', alt: 'Website Banner' }
];

const DisplayImages: FC = () => {
  return (
    <div>
      {images.map(({ path, alt }) => (
        <img
          key={path}
          src={`/api/image/${path}`} // Dynamically fetch images
          alt={alt}
          style={{ maxWidth: '100%', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default DisplayImages;
