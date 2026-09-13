import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { siteDescription, siteName, siteUrl } from '@/lib/siteConfig'

import '@/styles/tailwind.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Vinícius Junqueira Moreira',
    default: 'Vinícius Junqueira Moreira - Front-end developer',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: '/',
    siteName,
    title: 'Vinícius Junqueira Moreira - Front-end developer',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinícius Junqueira Moreira - Front-end developer',
    description: siteDescription,
  },
}

let personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteName,
  url: siteUrl,
  jobTitle: 'Front-end developer',
  description: siteDescription,
  sameAs: ['https://www.linkedin.com/in/vinicius-jmoreira'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={cn("h-full antialiased", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
