'use client'

import { usePathname } from 'next/navigation'
import homeDecorHeroImage from '../../../assets/images/Background/HomeDecorBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import EditablePhoto from '../../../components/EditablePhoto'
import Reveal from '../../../components/Reveal'

const homeDecorPieces = [
  {
    path: 'home-decor/Pic 12.jpg',
    name: 'Objects with presence',
    alt: {
      en: 'Home Decor 1',
      vi: 'Trang trí nhà 1',
    },
  },
  {
    path: 'home-decor/Pic 11.jpg',
    name: 'Quiet detail',
    alt: {
      en: 'Home Decor 2',
      vi: 'Trang trí nhà 2',
    },
  },
  {
    path: 'home-decor/Pic 1.jpg',
    name: 'Table setting',
    alt: {
      en: 'Home Decor 3',
      vi: 'Trang trí nhà 3',
    },
  },
  {
    path: 'home-decor/Pic 7.jpg',
    name: 'Floral vase',
    alt: {
      en: 'Home Decor 4',
      vi: 'Trang trí nhà 4',
    },
  },
  {
    path: 'home-decor/Pic 8.jpg',
    name: 'Painted objects',
    alt: {
      en: 'Home Decor 5',
      vi: 'Trang trí nhà 5',
    },
  },
]

function HomeDecorPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'

  return (
    <main lang={language}>
      <CategoryHero
        imageAlt={
          isVietnamese
            ? 'Bộ sưu tập trang trí nhà tại Atelier Pascale'
            : 'Home Decor collection at Atelier Pascale'
        }
        title={isVietnamese ? 'Trang trí nhà' : 'Home Decor'}
        description={
          isVietnamese
            ? 'Những món đồ và chất liệu ấm áp mang sự bình yên, chiều sâu và nét riêng vào không gian sống.'
            : 'Warm objects and finishes that make everyday rooms calmer, with more texture and character.'
        }
        image={homeDecorHeroImage}
        imagePosition="object-[center_70%]"
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese
                  ? 'Đồ trang trí cho không gian tinh tế'
                  : 'Objects for thoughtfully arranged rooms'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Hình khối, chất liệu và những món đồ hữu dụng mang lại sự ấm áp, gần gũi cho không gian sống mỗi ngày.'
                  : 'Layered shapes, finishes and useful objects that make everyday rooms feel warm and lived in.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={homeDecorPieces[0].path}
                    alt={homeDecorPieces[0].alt[language]}
                    className="aspect-[4/5] object-cover md:aspect-auto md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={homeDecorPieces[1].path}
                    alt={homeDecorPieces[1].alt[language]}
                    className="aspect-[4/5] object-cover object-[35%] md:aspect-auto md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 pb-20 pt-8 text-ap-ink sm:px-8 md:pb-28 md:pt-16 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Màu sắc, hình khối và chất liệu' : 'Colour, form and finish'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Bình hoa, khay và đồ trang trí tạo điểm nhấn nổi bật mà vẫn giữ sự hài hòa cho căn phòng.'
                  : 'Vases, trays and decorative objects that give a room a focal point without taking it over.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-4 md:mt-16">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={homeDecorPieces[2].path}
                    alt={homeDecorPieces[2].alt[language]}
                    className="aspect-[4/5] object-cover md:h-[30rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-4">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={homeDecorPieces[3].path}
                    alt={homeDecorPieces[3].alt[language]}
                    className="aspect-[4/5] object-cover md:h-[36rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-4 md:mt-16">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <EditablePhoto
                    path={homeDecorPieces[4].path}
                    alt={homeDecorPieces[4].alt[language]}
                    className="aspect-[4/5] object-cover md:h-[30rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              {isVietnamese
                ? 'Khám phá những món đồ mang chiều sâu, sự cân bằng và nét đẹp bền lâu vào ngôi nhà.'
                : 'Objects that add texture and balance to a home, with character that lasts.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeDecorPage
