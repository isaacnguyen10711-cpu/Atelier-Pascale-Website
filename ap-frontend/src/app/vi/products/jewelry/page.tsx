import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Trang sức | Atelier Pascale' },
  description:
    'Những điểm nhấn tinh tế và chi tiết giàu cá tính để đồng hành cùng bạn mỗi ngày và lưu giữ cảm xúc.',
  alternates: { languages: { en: '/products/jewelry/', vi: '/vi/products/jewelry/' } },
  openGraph: {
    title: 'Trang sức | Atelier Pascale',
    description:
      'Những điểm nhấn tinh tế và chi tiết giàu cá tính để đồng hành cùng bạn mỗi ngày và lưu giữ cảm xúc.',
    locale: 'vi_VN',
  },
}

export { default } from '../../../products/jewelry/page'
