'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import companyFirstImage from '../../assets/images/About/Pic 2.jpg'
import companySecondImage from '../../assets/images/About/Pic 4.jpg'
import companyThirdImage from '../../assets/images/About/Pic 6.jpg'
import heroImage from '../../assets/images/Background/About Background.jpg'
import Reveal from '../../components/Reveal'

function AboutPage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const isVietnamese = language === 'vi'
  const prefix = isVietnamese ? '/vi' : ''

  return (
    <main lang={language} className="bg-ap-paper text-ap-ink">
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <Image
          src={heroImage}
          alt={isVietnamese ? 'Không gian Atelier Pascale' : 'The Atelier Pascale studio'}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fill
          preload
        />
        <div className="absolute inset-0 bg-ap-ink/45" />

        <div className="relative mx-auto w-full max-w-[76rem] px-5 pt-48 sm:px-8 lg:px-12">
          <div className="ml-auto max-w-2xl text-right">
            <p className="mb-4 text-sm uppercase tracking-widest text-ap-paper/90">
              Atelier Pascale
            </p>
            <h1 className="font-sans text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              {isVietnamese ? 'Về chúng tôi' : 'About Us'}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[76rem]">
          <section className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <Reveal className="md:col-span-5">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese
                  ? 'Tình yêu dành cho những điều đẹp đẽ'
                  : 'A love for beautiful things'}
              </h2>
              <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                {isVietnamese
                  ? 'Atelier Pascale mang đến nghệ thuật, đồ trang trí, quà tặng và trang sức được chọn lọc qua màu sắc, chất liệu và nét riêng.'
                  : 'Atelier Pascale brings together art, home decor, gifts and jewelry chosen for their colour, texture and character.'}
              </p>
              <p className="mt-5 text-base leading-8 text-ap-ink/75 md:text-lg">
                {isVietnamese
                  ? 'Chúng tôi tin rằng những món đồ quanh bạn nên mang dấu ấn riêng: để tận hưởng mỗi ngày, chia sẻ với người thân hoặc lưu giữ qua nhiều năm.'
                  : 'We believe the pieces you surround yourself with should feel personal. Something to enjoy every day, share with someone, or keep for years.'}
              </p>
              <Link
                href={`${prefix}/products/new-arrival`}
                className="mt-8 inline-block border-b border-ap-ink pb-2 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
              >
                {isVietnamese ? 'Khám phá bộ sưu tập' : 'Discover our collection'}
              </Link>
            </Reveal>
            <Reveal className="md:col-span-7">
              <Image
                src={companyFirstImage}
                alt={
                  isVietnamese
                    ? 'Các nghệ nhân tỉ mỉ hoàn thiện đồ trang trí trong xưởng'
                    : 'Artisans carefully finishing decorative pieces in the workshop'
                }
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </section>

          <section className="mt-20 grid gap-10 border-t border-ap-ink/20 pt-16 md:grid-cols-12 md:items-center md:gap-16 lg:mt-28 lg:pt-20">
            <Reveal className="md:col-span-5">
              <Image
                src={companySecondImage}
                alt={
                  isVietnamese
                    ? 'Người thợ đang chế tác chiếc tủ bằng tay'
                    : 'A maker working on a cabinet by hand'
                }
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
            <Reveal className="md:col-span-7">
              <div className="max-w-2xl">
                <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                  {isVietnamese ? 'Tinh hoa từ bàn tay người thợ' : 'Craft at the heart'}
                </h2>
                <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                  {isVietnamese
                    ? 'Xưởng của chúng tôi là nơi những người thợ kiên nhẫn tạo tác. Mỗi công đoạn tạo hình, trang trí và hoàn thiện đều đòi hỏi sự chăm chút, tỉ mỉ và đôi bàn tay lành nghề.'
                    : 'Our workshop is a place of patient work. Shaping, decorating and finishing each surface takes care, attention and a practiced hand.'}
                </p>
                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="text-base font-semibold">
                      {isVietnamese ? 'Những người làm nên tác phẩm' : 'People behind the pieces'}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ap-ink/70">
                      {isVietnamese
                        ? 'Người thợ gửi gắm kỹ năng và kinh nghiệm vào từng chi tiết mà bạn nhìn thấy và cảm nhận.'
                        : 'The makers bring their skill and experience to the details you see and feel.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {isVietnamese ? 'Nét riêng trong từng chi tiết' : 'Character in every detail'}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ap-ink/70">
                      {isVietnamese
                        ? 'Từ đường cong đến lớp trang trí hoàn thiện, những lựa chọn nhỏ tạo nên cá tính của mỗi món đồ.'
                        : 'From a curved silhouette to a decorative finish, small decisions give a piece its personality.'}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mt-20 grid gap-10 border-t border-ap-ink/20 pt-16 md:grid-cols-12 md:items-center md:gap-16 lg:mt-28 lg:pt-20">
            <Reveal className="md:col-span-6">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                {isVietnamese
                  ? 'Những người đứng sau Atelier Pascale'
                  : 'The people behind Atelier Pascale'}
              </h2>
              <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                {isVietnamese
                  ? 'Câu chuyện của chúng tôi còn là câu chuyện về những con người tạo nên Atelier Pascale, từ xưởng chế tác đến bộ sưu tập bạn thấy ở đây.'
                  : 'Our story is also about the people who make it possible, from the workshop to the collection you see here.'}
              </p>
              <p className="mt-5 text-base leading-8 text-ap-ink/75 md:text-lg">
                {isVietnamese
                  ? 'Cùng làm việc và sẻ chia những khoảnh khắc là một phần cuộc sống mỗi ngày tại Atelier Pascale. Sự gắn kết ấy là điều chúng tôi luôn trân trọng.'
                  : 'Shared work and moments together are part of everyday life at Atelier Pascale. That personal connection is at the heart of what we do.'}
              </p>
            </Reveal>
            <Reveal className="md:col-span-6">
              <Image
                src={companyThirdImage}
                alt={
                  isVietnamese
                    ? 'Đội ngũ Atelier Pascale cùng dùng bữa'
                    : 'The Atelier Pascale team sharing a meal together'
                }
                loading="lazy"
                className="aspect-[14/15] w-full object-cover"
              />
            </Reveal>
          </section>

          <Reveal>
            <section className="mt-20 flex flex-col gap-8 border-t border-ap-ink/20 pt-10 md:flex-row md:items-center md:justify-between lg:mt-28">
              <div>
                <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                  {isVietnamese ? 'Để chúng tôi giúp bạn lựa chọn' : 'Let us help you choose'}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-ap-ink/70">
                  {isVietnamese
                    ? 'Bạn đang quan tâm đến một món đồ? Hãy liên hệ để được tư vấn và kiểm tra tình trạng còn hàng.'
                    : 'Have a piece in mind? Get in touch for details and availability.'}
                </p>
              </div>
              <Link
                href={`${prefix}/contact`}
                className="inline-block shrink-0 self-start border border-ap-ink px-8 py-4 text-base font-semibold transition-colors hover:bg-ap-beige focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink md:self-auto"
              >
                {isVietnamese ? 'Liên hệ với chúng tôi' : 'Contact us'}
              </Link>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
