import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '../app/Header';
import Footer from '../app/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("http://buildintruss.com"),
  openGraph: {
    title: 'Truss',
    description: '건설사, 시공사 순위 리뷰 후기 확인은 트러스!',
    url: 'http://buildintruss.com',
    siteName: 'Truss',
    images: [
      {
        url: 'http://buildintruss.com/logo1.png',
        width: 218,
        height: 128,
        alt: "truss logo"
      },
    ],
    locale: 'ko',
    type: 'website',
  }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
        <Script
          src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js'
          strategy='beforeInteractive'
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      </head>
      
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
