import homeDecorHeroImage from '../assets/images/Background/HomeDecorBackground.jpg'
import homeDecorFirstImage from '../assets/images/Home Decor/Pic 12.jpg'
import homeDecorSecondImage from '../assets/images/Home Decor/Pic 11.jpg'
import homeDecorThirdImage from '../assets/images/Home Decor/Pic 1.jpg'
import homeDecorFourthImage from '../assets/images/Home Decor/Pic 7.jpg'
import homeDecorFifthImage from '../assets/images/Home Decor/Pic 8.jpg'
import CategoryHero from '../components/CategoryHero'
import EnquiryLink from '../components/EnquiryLink'
import Reveal from '../components/Reveal'

const homeDecorPieces = [
  {
    image: homeDecorFirstImage,
    name: 'Objects with presence',
    alt: 'Decorative arrangement selected by Atelier Pascale',
  },
  {
    image: homeDecorSecondImage,
    name: 'Quiet detail',
    alt: 'Decorative home object with floral detail',
  },
]

const additionalHomeDecorPieces = [
  {
    image: homeDecorThirdImage,
    name: 'Table setting',
    alt: 'Tea cups and flowers arranged on a decorative tray',
  },
  {
    image: homeDecorFourthImage,
    name: 'Floral vase',
    alt: 'Red lacquer vase decorated with pink blossoms',
  },
  {
    image: homeDecorFifthImage,
    name: 'Painted objects',
    alt: 'Painted lacquer tray and box with red flower motifs',
  },
]

function HomeDecorPage() {
  return (
    <main>
      <CategoryHero
        title="Home Decor"
        description="Warm objects and finishes chosen to bring stillness, texture, and character into everyday spaces."
        image={homeDecorHeroImage}
        imagePosition="object-[center_70%]"
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Objects for considered rooms
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Layered forms, finishes and useful objects chosen to bring warmth and a lived-in point of view to everyday spaces.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={homeDecorPieces[0].image}
                    alt={homeDecorPieces[0].alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[38rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={homeDecorPieces[1].image}
                    alt={homeDecorPieces[1].alt}
                    className="aspect-[4/5] w-full object-cover object-[35%] transition duration-500 hover:scale-105 md:aspect-auto md:h-[38rem]"
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
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Colour, form and finish
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Vases, trays and decorative objects chosen to add a confident focal point without overwhelming a room.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-4 md:mt-16">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={additionalHomeDecorPieces[0].image}
                    alt={additionalHomeDecorPieces[0].alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[30rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-4">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={additionalHomeDecorPieces[1].image}
                    alt={additionalHomeDecorPieces[1].alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[36rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-4 md:mt-16">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={additionalHomeDecorPieces[2].image}
                    alt={additionalHomeDecorPieces[2].alt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[30rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              Discover objects selected to bring texture, balance and lasting character into the home.
            </p>
            <EnquiryLink />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeDecorPage
