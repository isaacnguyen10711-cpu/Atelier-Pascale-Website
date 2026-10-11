import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Home Decor',
  description: 'Warm objects and finishes that make everyday rooms calmer, with more texture and character.',
  alternates: { languages: { en: '/products/home-decor/', vi: '/vi/products/home-decor/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
