import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Art',
  description: 'Expressive pieces selected to shape the mood of a room and invite slower looking.',
  alternates: { languages: { en: '/products/art/', vi: '/vi/products/art/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
