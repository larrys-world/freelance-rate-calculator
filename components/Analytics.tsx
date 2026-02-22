'use client';

import Script from 'next/script';

export default function Analytics() {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Get domain from environment variable
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  
  if (!domain) {
    console.warn('NEXT_PUBLIC_PLAUSIBLE_DOMAIN not set');
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}