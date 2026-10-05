import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'New Arrival',
  description: 'A quiet collection of new pieces chosen for warmth, detail, and the feeling they bring into a room.',
  alternates: { languages: { en: '/products/new-arrival/', vi: '/vi/products/new-arrival/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
