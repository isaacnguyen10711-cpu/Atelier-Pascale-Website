import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Art',
  description: 'Expressive pieces that set the mood of a room and reward a longer look.',
  alternates: { languages: { en: '/products/art/', vi: '/vi/products/art/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
