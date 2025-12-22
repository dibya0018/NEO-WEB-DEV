/** @type {import('next').NextConfig} */
const nextConfig = {
  // IMPORTANT:
  // `output: "export"` disables Next.js Route Handlers (`app/api/*`) because it creates a static-only build.
  // We need the API route `/api/create-lead` to work in production, so we build as a server app.
  // `standalone` also makes deployment easier on Node hosts.
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
