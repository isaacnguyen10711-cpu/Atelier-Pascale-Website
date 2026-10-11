import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'New Arrival',
  description: 'New pieces, picked for their warmth and detail and for how they make a room feel.',
  alternates: { languages: { en: '/products/new-arrival/', vi: '/vi/products/new-arrival/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
