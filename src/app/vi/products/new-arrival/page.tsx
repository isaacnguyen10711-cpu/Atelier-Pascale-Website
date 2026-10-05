import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Mẫu mới | Atelier Pascale' },
  description:
    'Bộ sưu tập mẫu mới được chọn lọc qua sự ấm áp, chi tiết tinh tế và cảm xúc mà chúng mang đến cho không gian.',
  alternates: { languages: { en: '/products/new-arrival/', vi: '/vi/products/new-arrival/' } },
  openGraph: {
    title: 'Mẫu mới | Atelier Pascale',
    description:
      'Bộ sưu tập mẫu mới được chọn lọc qua sự ấm áp, chi tiết tinh tế và cảm xúc mà chúng mang đến cho không gian.',
    locale: 'vi_VN',
  },
}

export { default } from '../../../products/new-arrival/page'
