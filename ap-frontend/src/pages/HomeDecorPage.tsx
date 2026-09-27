import homeDecorHeroImage from '../assets/images/Background/HomeDecorBackground.jpg'
import homeDecorFirstImage from '../assets/images/Home Decor/Pic 1.jpg'
import homeDecorSecondImage from '../assets/images/Home Decor/Pic 4.jpg'
import homeDecorThirdImage from '../assets/images/Home Decor/Pic 9.jpg'
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
  {
    image: homeDecorThirdImage,
    name: 'Collected character',
    alt: 'Red decorative tray displayed in a living room',
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
        <div className="mx-auto max-w-7xl">
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

          <div className="mt-12 grid gap-5 md:grid-cols-12">
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

            <div className="grid gap-5 md:col-span-5">
              {homeDecorPieces.slice(1).map((piece) => (
                <Reveal key={piece.name}>
                  <figure>
                    <div className="overflow-hidden bg-ap-beige">
                      <img
                        src={piece.image}
                        alt={piece.alt}
                        className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                      />
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
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
