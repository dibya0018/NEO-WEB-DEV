/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: We removed `output: 'export'` because it disables API routes.
  // This app uses `app/api/create-lead/route.ts`, which requires a Node/Edge runtime.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
