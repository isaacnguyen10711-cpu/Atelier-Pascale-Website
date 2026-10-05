import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import logo from '../assets/images/logo AP.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../index.css'

export const metadata: Metadata = {
  title: {
    default: 'Atelier Pascale | Art, objects and gifts',
    template: '%s | Atelier Pascale',
  },
  description: 'Discover art, home decor, gifts and jewelry selected with care by Atelier Pascale.',
  icons: { icon: { url: logo.src, type: 'image/png' } },
  openGraph: {
    title: 'Atelier Pascale',
    description: 'Art, objects and gifts selected to bring lasting character into everyday spaces.',
  },
}

export const viewport: Viewport = { themeColor: '#1d211c' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ScrollToTop />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
