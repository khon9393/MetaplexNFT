/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Enforces trailing slashes
  images: {
    //domains: ['entire-wagon-fix.quicknode-ipfs.com', 'another-domain.com', 'yet-another-domain.com'],
    domains: ['entire-wagon-fix.quicknode-ipfs.com','ipfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://kslav1upda8ecner.public.blob.vercel-storage.com',
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        punycode: require.resolve('punycode/'),
      };
    }
    return config;
  },
};

module.exports = nextConfig;