import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Giới thiệu | Atelier Pascale' },
  description: 'Tìm hiểu con người và tinh hoa thủ công tại Atelier Pascale.',
  alternates: { languages: { en: '/about/', vi: '/vi/about/' } },
  openGraph: {
    title: 'Giới thiệu | Atelier Pascale',
    description: 'Tìm hiểu con người và tinh hoa thủ công tại Atelier Pascale.',
    locale: 'vi_VN',
  },
}

export { default } from '../../about/page'
