/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'medlix.in' },
      { protocol: 'http', hostname: 'medlix.in' },
      { protocol: 'https', hostname: '**.medlix.in' },
    ],
  },
};

export default nextConfig;
