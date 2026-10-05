import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import companyFirstImage from '../../assets/images/About/Pic 2.jpg'
import companySecondImage from '../../assets/images/About/Pic 4.jpg'
import companyThirdImage from '../../assets/images/About/Pic 6.jpg'
import heroImage from '../../assets/images/Background/About Background.jpg'
import Reveal from '../../components/Reveal'

export const metadata: Metadata = { title: 'About' }

function AboutPage() {
  return (
    <main className="bg-ap-paper text-ap-ink">
      <section className="relative flex min-h-[100dvh] items-start overflow-hidden bg-ap-ink text-ap-paper">
        <Image
          src={heroImage}
          alt="The Atelier Pascale studio"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fill
          sizes="100vw"
          preload
        />
        <div className="absolute inset-0 bg-ap-ink/45" />

        <div className="relative mx-auto w-full max-w-[76rem] px-5 pt-48 sm:px-8 lg:px-12">
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
        <div className="mx-auto max-w-[76rem]">
          <section className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <Reveal className="md:col-span-5">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">
                A love for beautiful things
              </h2>
              <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                Atelier Pascale brings together art, home decor, gifts and jewelry chosen for their
                colour, texture and character.
              </p>
              <p className="mt-5 text-base leading-8 text-ap-ink/75 md:text-lg">
                We believe the pieces you surround yourself with should feel personal. Something to
                enjoy every day, share with someone, or keep for years.
              </p>
              <Link
                href="/products/new-arrival"
                className="mt-8 inline-block border-b border-ap-ink pb-2 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
              >
                Discover our collection
              </Link>
            </Reveal>
            <Reveal className="md:col-span-7">
              <Image
                src={companyFirstImage}
                alt="Artisans carefully finishing decorative pieces in the workshop"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </Reveal>
          </section>

          <section className="mt-20 grid gap-10 border-t border-ap-ink/20 pt-16 md:grid-cols-12 md:items-center md:gap-16 lg:mt-28 lg:pt-20">
            <Reveal className="md:col-span-5">
              <Image
                src={companySecondImage}
                alt="A maker working on a cabinet by hand"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </Reveal>
            <Reveal className="md:col-span-7">
              <div className="max-w-2xl">
                <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">
                  Craft at the heart
                </h2>
                <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                  Our workshop is a place of patient work. Shaping, decorating and finishing each
                  surface takes care, attention and a practiced hand.
                </p>
                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="text-base font-semibold">People behind the pieces</h3>
                    <p className="mt-3 text-sm leading-7 text-ap-ink/70">
                      The makers bring their skill and experience to the details you see and feel.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">Character in every detail</h3>
                    <p className="mt-3 text-sm leading-7 text-ap-ink/70">
                      From a curved silhouette to a decorative finish, small decisions give a piece
                      its personality.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mt-20 grid gap-10 border-t border-ap-ink/20 pt-16 md:grid-cols-12 md:items-center md:gap-16 lg:mt-28 lg:pt-20">
            <Reveal className="md:col-span-6">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl">
                The people behind Atelier Pascale
              </h2>
              <p className="mt-6 text-base leading-8 text-ap-ink/75 md:text-lg">
                Our story is also about the people who make it possible, from the workshop to the
                collection you see here.
              </p>
              <p className="mt-5 text-base leading-8 text-ap-ink/75 md:text-lg">
                Shared work and moments together are part of everyday life at Atelier Pascale. That
                personal connection is at the heart of what we do.
              </p>
            </Reveal>
            <Reveal className="md:col-span-6">
              <Image
                src={companyThirdImage}
                alt="The Atelier Pascale team sharing a meal together"
                loading="lazy"
                className="aspect-[14/15] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </Reveal>
          </section>

          <Reveal>
            <section className="mt-20 flex flex-col gap-8 border-t border-ap-ink/20 pt-10 md:flex-row md:items-center md:justify-between lg:mt-28">
              <div>
                <h2 className="font-title text-5xl font-normal leading-none md:text-6xl">
                  Let us help you choose
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-ap-ink/70">
                  Have a piece in mind? Get in touch for details and availability.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block shrink-0 self-start border border-ap-ink px-8 py-4 text-base font-semibold transition-colors hover:bg-ap-beige focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink md:self-auto"
              >
                Contact us
              </Link>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
