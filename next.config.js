/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: '_authToken=6c0b937c-019c-4e9b-a906-13bfe0ce4a82',
  },
};

module.exports = nextConfig;
