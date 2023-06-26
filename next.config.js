/** @type {import('next').NextConfig} */


const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
})


module.exports = withPWA({
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
  i18n,
  images: {
    domains: [
      'localhost',
      '127.0.0.1:8000',
      'maps.googleapis.com',
      's3.amazonaws.com',
      'pixarlaravel.s3.ap-southeast-1.amazonaws.com',
      'i.ibb.co',
      'lh3.googleusercontent.com',
      'fiverr-res.cloudinary.com',
      'cardano.ideascale.com',
      'secure.gravatar.com',
      'app.ideascale.com',
      'fileup.to',
      'api.proskills39.com',
      'static.ideascale.com',
      'encrypted-tbn0.gstatic.com',
      'generation-sessions.s3.amazonaws.com'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
