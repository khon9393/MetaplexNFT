/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ['entire-wagon-fix.quicknode-ipfs.com', 'another-domain.com', 'yet-another-domain.com'],
    domains: ['entire-wagon-fix.quicknode-ipfs.com'],
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