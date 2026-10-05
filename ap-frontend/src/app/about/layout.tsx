import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Discover the people and craftsmanship behind Atelier Pascale.',
  alternates: { languages: { en: '/about/', vi: '/vi/about/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
