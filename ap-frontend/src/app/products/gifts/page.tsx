import type { Metadata } from 'next'
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
    alt: 'Decorative gift box with a botanical pattern',
  },
  {
    image: giftSecondImage,
    name: 'Small gestures',
    alt: 'Hand-finished decorative gift box',
  },
  {
    image: giftThirdImage,
    name: 'Special occasions',
    alt: 'A curated gift presentation from Atelier Pascale',
  },
]

const additionalGiftPieces = [
  {
    image: giftFourthImage,
    name: 'Playful details',
    alt: 'Colorful lacquerware gifts with dragonfly motifs',
  },
  {
    image: giftFifthImage,
    name: 'Keepsake boxes',
    alt: 'Pink, red and turquoise floral keepsake boxes',
  },
  {
    image: giftSixthImage,
    name: 'Lacquerware collection',
    alt: 'Red lacquerware gifts decorated with gold floral details',
  },
]

export const metadata: Metadata = { title: 'Gifts' }

function GiftsPage() {
  return (
    <main>
      <CategoryHero
        title="Gifts"
        description="Thoughtful pieces selected for personal moments, quiet celebrations, and meaningful keepsakes."
        image={giftHeroImage}
        imagePosition="object-[center_70%]"
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Thoughtful gestures
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Personal pieces for celebrations, hosts, milestones and the small moments that
                deserve to be remembered.
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
                        alt={piece.alt}
                        className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[30rem]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </figure>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <div className="mt-24 max-w-2xl">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Keepsakes with character
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Expressive lacquerware and decorative pieces made to bring colour, craft and
                personality to a thoughtful gift.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <Image
                    src={additionalGiftPieces[0].image}
                    alt={additionalGiftPieces[0].alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[38rem]"
                    sizes="(max-width: 768px) 100vw, 60vw"
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
                        alt={piece.alt}
                        className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              Find something personal for a celebration, a meaningful thank you or an everyday
              gesture.
            </p>
            <EnquiryLink />
          </div>
        </div>
      </section>
    </main>
  )
}

export default GiftsPage
