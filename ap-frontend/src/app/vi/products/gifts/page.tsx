import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Quà tặng | Atelier Pascale' },
  description:
    'Những món quà tinh tế dành cho khoảnh khắc riêng, dịp kỷ niệm và những kỷ vật ý nghĩa.',
  alternates: { languages: { en: '/products/gifts/', vi: '/vi/products/gifts/' } },
  openGraph: {
    title: 'Quà tặng | Atelier Pascale',
    description:
      'Những món quà tinh tế dành cho khoảnh khắc riêng, dịp kỷ niệm và những kỷ vật ý nghĩa.',
    locale: 'vi_VN',
  },
}

export { default } from '../../../products/gifts/page'
