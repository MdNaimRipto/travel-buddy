/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_SECRET_KEY: process.env.DB_SECRET_KEY,
    DB_IMAGE_KEY: process.env.DB_IMAGE_KEY,
    DB_ADMIN_UID: process.env.DB_ADMIN_UID,
    DB_GOOGLE_ID: process.env.DB_GOOGLE_ID,
    DB_GOOGLE_SECRET: process.env.DB_GOOGLE_SECRET,
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
