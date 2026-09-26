import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutImage from '../assets/images/About/Pic 2.jpg'
import artImage from '../assets/images/Art/Pic 5.jpg'
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
  {
    name: 'Art',
    description: 'Expressive work made to hold a room.',
    image: artImage,
    href: '/products/art',
    className: 'md:col-span-12',
  },
]

function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <img
          src={heroImage}
          alt="Atelier Pascale home interior with decorative lacquerware"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ap-ink/55" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-50 sm:px-8 md:pb-32 lg:px-12 lg:pb-36">
          <div className="ml-auto max-w-2xl text-right">
            <h1 className="font-title text-7xl text-ap-paper sm:text-8xl lg:text-9xl">
              <span className="block my-4 pr-24 md:pr-32 lg:pr-40">Atelier</span>
              <span className="mt-2 block">Pascale</span>
            </h1>
            <p className="ml-auto mt-6 max-w-md text-base leading-7 text-ap-paper/90 md:text-lg">
              Art, objects and gifts selected to bring lasting character into everyday spaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-end gap-5">
              <Link
                to="/products/new-arrival"
                className="inline-flex items-center gap-3 bg-ap-paper px-6 py-4 text-sm font-semibold text-ap-ink transition duration-300 hover:-translate-y-px hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper active:translate-y-px"
              >
                View new arrivals <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold text-ap-paper underline decoration-ap-paper/45 underline-offset-8 transition hover:decoration-ap-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 py-24 text-ap-ink sm:px-8 md:py-32 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              Pieces chosen for how they live with you, not simply how they look on a shelf.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-center md:gap-14">
            <div className="md:col-span-7">
              <div className="overflow-hidden bg-ap-muted">
                <img
                  src={featuredImage}
                  alt="A featured decorative piece from Atelier Pascale"
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-[5/4]"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-4">
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl">New arrivals</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                A changing edit of recent finds, selected for texture, proportion and the feeling they bring to a room.
              </p>
              <Link to="/products/new-arrival" className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold">
                Explore the edit
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="collections" className="bg-ap-paper px-5 pb-24 text-ap-ink sm:px-8 md:pb-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">Explore the collections</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[19rem]">
            {collections.map((collection) => (
              <Reveal key={collection.name} className={collection.className}>
                <Link
                  to={collection.href}
                  className="group relative block h-full min-h-[25rem] overflow-hidden bg-ap-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-accent md:min-h-0"
                >
                  <img
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
          <div className="mx-auto grid max-w-7xl overflow-hidden bg-ap-muted md:grid-cols-2">
            <img src={aboutImage} alt="The people behind Atelier Pascale" className="h-full min-h-[28rem] w-full object-cover" />
            <div className="flex items-center px-7 py-14 sm:px-10 md:px-14 lg:px-20">
              <div>
                <h2 className="text-4xl font-medium tracking-tight md:text-5xl">A personal point of view</h2>
                <p className="mt-5 max-w-md text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                  Atelier Pascale brings together art, home pieces and thoughtful gifts with a focus on lasting beauty and personal service.
                </p>
                <Link to="/about" className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold">
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
