'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import jewelryHeroImage from '../../../assets/images/Background/JeweleryBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import Reveal from '../../../components/Reveal'
import { photoUrl } from '../../photoUrl'

const jewelryPieces = [
  {
    image: photoUrl('jewelry/Pic 3.jpg'),
    alt: {
      en: 'Long necklaces made with bright silk-wrapped beads',
      vi: 'Vòng cổ dài với hạt bọc lụa rực rỡ',
    },
  },
  {
    image: photoUrl('jewelry/Pic 1.jpg'),
    alt: {
      en: 'Blue, black and pink resin bangles',
      vi: 'Vòng tay nhựa resin màu xanh, đen và hồng',
    },
  },
  {
    image: photoUrl('jewelry/Pic 4.jpg'),
    alt: {
      en: 'Yellow and charcoal silk-wrapped bead necklaces',
      vi: 'Vòng cổ hạt bọc lụa màu vàng và xám than',
    },
  },
  {
    image: photoUrl('jewelry/Pic 8.jpg'),
    alt: {
      en: 'Statement necklace with orange and horn-toned links',
      vi: 'Vòng cổ nổi bật với mắt xích màu cam và màu sừng',
    },
  },
  {
    image: photoUrl('jewelry/Pic 5.jpg'),
    alt: {
      en: 'Black and ivory leaf-shaped drop earrings',
      vi: 'Hoa tai dáng lá màu đen và ngà',
    },
  },
]

function JewelryPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'

  return (
    <main lang={language}>
      <CategoryHero
        imageAlt={
          isVietnamese
            ? 'Bộ sưu tập trang sức tại Atelier Pascale'
            : 'Jewelry collection at Atelier Pascale'
        }
        title={isVietnamese ? 'Trang sức' : 'Jewelry'}
        description={
          isVietnamese
            ? 'Những điểm nhấn tinh tế và chi tiết giàu cá tính để đồng hành cùng bạn mỗi ngày và lưu giữ cảm xúc.'
            : 'Delicate pieces with expressive details, for wearing every day and keeping for years.'
        }
        image={jewelryHeroImage}
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Sắc màu chuyển động' : 'Colour in motion'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Hạt bọc lụa và những hình khối được đánh bóng mang sắc màu sống động, chất liệu mềm mại và nét riêng vào phong cách hằng ngày.'
                  : 'Silk-wrapped beads and polished shapes add bright colour, soft texture and a bit of flair to everyday outfits.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    width={1200}
                    height={1500}
                    src={jewelryPieces[0].image}
                    alt={jewelryPieces[0].alt[language]}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[46rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <div className="grid gap-8 md:col-span-5">
              <Reveal>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <Image
                      width={1200}
                      height={1500}
                      src={jewelryPieces[1].image}
                      alt={jewelryPieces[1].alt[language]}
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                    />
                  </div>
                </figure>
              </Reveal>

              <Reveal>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <Image
                      width={1200}
                      height={1500}
                      src={jewelryPieces[2].image}
                      alt={jewelryPieces[2].alt[language]}
                      className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[26rem]"
                    />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 pb-20 pt-8 text-ap-ink sm:px-8 md:pb-28 md:pt-16 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese ? 'Chi tiết tạo hình' : 'Sculptural details'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {isVietnamese
                  ? 'Mắt xích nổi bật, đường nét uốn cong và sắc độ tự nhiên tạo nhịp điệu cùng cá tính riêng cho mỗi món trang sức.'
                  : 'Bold links, curved shapes and natural variations in tone give each piece its own rhythm and character.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-stretch">
            <Reveal className="md:col-span-7">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <Image
                    width={1200}
                    height={1500}
                    src={jewelryPieces[3].image}
                    alt={jewelryPieces[3].alt[language]}
                    className="aspect-[4/5] w-full object-contain transition duration-500 hover:scale-105 md:h-[40rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <Image
                    width={1200}
                    height={1500}
                    src={jewelryPieces[4].image}
                    alt={jewelryPieces[4].alt[language]}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[40rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              {isVietnamese
                ? 'Liên hệ với chúng tôi để tìm hiểu mẫu hiện có, chất liệu và lựa chọn phong cách mang dấu ấn của riêng bạn.'
                : 'Ask us about available pieces, materials and finding a style that feels like you.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default JewelryPage
