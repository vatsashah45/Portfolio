/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    experimental: {
      serverActions: {
        allowedOrigins: ['localhost:3000'],
      },
    },
  };
  
  module.exports = nextConfig;
