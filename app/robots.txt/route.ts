import { NextResponse } from 'next/server'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://larrys-world.github.io/freelance-rate-calculator/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}