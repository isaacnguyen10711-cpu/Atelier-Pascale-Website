'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import aboutImage from '../assets/images/About/Pic 2.jpg'
import artFirstImage from '../assets/images/Art/Pic 1.jpg'
import artSecondImage from '../assets/images/Art/Pic 7.jpg'
import heroImage from '../assets/images/Background/HomeBackground.jpg'
import giftImage from '../assets/images/Gift/Pic 2.jpg'
import homeDecorImage from '../assets/images/Home Decor/Pic 1.jpg'
import featuredImage from '../assets/images/Home Decor/Pic 11.jpg'
import jewelryImage from '../assets/images/Jewelry/Pic 3.jpg'
import Reveal from '../components/Reveal'

const homepageTranslations = {
  en: {
    heroDescription:
      'Art, objects and gifts selected to bring lasting character into everyday spaces.',
    viewNewArrivals: 'View new arrivals',
    ourStory: 'Our story',
    introduction: 'Pieces chosen for how they live with you, not simply how they look on a shelf.',
    newArrivals: 'New arrivals',
    newArrivalsDescription:
      'Recent finds, selected for texture, proportion and the feeling they bring to a room.',
    exploreNewArrivals: 'Explore New Arrivals',
    exploreCollections: 'Explore the collections',
    collections: [
      {
        name: 'Home Decor',
        description: 'Objects that bring warmth and character to everyday rooms.',
      },
      { name: 'Gifts', description: 'Thoughtful pieces for meaningful occasions.' },
      { name: 'Jewelry', description: 'Personal details selected for everyday wear.' },
    ],
    art: 'Art',
    artDescription:
      'Expressive pieces selected to bring colour, character and a distinct point of view into a room.',
    exploreArt: 'Explore art',
    storyTitle: 'Our Story',
    storyDescription:
      'Atelier Pascale brings together art, home pieces and thoughtful gifts with a focus on lasting beauty and personal service.',
    meetAtelier: 'Meet Atelier Pascale',
    images: {
      hero: 'Atelier Pascale home interior with decorative lacquerware',
      featured: 'A featured decorative piece from Atelier Pascale',
      collections: ['Home Decor collection', 'Gifts collection', 'Jewelry collection'],
      artFirst: 'Decorative artwork from Atelier Pascale',
      artSecond: 'Artwork displayed by Atelier Pascale',
      about: 'The people behind Atelier Pascale',
    },
  },
  vi: {
    heroDescription:
      'Nghệ thuật, đồ trang trí và quà tặng được chọn lọc để mang nét đẹp riêng vào không gian sống.',
    viewNewArrivals: 'Xem mẫu mới',
    ourStory: 'Câu chuyện của chúng tôi',
    introduction:
      'Không chỉ đẹp trên kệ, mỗi món đồ còn mang thêm những vẻ đẹp vào cuộc sống hằng ngày.',
    newArrivals: 'Mẫu mới',
    newArrivalsDescription:
      'Những mẫu mới được chọn lọc qua chất liệu, đường nét và cảm xúc mà chúng mang đến cho không gian.',
    exploreNewArrivals: 'Khám phá mẫu mới',
    exploreCollections: 'Khám phá bộ sưu tập',
    collections: [
      {
        name: 'Trang trí nhà',
        description: 'Những món đồ mang lại sự ấm áp và nét riêng cho không gian sống.',
      },
      { name: 'Quà tặng', description: 'Những món quà tinh tế dành cho các dịp đặc biệt.' },
      { name: 'Trang sức', description: 'Điểm nhấn được chọn lọc để đồng hành cùng bạn mỗi ngày.' },
    ],
    art: 'Nghệ thuật',
    artDescription:
      'Những tác phẩm giàu cảm xúc, mang màu sắc, cá tính và góc nhìn riêng vào không gian sống.',
    exploreArt: 'Khám phá nghệ thuật',
    storyTitle: 'Câu chuyện của chúng tôi',
    storyDescription:
      'Atelier Pascale kết nối nghệ thuật, đồ trang trí và quà tặng tinh tế, với mong muốn mang đến vẻ đẹp bền lâu cùng sự tư vấn tận tâm.',
    meetAtelier: 'Tìm hiểu Atelier Pascale',
    images: {
      hero: 'Không gian Atelier Pascale với các món đồ trang trí sơn mài',
      featured: 'Món đồ trang trí nổi bật của Atelier Pascale',
      collections: ['Bộ sưu tập đồ trang trí nhà', 'Bộ sưu tập quà tặng', 'Bộ sưu tập trang sức'],
      artFirst: 'Tác phẩm nghệ thuật trang trí của Atelier Pascale',
      artSecond: 'Tác phẩm nghệ thuật được trưng bày tại Atelier Pascale',
      about: 'Những người đứng sau Atelier Pascale',
    },
  },
}

