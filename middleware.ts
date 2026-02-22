import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Redirect robots.txt to API route
  if (pathname === '/robots.txt') {
    return NextResponse.rewrite(new URL('/api/robots', request.url));
  }
  
  // Redirect sitemap.xml to API route
  if (pathname === '/sitemap.xml') {
    return NextResponse.rewrite(new URL('/api/sitemap', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/robots.txt', '/sitemap.xml'],
};