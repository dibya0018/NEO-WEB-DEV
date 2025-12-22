/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting (doesn't support Node.js)
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
