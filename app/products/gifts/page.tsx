'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import giftHeroImage from '../../../assets/images/Background/GiftBackground.jpg'
import giftFirstImage from '../../../assets/images/Gift/Pic 1.jpg'
import giftSecondImage from '../../../assets/images/Gift/Pic 6.jpg'
import giftThirdImage from '../../../assets/images/Gift/Pic 4.jpg'
import giftFourthImage from '../../../assets/images/Gift/Pic 15.jpg'
import giftFifthImage from '../../../assets/images/Gift/Pic 11.jpg'
import giftSixthImage from '../../../assets/images/Gift/Pic 16.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import Reveal from '../../../components/Reveal'

const giftPieces = [
  {
    image: giftFirstImage,
    name: 'For the home',
    alt: {
      en: 'Decorative gift box with a botanical pattern',
      vi: 'Hộp quà trang trí họa tiết hoa lá',
    },
  },
  {
    image: giftSecondImage,
    name: 'Small gestures',
    alt: {
      en: 'Hand-finished decorative gift box',
      vi: 'Hộp quà trang trí được hoàn thiện bằng tay',
    },
  },
  {
    image: giftThirdImage,
    name: 'Special occasions',
    alt: {
      en: 'A curated gift presentation from Atelier Pascale',
      vi: 'Bộ quà tặng được chọn lọc tại Atelier Pascale',
    },
  },
]

const additionalGiftPieces = [
  {
    image: giftFourthImage,
    name: 'Playful details',
    alt: {
      en: 'Colorful lacquerware gifts with dragonfly motifs',
      vi: 'Quà tặng sơn mài nhiều màu với họa tiết chuồn chuồn',
    },
  },
  {
    image: giftFifthImage,
    name: 'Keepsake boxes',
    alt: {
      en: 'Pink, red and turquoise floral keepsake boxes',
      vi: 'Hộp lưu niệm họa tiết hoa màu hồng, đỏ và xanh ngọc',
    },
  },
  {
    image: giftSixthImage,
    name: 'Lacquerware collection',
    alt: {
      en: 'Red lacquerware gifts decorated with gold floral details',
      vi: 'Quà tặng sơn mài đỏ trang trí hoa màu vàng',
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
            : 'Thoughtful pieces selected for personal moments, quiet celebrations, and meaningful keepsakes.'
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
                  : 'Personal pieces for celebrations, hosts, milestones and the small moments that deserve to be remembered.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-start">
            {giftPieces.map((piece, index) => {
              const staggerClassName = index === 0 ? 'md:mt-14' : index === 2 ? 'md:mt-24' : ''

              return (
                <Reveal key={piece.name} className={staggerClassName}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <Image
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
                  : 'Expressive lacquerware and decorative pieces made to bring colour, craft and personality to a thoughtful gift.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={additionalGiftPieces[0].image}
                    alt={additionalGiftPieces[0].alt[language]}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <div className="grid gap-8 md:col-span-5">
              {additionalGiftPieces.slice(1).map((piece) => (
                <Reveal key={piece.name}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <Image
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
                : 'Find something personal for a celebration, a meaningful thank you or an everyday gesture.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default GiftsPage
