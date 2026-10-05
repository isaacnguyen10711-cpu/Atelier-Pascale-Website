import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Trang trí nhà | Atelier Pascale' },
  description:
    'Những món đồ và chất liệu ấm áp mang sự bình yên, chiều sâu và nét riêng vào không gian sống.',
  alternates: { languages: { en: '/products/home-decor/', vi: '/vi/products/home-decor/' } },
  openGraph: {
    title: 'Trang trí nhà | Atelier Pascale',
    description:
      'Những món đồ và chất liệu ấm áp mang sự bình yên, chiều sâu và nét riêng vào không gian sống.',
    locale: 'vi_VN',
  },
}

export { default } from '../../../products/home-decor/page'
