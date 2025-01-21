/** @type {import('next').NextConfig} */
const nextConfig = {
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