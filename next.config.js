/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true
  },
  // GitHub Pages specific config
  basePath: process.env.NODE_ENV === 'production' ? '/freelance-rate-calculator' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/freelance-rate-calculator' : ''
}

module.exports = nextConfig