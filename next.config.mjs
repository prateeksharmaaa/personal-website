/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
};

export default nextConfig; 