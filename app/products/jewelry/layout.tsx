import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jewelry',
  description: 'Delicate pieces with expressive details, for wearing every day and keeping for years.',
  alternates: { languages: { en: '/products/jewelry/', vi: '/vi/products/jewelry/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
