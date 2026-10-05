'use client'

import { usePathname } from 'next/navigation'
import newArrivalHeroImage from '../../../assets/images/Background/NewArrivalBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'

function NewArrivalPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'

  return (
    <main lang={language}>
      <CategoryHero
        imageAlt={
          isVietnamese
            ? 'Bộ sưu tập mẫu mới tại Atelier Pascale'
            : 'New Arrival collection at Atelier Pascale'
        }
        title={isVietnamese ? 'Mẫu mới' : 'New Arrival'}
        description={
          isVietnamese
            ? 'Bộ sưu tập mẫu mới được chọn lọc qua sự ấm áp, chi tiết tinh tế và cảm xúc mà chúng mang đến cho không gian.'
            : 'A quiet collection of new pieces chosen for warmth, detail, and the feeling they bring into a room.'
        }
        image={newArrivalHeroImage}
        imagePosition="object-[center_55%]"
      />
    </main>
  )
}

export default NewArrivalPage
