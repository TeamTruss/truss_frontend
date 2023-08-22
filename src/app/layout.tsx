// import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from './Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Truss',
  description: 'Truss',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      </head>
      
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
