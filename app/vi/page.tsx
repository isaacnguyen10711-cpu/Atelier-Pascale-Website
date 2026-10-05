import type { Metadata } from 'next'
import HomePage from '../page'

const description =
  'Nghệ thuật, đồ trang trí và quà tặng được chọn lọc để mang nét đẹp riêng vào không gian sống.'

export const metadata: Metadata = {
  title: 'Atelier Pascale',
  description,
  alternates: { languages: { en: '/', vi: '/vi/' } },
  openGraph: {
    title: 'Atelier Pascale',
    description,
    locale: 'vi_VN',
  },
}

export default function Page() {
  return <HomePage />
}
