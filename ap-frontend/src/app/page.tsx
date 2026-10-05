import Image from 'next/image'
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

const collections = [
  {
    name: 'Home Decor',
    description: 'Objects that bring warmth and character to everyday rooms.',
    image: homeDecorImage,
    href: '/products/home-decor',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    name: 'Gifts',
    description: 'Thoughtful pieces for meaningful occasions.',
    image: giftImage,
    href: '/products/gifts',
    className: 'md:col-span-5',
  },
  {
    name: 'Jewelry',
    description: 'Personal details selected for everyday wear.',
    image: jewelryImage,
    href: '/products/jewelry',
    className: 'md:col-span-5',
  },
]

function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <Image
          src={heroImage}
          alt="Atelier Pascale home interior with decorative lacquerware"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fill
          sizes="100vw"
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
              Art, objects and gifts selected to bring lasting character into everyday spaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-end gap-5">
              <Link
                href="/products/new-arrival"
                className="inline-flex items-center gap-3 bg-ap-paper px-6 py-4 text-sm font-semibold text-ap-ink transition duration-300 hover:-translate-y-px hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper active:translate-y-px"
              >
                View new arrivals <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-ap-paper underline decoration-ap-paper/45 underline-offset-8 transition hover:decoration-ap-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 py-10 text-ap-ink sm:px-8 md:py-16 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-[76rem]">
            <p className="max-w-4xl font-title text-6xl font-normal leading-none text-balance md:text-7xl">
              Pieces chosen for how they live with you, not simply how they look on a shelf.
            </p>
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
                  alt="A featured decorative piece from Atelier Pascale"
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-[5/4]"
                  sizes="(max-width: 768px) 100vw, 60vw"
        />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-4">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">New arrivals</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Recent finds, selected for texture, proportion and the feeling they bring to a room.
              </p>
              <Link href="/products/new-arrival" className="group mt-8 inline-flex items-center gap-3 text-base font-semibold">
                Explore New Arrivals
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="collections" className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <h2 className="max-w-2xl font-title text-6xl font-normal leading-none md:text-7xl">Explore the collections</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[19rem]">
            {collections.map((collection) => (
              <Reveal key={collection.name} className={collection.className}>
                <Link
                  href={collection.href}
                  className="group relative block h-full min-h-[25rem] overflow-hidden bg-ap-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-accent md:min-h-0"
                >
                  <Image
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    fill
          sizes="100vw"
          preload
        />
                  <div className="absolute inset-0 bg-ap-ink/45" />
                  <div className="absolute bottom-0 p-6 text-ap-paper md:p-8">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="text-3xl font-medium tracking-tight">{collection.name}</h3>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-ap-paper/78">{collection.description}</p>
                      </div>
                      <ArrowRight aria-hidden="true" className="mb-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1" strokeWidth={2} />
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
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">Art</h2>
              <p className="mt-5 text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Expressive pieces selected to bring colour, character and a distinct point of view into a room.
              </p>
              <Link href="/products/art" className="group mt-8 inline-flex items-center gap-3 text-base font-semibold">
                Explore art
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-[76rem]">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden bg-ap-muted">
                <Image
                  src={artFirstImage}
                  alt="Decorative artwork from Atelier Pascale"
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
        />
              </div>
              <div className="overflow-hidden bg-ap-muted">
                <Image
                  src={artSecondImage}
                  alt="Artwork displayed by Atelier Pascale"
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
        />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <Reveal>
          <div className="mx-auto grid max-w-[76rem] overflow-hidden bg-ap-muted md:grid-cols-2">
            <Image src={aboutImage} alt="The people behind Atelier Pascale" className="h-full min-h-[28rem] w-full object-cover order-1"   sizes="(max-width: 768px) 100vw, 60vw"
        />
            <div className="flex items-center px-7 py-14 sm:px-10 md:px-14 md:order-2 lg:px-20">
              <div>
                <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">Our Story</h2>
                <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                  Atelier Pascale brings together art, home pieces and thoughtful gifts with a focus on lasting beauty and personal service.
                </p>
                <Link href="/about" className="group mt-8 inline-flex items-center gap-3 text-base font-semibold">
                  Meet Atelier Pascale
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
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
