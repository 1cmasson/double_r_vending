import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Double R Vending',
  description: 'Vending Machine Maintenance Services in Miami, FL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon"  type="image/svg+xml" href="/favicon.svg"/>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FGWTDY8GW1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FGWTDY8GW1');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
