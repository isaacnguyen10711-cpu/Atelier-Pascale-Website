import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gifts',
  description: 'Thoughtful pieces selected for personal moments, quiet celebrations, and meaningful keepsakes.',
  alternates: { languages: { en: '/products/gifts/', vi: '/vi/products/gifts/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
