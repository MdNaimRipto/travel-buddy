/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_SECRET_KEY: process.env.DB_SECRET_KEY,
    DB_IMAGE_KEY: process.env.DB_IMAGE_KEY,
    ADMIN_UID: process.env.ADMIN_UID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
  transpilePackages: ["crypto-js"],
};

module.exports = nextConfig;
