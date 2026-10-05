import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Nghệ thuật | Atelier Pascale' },
  description:
    'Những tác phẩm giàu cảm xúc, tạo nên bầu không khí riêng và mời bạn chậm lại để thưởng thức.',
  alternates: { languages: { en: '/products/art/', vi: '/vi/products/art/' } },
  openGraph: {
    title: 'Nghệ thuật | Atelier Pascale',
    description:
      'Những tác phẩm giàu cảm xúc, tạo nên bầu không khí riêng và mời bạn chậm lại để thưởng thức.',
    locale: 'vi_VN',
  },
}

export { default } from '../../../products/art/page'
