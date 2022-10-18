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

  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
