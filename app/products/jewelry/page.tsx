'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import jewelryHeroImage from '../../../assets/images/Background/JeweleryBackground.jpg'
import jewelryFirstImage from '../../../assets/images/Jewelry/Pic 3.jpg'
import jewelrySecondImage from '../../../assets/images/Jewelry/Pic 1.jpg'
import jewelryThirdImage from '../../../assets/images/Jewelry/Pic 4.jpg'
import jewelryFourthImage from '../../../assets/images/Jewelry/Pic 8.jpg'
import jewelryFifthImage from '../../../assets/images/Jewelry/Pic 5.jpg'
import CategoryHero from '../../../components/CategoryHero'
import EnquiryLink from '../../../components/EnquiryLink'
import Reveal from '../../../components/Reveal'

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
            : 'Delicate accents and expressive details chosen for everyday wear and lasting sentiment.'
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
                  : 'Silk-wrapped beads and polished forms bring vivid colour, soft texture and an expressive finish to everyday dressing.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={jewelryFirstImage}
                    alt={
                      isVietnamese
                        ? 'Vòng cổ dài với hạt bọc lụa rực rỡ'
                        : 'Long necklaces made with bright silk-wrapped beads'
                    }
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
                      src={jewelrySecondImage}
                      alt={
                        isVietnamese
                          ? 'Vòng tay nhựa resin màu xanh, đen và hồng'
                          : 'Blue, black and pink resin bangles'
                      }
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                    />
                  </div>
                </figure>
              </Reveal>

              <Reveal>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <Image
                      src={jewelryThirdImage}
                      alt={
                        isVietnamese
                          ? 'Vòng cổ hạt bọc lụa màu vàng và xám than'
                          : 'Yellow and charcoal silk-wrapped bead necklaces'
                      }
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
                  : 'Bold links, curved silhouettes and natural tonal variation give each piece a distinctive sense of rhythm and character.'}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-stretch">
            <Reveal className="md:col-span-7">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <Image
                    src={jewelryFourthImage}
                    alt={
                      isVietnamese
                        ? 'Vòng cổ nổi bật với mắt xích màu cam và màu sừng'
                        : 'Statement necklace with orange and horn-toned links'
                    }
                    className="aspect-[4/5] w-full object-contain transition duration-500 hover:scale-105 md:h-[40rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <Image
                    src={jewelryFifthImage}
                    alt={
                      isVietnamese
                        ? 'Hoa tai dáng lá màu đen và ngà'
                        : 'Black and ivory leaf-shaped drop earrings'
                    }
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
                : 'Ask us about available pieces, materials and finding a style that feels distinctly yours.'}
            </p>
            <EnquiryLink language={language} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default JewelryPage
