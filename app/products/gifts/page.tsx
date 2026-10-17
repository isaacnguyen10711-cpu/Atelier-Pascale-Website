'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import giftHeroImage from '../../../assets/images/Background/GiftBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import Reveal from '../../../components/Reveal'
import { photoUrl } from '../../photoUrl'

const giftPieces = [
  {
    image: photoUrl('gifts/Pic 1.jpg'),
    name: 'For the home',
    alt: {
      en: 'Gifts 1',
      vi: 'Quà tặng 1',
    },
  },
  {
    image: photoUrl('gifts/Pic 6.jpg'),
    name: 'Small gestures',
    alt: {
      en: 'Gifts 2',
      vi: 'Quà tặng 2',
    },
  },
  {
    image: photoUrl('gifts/Pic 4.jpg'),
    name: 'Special occasions',
    alt: {
      en: 'Gifts 3',
      vi: 'Quà tặng 3',
    },
  },
  {
    image: photoUrl('gifts/Pic 15.jpg'),
    name: 'Playful details',
    alt: {
      en: 'Gifts 4',
      vi: 'Quà tặng 4',
    },
  },
  {
    image: photoUrl('gifts/Pic 11.jpg'),
    name: 'Keepsake boxes',
    alt: {
      en: 'Gifts 5',
      vi: 'Quà tặng 5',
    },
  },
  {
    image: photoUrl('gifts/Pic 16.jpeg'),
    name: 'Lacquerware collection',
    alt: {
      en: 'Gifts 6',
      vi: 'Quà tặng 6',
    },
  },
]

function GiftsPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'

  return (
    <main lang={language}>
      <CategoryHero
        imageAlt={
          isVietnamese
            ? 'Bộ sưu tập quà tặng tại Atelier Pascale'
            : 'Gifts collection at Atelier Pascale'
        }
        title={isVietnamese ? 'Quà tặng' : 'Gifts'}
        description={
          isVietnamese
            ? 'Những món quà tinh tế dành cho khoảnh khắc riêng, dịp kỷ niệm và những kỷ vật ý nghĩa.'
            : 'Gifts for personal moments and small celebrations, and keepsakes worth holding on to.'
        }
        image={giftHeroImage}
        imagePosition="object-[center_70%]"
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Trao gửi sự quan tâm' : 'Thoughtful gestures'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Những món quà mang dấu ấn riêng dành cho dịp lễ, chủ nhà, dấu mốc đáng nhớ và cả những khoảnh khắc nhỏ trong cuộc sống.'
                  : 'Personal gifts for celebrations, hosts and milestones, and for small moments worth remembering.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-start">
            {giftPieces.slice(0, 3).map((piece, index) => {
              const staggerClassName = index === 0 ? 'md:mt-14' : index === 2 ? 'md:mt-24' : ''

              return (
                <Reveal key={piece.name} className={staggerClassName}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <Image
                        width={1200}
                        height={1500}
                        src={piece.image}
                        alt={piece.alt[language]}
                        className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[30rem]"
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
                {isVietnamese ? 'Kỷ vật mang nét riêng' : 'Keepsakes with character'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Đồ sơn mài và đồ trang trí giàu cảm xúc, mang màu sắc, nét thủ công và cá tính vào mỗi món quà.'
                  : 'Expressive lacquerware and decorative pieces that give a gift colour, craftsmanship and some personality.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    width={1200}
                    height={1500}
                    src={giftPieces[3].image}
                    alt={giftPieces[3].alt[language]}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <div className="grid gap-8 md:col-span-5">
              {giftPieces.slice(4).map((piece) => (
                <Reveal key={piece.name}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <Image
                        width={1200}
                        height={1500}
                        src={piece.image}
                        alt={piece.alt[language]}
                        className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                      />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              {isVietnamese
                ? 'Tìm một món quà mang dấu ấn riêng cho dịp kỷ niệm, lời cảm ơn chân thành hoặc sự quan tâm mỗi ngày.'
                : 'Find something personal for a celebration, a thank you that means something, or just because.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default GiftsPage
