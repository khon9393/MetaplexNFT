// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

// Load SSL certificates for HTTPS
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, './certs/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './certs/cert.pem')),
};

// Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  server: {
    https: httpsOptions, // Add HTTPS configuration
  },
};

module.exports = nextConfig;