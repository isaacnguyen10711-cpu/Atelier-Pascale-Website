import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Liên hệ | Atelier Pascale' },
  description: 'Liên hệ Atelier Pascale để được tư vấn sản phẩm và kiểm tra tình trạng còn hàng.',
  alternates: { languages: { en: '/contact/', vi: '/vi/contact/' } },
  openGraph: {
    title: 'Liên hệ | Atelier Pascale',
    description: 'Liên hệ Atelier Pascale để được tư vấn sản phẩm và kiểm tra tình trạng còn hàng.',
    locale: 'vi_VN',
  },
}

export { default } from '../../contact/page'
