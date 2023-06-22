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
