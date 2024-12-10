/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
    IMAGE_KEY: process.env.IMAGE_KEY,
    ADMIN_UID: process.env.ADMIN_UID,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    BASE_URL: process.env.BASE_URL,
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
