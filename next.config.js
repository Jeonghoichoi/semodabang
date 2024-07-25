const path = require('path');

module.exports = {
  experimental: {
    staleTimes: {
      dynamic: 10,
      static: 180,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, '/src')],
    },
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko'],
    },
    trailingSlash: true,
    reactStrictMode: true,
    output: 'standalone',
  },
};
