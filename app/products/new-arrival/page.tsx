'use client'

import { usePathname } from 'next/navigation'
import newArrivalHeroImage from '../../../assets/images/Background/NewArrivalBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import EditablePhoto from '../../../components/EditablePhoto'
import Reveal from '../../../components/Reveal'

const newPieces = [
  {
    path: 'new-arrival/Pic 1.jpg',
    alt: {
      en: 'Red lacquer gift box with wine, cookies and tea',
      vi: 'Hộp quà sơn mài đỏ với rượu vang, bánh quy và trà',
    },
  },
  {
    path: 'new-arrival/Pic 3.jpg',
    alt: {
      en: 'Round green lacquer box with a gold handle',
      vi: 'Hộp sơn mài tròn màu xanh với núm vàng',
    },
  },
  {
    path: 'new-arrival/Pic 4.jpg',
    alt: {
      en: 'Orange lacquer tea gift box with two cups',
      vi: 'Hộp quà trà sơn mài màu cam với hai chén',
    },
  },
  {
    path: 'new-arrival/Pic 2.jpg',
    alt: {
      en: 'Silver lacquer box with painted flowers',
      vi: 'Hộp sơn mài bạc vẽ hoa',
    },
  },
  {
    path: 'new-arrival/Pic 5.jpg',
    alt: {
      en: 'Painted lacquer tray beside a blue vase',
      vi: 'Khay sơn mài vẽ tay bên bình hoa xanh',
    },
  },
]

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

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Vừa về cửa hàng' : 'Just arrived'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Hộp quà và đồ sơn mài mới, sẵn sàng cho mùa lễ hội và những dịp đặc biệt.'
                  : 'New gift boxes and lacquerware, ready for the festive season and special occasions.'}
              </p>
            </div>
          </Reveal>

          {/* First 3 photos, staggered like the Gifts page */}
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-start">
            {newPieces.slice(0, 3).map((piece, index) => {
              const staggerClassName = index === 0 ? 'md:mt-14' : index === 2 ? 'md:mt-24' : ''

              return (
                <Reveal key={piece.path} className={staggerClassName}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <EditablePhoto
                        path={piece.path}
                        alt={piece.alt[language]}
                        className="aspect-[4/5] object-cover md:h-[30rem]"
                      />
                    </div>
                  </figure>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <div className="mt-24 max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Vẽ tay từng chi tiết' : 'Painted by hand'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Hoa văn vẽ tay trên nền sơn mài, đẹp khi trưng bày và ý nghĩa khi làm quà.'
                  : 'Hand-painted patterns on lacquer, lovely on display and meaningful as a gift.'}
              </p>
            </div>
          </Reveal>

          {/* Pic 2 is landscape so it gets the wider spot */}
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={newPieces[3].path}
                    alt={newPieces[3].alt[language]}
                    className="aspect-[4/3] object-cover md:aspect-auto md:h-[32rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={newPieces[4].path}
                    alt={newPieces[4].alt[language]}
                    className="aspect-[4/5] object-cover md:aspect-auto md:h-[32rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              {isVietnamese
                ? 'Mẫu mới có số lượng giới hạn. Liên hệ để hỏi về món bạn thích.'
                : 'New pieces are limited. Get in touch to ask about the one you like.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default NewArrivalPage
