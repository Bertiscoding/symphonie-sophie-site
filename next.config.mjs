/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dxon4wo2t/**',
      },
      {
        protocol: 'https',
        hostname: 'media.doterra.com',
      }
    ],
  },
};

export default nextConfig;
