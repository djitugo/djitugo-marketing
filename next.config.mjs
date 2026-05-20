/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "djitugo.com" },
      { protocol: "https", hostname: "djitugomarketing.com" }
    ]
  }
};

export default nextConfig;
