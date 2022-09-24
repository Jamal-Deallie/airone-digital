/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
  env: {
    customKey: '_authToken=6c0b937c-019c-4e9b-a906-13bfe0ce4a82',
    NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1337',
    SENDGRID_API_KEY:
      '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',
  },
};

module.exports = nextConfig;
