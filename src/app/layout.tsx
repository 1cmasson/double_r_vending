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
      <Script src="//widget.manychat.com/114420448381528.js" type="application/javascript" async defer></Script>
      <Script src="https://mccdn.me/assets/js/widget.js" type="application/javascript" async defer></Script>
      <Script id="">
        {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "114420448381528");
          chatbox.setAttribute("attribution", "biz_inbox");
        `}
      </Script>
      <Script id="">
        {`
         window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v17.0'
          });
         };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
