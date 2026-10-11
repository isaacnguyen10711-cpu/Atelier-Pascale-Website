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
            : 'New pieces, picked for their warmth and detail and for how they make a room feel.'
        }
        image={newArrivalHeroImage}
        imagePosition="object-[center_55%]"
      />
    </main>
  )
}

export default NewArrivalPage