const collections = [
  {
    image: homeDecorImage,
    href: '/products/home-decor',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    image: giftImage,
    href: '/products/gifts',
    className: 'md:col-span-5',
  },
  {
    image: jewelryImage,
    href: '/products/jewelry',
    className: 'md:col-span-5',
  },
]

function HomePage() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const text = homepageTranslations[language]
  const prefix = language === 'vi' ? '/vi' : ''
  const titleClassName = 'font-sans text-3xl font-normal leading-snug md:text-4xl'

  return (
    <main lang={language}>
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <Image
          src={heroImage}
          alt={text.images.hero}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fill
          preload
        />
        <div className="absolute inset-0 bg-ap-ink/55" />

        <div className="relative mx-auto w-full max-w-[76rem] px-5 pt-50 sm:px-8 md:pb-32 lg:px-12 lg:pb-36">
          <div className="ml-auto max-w-2xl text-right">
            <h1 className="font-title text-7xl text-ap-paper sm:text-8xl lg:text-9xl">
              <span className="block pr-16 md:pr-24 lg:pr-32">Atelier</span>
              <span className="mt-2 block">Pascale</span>
            </h1>
            <p className="ml-auto mt-6 max-w-md text-base leading-7 text-ap-paper/90 md:text-lg">
              {text.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-end gap-5">
              <Link
                href={`${prefix}/products/new-arrival`}
                className="inline-flex items-center gap-3 bg-ap-paper px-6 py-4 text-sm font-semibold text-ap-ink transition duration-300 hover:-translate-y-px hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper active:translate-y-px"
              >
                {text.viewNewArrivals}
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href={`${prefix}/about`}
                className="text-sm font-semibold text-ap-paper underline decoration-ap-paper/45 underline-offset-8 transition hover:decoration-ap-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper"
              >
                {text.ourStory}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 py-10 text-ap-ink sm:px-8 md:py-16 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-[76rem]">
            <p className={`max-w-4xl text-balance ${titleClassName}`}>{text.introduction}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <Reveal>
          <div className="mx-auto grid max-w-[76rem] gap-8 md:grid-cols-12 md:items-center md:gap-14">
            <div className="md:col-span-7">
              <div className="overflow-hidden bg-ap-muted">
                <Image
                  src={featuredImage}
                  alt={text.images.featured}
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-[5/4]"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-4">
              <h2 className={titleClassName}>{text.newArrivals}</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {text.newArrivalsDescription}
              </p>
              <Link
                href={`${prefix}/products/new-arrival`}
                className="group mt-8 inline-flex items-center gap-3 text-base font-semibold"
              >
                {text.exploreNewArrivals}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="collections"
        className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12"
      >
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <h2 className={`max-w-2xl ${titleClassName}`}>{text.exploreCollections}</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[19rem]">
            {collections.map((collection, index) => (
              <Reveal key={collection.href} className={collection.className}>
                <Link
                  href={`${prefix}${collection.href}`}
                  className="group relative block h-full min-h-[25rem] overflow-hidden bg-ap-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-accent md:min-h-0"
                >
                  <Image
                    src={collection.image}
                    alt={text.images.collections[index]}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    fill
                  />
                  <div className="absolute inset-0 bg-ap-ink/45" />
                  <div className="absolute bottom-0 p-6 text-ap-paper md:p-8">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="text-3xl font-medium tracking-tight">
                          {text.collections[index].name}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-ap-paper/78">
                          {text.collections[index].description}
                        </p>
                      </div>
                      <ArrowRight
                        aria-hidden="true"
                        className="mb-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[76rem]">
            <div className="max-w-lg">
              <h2 className={titleClassName}>{text.art}</h2>
              <p className="mt-5 text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                {text.artDescription}
              </p>
              <Link
                href={`${prefix}/products/art`}
                className="group mt-8 inline-flex items-center gap-3 text-base font-semibold"
              >
                {text.exploreArt}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-[76rem]">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden bg-ap-muted">
                <Image
                  src={artFirstImage}
                  alt={text.images.artFirst}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden bg-ap-muted">
                <Image
                  src={artSecondImage}
                  alt={text.images.artSecond}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <Reveal>
          <div className="mx-auto grid max-w-[76rem] overflow-hidden bg-ap-muted md:grid-cols-2">
            <Image
              src={aboutImage}
              alt={text.images.about}
              className="h-full min-h-[28rem] w-full object-cover order-1"
            />
            <div className="flex items-center px-7 py-14 sm:px-10 md:px-14 md:order-2 lg:px-20">
              <div>
                <h2 className={titleClassName}>{text.storyTitle}</h2>
                <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                  {text.storyDescription}
                </p>
                <Link
                  href={`${prefix}/about`}
                  className="group mt-8 inline-flex items-center gap-3 text-base font-semibold"
                >
                  {text.meetAtelier}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

export default HomePage
