import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Atelier Pascale for product details and availability.',
  alternates: { languages: { en: '/contact/', vi: '/vi/contact/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
