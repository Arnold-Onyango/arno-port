import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://arno.design'),
  title: 'Arno — UI/UX Designer & Developer',
  description:
    'Arnold Onyango is a UI/UX designer and developer based in Kampala, Uganda, crafting digital products for ecommerce, fintech, SaaS, and wellness.',
  keywords: ['UI/UX Designer', 'Product Designer', 'Kampala', 'Uganda', 'Figma', 'Framer', 'React'],
  authors: [{ name: 'Arnold Onyango' }],
  openGraph: {
    title: 'Arno — UI/UX Designer & Developer',
    description: 'Designer & developer — I design it, then I build it. No hand-off, no gap.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arno — UI/UX Designer & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arno — UI/UX Designer & Developer',
    description: 'Designer & developer — I design it, then I build it. No hand-off, no gap.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body>
        <a href="#work" className="skip-link">Skip to content</a>
        <div className="grain-overlay" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
