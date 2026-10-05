import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jewelry',
  description: 'Delicate accents and expressive details chosen for everyday wear and lasting sentiment.',
  alternates: { languages: { en: '/products/jewelry/', vi: '/vi/products/jewelry/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
