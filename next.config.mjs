/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        "hostname": "utfs.io"
      },
      {
        "hostname": "img.clerk.com"
      },
      {
        "hostname": "subdomain"
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;
