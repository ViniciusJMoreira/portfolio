import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Vinícius Junqueira Moreira',
    default: 'Vinícius Junqueira Moreira - Front-end developer',
  },
  description:
    'Sono Vinícius, sviluppatore front-end basato a Rimini. Costruisco interfacce moderne, performanti e accessibili con React e Next.js, integrando strumenti AI nel workflow.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
