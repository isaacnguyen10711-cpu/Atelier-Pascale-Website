import { Link } from 'react-router-dom'
import companyFirstImage from '../assets/images/About/Pic 2.jpg'
import companySecondImage from '../assets/images/About/Pic 4.jpg'
import heroImage from '../assets/images/Background/About Background.jpg'
import Reveal from '../components/Reveal'

const companyImages = [
  {
    src: companyFirstImage,
    alt: 'The Atelier Pascale team together',
  },
  {
    src: companySecondImage,
    alt: 'The people behind Atelier Pascale',
  },
]

function AboutPage() {
  return (
    <main className="bg-ap-paper text-ap-ink">
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <img
          src={heroImage}
          alt="The Atelier Pascale studio"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ap-ink/45" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-48 sm:px-8 lg:px-12">
          <div className="ml-auto max-w-2xl text-right">
            <p className="mb-4 text-sm uppercase tracking-widest text-ap-paper/90">
              Atelier Pascale
            </p>
            <h1 className="font-title text-7xl font-normal tracking-wide sm:text-8xl lg:text-9xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 border-b border-ap-ink/30 pb-16 md:grid-cols-[5fr_7fr] md:gap-16 lg:pb-20">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Made to feel collected, not crowded.
              </h2>
              <div className="space-y-5 text-base leading-8 text-ap-ink/75 md:text-lg md:leading-9">
                <p>
                  Atelier Pascale brings together art, home pieces, and thoughtful gifts with a softer sense of luxury. The focus is not on having more, but on choosing pieces that feel personal and lasting.
                </p>
                <p>
                  Every product is selected with attention to texture, proportion, and mood, so each piece can sit naturally inside a home while still feeling special.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <section className="py-16 lg:py-20">
              <div className="mb-10 max-w-3xl">
                <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">
                  The people behind Atelier Pascale
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-ap-ink/75 md:text-lg md:leading-9">
                  Our company is shaped by a small team with a shared eye for thoughtful spaces, careful presentation, and personal service.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {companyImages.map((image) => (
                  <div key={image.src} className="overflow-hidden bg-ap-beige">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-center transition duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-y border-ap-ink/30 py-14 text-center md:py-16">
              <p className="mx-auto max-w-4xl font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                A home should hold the things you love slowly.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section className="grid gap-10 pt-16 md:grid-cols-[6fr_5fr] md:items-end md:gap-16 lg:pt-20">
              <div>
                <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">
                  Explore the collection
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-ap-ink/75 md:text-lg md:leading-9">
                  Start with new arrivals or browse the art category to find pieces that shape the tone of a space.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <Link
                  to="/products/new-arrival"
                  className="w-full border border-ap-ink px-6 py-4 text-center text-sm font-semibold transition duration-300 hover:-translate-y-px hover:bg-ap-beige focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink active:translate-y-px md:w-72"
                >
                  New Arrivals
                </Link>
                <Link
                  to="/products/art"
                  className="w-full border border-ap-ink px-6 py-4 text-center text-sm font-semibold transition duration-300 hover:-translate-y-px hover:bg-ap-beige focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink active:translate-y-px md:w-72"
                >
                  View Art
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
