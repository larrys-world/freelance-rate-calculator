/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  // output: 'export',
  images: {
    unoptimized: true
  },
  // Remove GitHub Pages specific config
  // basePath: process.env.NODE_ENV === 'production' ? '/freelance-rate-calculator' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/freelance-rate-calculator' : ''
}

module.exports = nextConfig