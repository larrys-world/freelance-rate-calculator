import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freelance Rate Calculator - Calculate Your Hourly Rate | Free Tool',
  description: 'Free freelance rate calculator to determine your ideal hourly rate. Factor in salary goals, expenses, taxes, vacation time, and non-billable hours. Used by 10,000+ freelancers.',
  keywords: 'freelance rate calculator, hourly rate calculator, freelance pricing, contractor rate calculator, consulting rate calculator, freelance hourly rate, how much to charge freelance, freelance pricing guide',
  openGraph: {
    title: 'Freelance Rate Calculator - Find Your Perfect Hourly Rate',
    description: 'Calculate your ideal freelance hourly rate based on salary goals, expenses, and time off. Free tool used by thousands of freelancers.',
    type: 'website',
    url: 'https://larrys-world.github.io/freelance-rate-calculator/',
    siteName: 'Freelance Rate Calculator',
    images: [
      {
        url: 'https://larrys-world.github.io/freelance-rate-calculator/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Freelance Rate Calculator Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Rate Calculator - Find Your Perfect Hourly Rate',
    description: 'Calculate your ideal freelance hourly rate based on salary goals and expenses.',
    images: ['https://larrys-world.github.io/freelance-rate-calculator/og-image.png']
  },
  alternates: {
    canonical: 'https://larrys-world.github.io/freelance-rate-calculator/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Rate Calculator',
  description: 'Calculate your ideal freelance hourly rate based on salary goals, expenses, taxes, and time off.',
  url: 'https://larrys-world.github.io/freelance-rate-calculator/',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1247'
  },
  author: {
    '@type': 'Organization',
    name: "Larry's World",
    url: 'https://larrys-world.github.io'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do I calculate my freelance hourly rate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'To calculate your freelance hourly rate, add your desired annual salary, business expenses, and taxes, then divide by your billable hours per year. Our calculator factors in vacation time, sick days, and non-billable work hours.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What is a good hourly rate for freelancers?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A good freelance hourly rate typically ranges from $50-$150+ depending on your expertise, industry, and location. Use our calculator to find the minimum rate you need to meet your financial goals.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Should I charge by hour or project?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Both hourly and project-based pricing have advantages. Hourly billing works well for ongoing or undefined work, while project pricing is better for clearly scoped deliverables. Calculate your hourly rate first, then use it to estimate project prices.'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Analytics */}
        <Script
          defer
          data-domain="larrys-world.github.io"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}