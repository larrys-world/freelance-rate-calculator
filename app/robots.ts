import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://larrys-world.github.io/freelance-rate-calculator/sitemap.xml',
  }
}