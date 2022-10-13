/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    VERSION: process.env.VERSION,
  },
};

module.exports = nextConfig;
