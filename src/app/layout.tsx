import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '../app/Header';
import Footer from '../app/Footer';
import AuthSession from './AuthSession';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://buildintruss.com"),
  openGraph: {
    title: 'Truss',
    description: '건설사, 시공사 순위 리뷰 후기 확인은 트러스!',
    url: 'https://buildintruss.com',
    siteName: 'Truss',
    images: [
      {
        url: 'https://buildintruss.com/logo_truss.png',
        width: 218,
        height: 128,
        alt: "truss logo"
      },
    ],
    locale: 'ko',
    type: 'website',
  }
}

export default function RootLayout({children, }: {children: React.ReactNode, }) {
  //const session = {} as Session;
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      </head>
      
      <body className={inter.className}>
        <AuthSession>
          <Header />
          <main className={`container px-5`}>
          {children}
          </main>
          <Footer />
        </AuthSession>
      </body>
    </html>
  )
}
