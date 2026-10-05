'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import artHeroImage from '../../../assets/images/Background/ArtBackground.jpg'
import artFirstImage from '../../../assets/images/Art/Pic 3.jpg'
import artSecondImage from '../../../assets/images/Art/Pic 9.jpg'
import artThirdImage from '../../../assets/images/Art/Pic 2.jpg'
import artFourthImage from '../../../assets/images/Art/Pic 8.jpg'
import artFifthImage from '../../../assets/images/Art/Pic 6.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import Reveal from '../../../components/Reveal'

const artPieces = [
  {
    image: artFirstImage,
    alt: {
      en: 'Large lotus painting displayed above a living room sofa',
      vi: 'Tranh hoa sen lớn được treo phía trên ghế sofa',
    },
  },
  {
    image: artSecondImage,
    alt: {
      en: 'Blue abstract landscape displayed above a carved cabinet',
      vi: 'Tranh phong cảnh trừu tượng màu xanh treo phía trên tủ chạm khắc',
    },
  },
  {
    image: artThirdImage,
    alt: {
      en: 'Framed painting of the red bridge at Hoan Kiem Lake',
      vi: 'Tranh có khung vẽ cầu Thê Húc ở hồ Hoàn Kiếm',
    },
  },
  {
    image: artFourthImage,
    alt: {
      en: 'Framed lacquer artwork with silver lotus flowers',
      vi: 'Tác phẩm sơn mài có khung với hoa sen bạc',
    },
  },
  {
    image: artFifthImage,
    alt: {
      en: 'Framed lacquer painting with green lotus leaves on a red background',
      vi: 'Tranh sơn mài có khung với lá sen xanh trên nền đỏ',
    },
  },
]

function ArtPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'

  return (
    <main lang={language}>
      <CategoryHero
        imageAlt={
          isVietnamese
            ? 'Bộ sưu tập nghệ thuật tại Atelier Pascale'
            : 'Art collection at Atelier Pascale'
        }
        title={isVietnamese ? 'Nghệ thuật' : 'Art'}
        description={
          isVietnamese
            ? 'Những tác phẩm giàu cảm xúc, tạo nên bầu không khí riêng và mời bạn chậm lại để thưởng thức.'
            : 'Expressive pieces selected to shape the mood of a room and invite slower looking.'
        }
        image={artHeroImage}
        imagePosition="object-[center_30%]"
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Nghệ thuật cho không gian sống' : 'Art for considered spaces'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Tranh phong cảnh, tranh hoa lá và tác phẩm sơn mài được chọn lọc để mang chiều sâu, màu sắc và điểm nhấn vào không gian.'
                  : 'Landscapes, botanical works and lacquer pieces selected to bring depth, colour and a clear focal point to a room.'}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <figure>
              <div className="overflow-hidden bg-ap-beige">
                <Image
                  src={artPieces[0].image}
                  alt={artPieces[0].alt[language]}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[40rem]"
                />
              </div>
            </figure>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-5">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={artPieces[1].image}
                    alt={artPieces[1].alt[language]}
                    className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-105 md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-7 md:mt-16">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={artPieces[2].image}
                    alt={artPieces[2].alt[language]}
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[30rem]"
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
                {isVietnamese ? 'Tác phẩm sơn mài truyền thống' : 'Traditional lacquer works'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Kỹ thuật sơn mài truyền thống mang đến bề mặt phong phú, chi tiết tinh tế và nét đẹp biến đổi theo ánh sáng cho những hình ảnh hoa lá.'
                  : 'Traditional lacquer techniques give botanical forms a rich surface, fine detail and a character that changes with the light.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-5">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={artPieces[3].image}
                    alt={artPieces[3].alt[language]}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[34rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-7 md:items-start">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={artPieces[4].image}
                    alt={artPieces[4].alt[language]}
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[34rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              {isVietnamese
                ? 'Liên hệ với chúng tôi để tìm hiểu các tác phẩm hiện có, kích thước và lựa chọn phù hợp với không gian của bạn.'
                : 'Ask us about available works, dimensions and finding the right piece for your space.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtPage
