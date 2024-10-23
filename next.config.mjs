/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3031',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
