import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gifts',
  description: 'Gifts for personal moments and small celebrations, and keepsakes worth holding on to.',
  alternates: { languages: { en: '/products/gifts/', vi: '/vi/products/gifts/' } },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
