import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import artHeroImage from '../assets/images/Background/ArtBackground.jpg'
import giftHeroImage from '../assets/images/Background/GiftBackground.jpg'
import homeDecorHeroImage from '../assets/images/Background/HomeDecorBackground.jpg'
import jewelryHeroImage from '../assets/images/Background/JeweleryBackground.jpg'
import newArrivalHeroImage from '../assets/images/Background/NewArrivalBackground.jpg'
import giftFirstImage from '../assets/images/Gift/Pic 1.jpg'
import giftSecondImage from '../assets/images/Gift/Pic 6.jpg'
import giftThirdImage from '../assets/images/Gift/Pic 11.jpg'
import homeDecorFirstImage from '../assets/images/Home Decor/Pic 1.jpg'
import homeDecorSecondImage from '../assets/images/Home Decor/Pic 4.jpg'
import homeDecorThirdImage from '../assets/images/Home Decor/Pic 9.jpg'
import Reveal from '../components/Reveal'

const categories = {
  'new-arrival': {
    title: 'New Arrival',
    description: 'A quiet collection of new pieces chosen for warmth, detail, and the feeling they bring into a room.',
    image: newArrivalHeroImage,
    imagePosition: 'object-[center_55%]',
  },
  'home-decor': {
    title: 'Home Decor',
    description: 'Warm objects and finishes chosen to bring stillness, texture, and character into everyday spaces.',
    image: homeDecorHeroImage,
    imagePosition: 'object-[center_70%]',
  },
  gifts: {
    title: 'Gifts',
    description: 'Thoughtful pieces selected for personal moments, quiet celebrations, and meaningful keepsakes.',
    image: giftHeroImage,
    imagePosition: 'object-[center_70%]',
  },
  jewelry: {
    title: 'Jewelry',
    description: 'Delicate accents and expressive details chosen for everyday wear and lasting sentiment.',
    image: jewelryHeroImage,
    imagePosition: 'object-center',
  },
  art: {
    title: 'Art',
    description: 'Expressive pieces selected to shape the mood of a room and invite slower looking.',
    image: artHeroImage,
    imagePosition: 'object-[center_30%]',
  },
} as const

const homeDecorPieces = [
  {
    image: homeDecorFirstImage,
    name: 'Objects with presence',
    group: 'Living spaces',
    alt: 'Decorative arrangement selected by Atelier Pascale',
  },
  {
    image: homeDecorSecondImage,
    name: 'Quiet detail',
    group: 'Decorative objects',
    alt: 'Decorative home object with floral detail',
  },
  {
    image: homeDecorThirdImage,
    name: 'Collected character',
    group: 'For the home',
    alt: 'Red decorative tray displayed in a living room',
  },
]

const giftPieces = [
  {
    image: giftFirstImage,
    name: 'For the home',
    group: 'Warm and useful',
    alt: 'Decorative gift box with a botanical pattern',
  },
  {
    image: giftSecondImage,
    name: 'Small gestures',
    group: 'Chosen with care',
    alt: 'Hand-finished decorative gift box',
  },
  {
    image: giftThirdImage,
    name: 'Special occasions',
    group: 'Made memorable',
    alt: 'A curated gift presentation from Atelier Pascale',
  },
]

function PieceCaption({ name, group }: { name: string; group: string }) {
  return (
    <figcaption className="flex justify-between gap-5 pt-3 text-sm leading-6">
      <span>{name}</span>
      <span className="text-right text-ap-ink/60">{group}</span>
    </figcaption>
  )
}

function EnquiryLink() {
  return (
    <a
      href="mailto:isaac.nguyen10711@gmail.com"
      className="group inline-flex shrink-0 items-center gap-3 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
    >
      Enquire about a piece
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
    </a>
  )
}

function HomeDecorContent() {
  return (
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
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:h-[42rem]"
                />
              </div>
              <PieceCaption name={homeDecorPieces[0].name} group={homeDecorPieces[0].group} />
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
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[19rem]"
                    />
                  </div>
                  <PieceCaption name={piece.name} group={piece.group} />
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
  )
}

function GiftsContent() {
  return (
    <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
              Thoughtful gestures
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
              Personal pieces for celebrations, hosts, milestones and the small moments that deserve to be remembered.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-3 md:items-start">
          {giftPieces.map((piece, index) => {
            const staggerClassName = index === 0 ? 'md:mt-14' : index === 2 ? 'md:mt-24' : ''

            return (
              <Reveal key={piece.name} className={staggerClassName}>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <img
                      src={piece.image}
                      alt={piece.alt}
                      className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <PieceCaption name={piece.name} group={piece.group} />
                </figure>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
            Find something personal for a celebration, a meaningful thank you or an everyday gesture.
          </p>
          <EnquiryLink />
        </div>
      </div>
    </section>
  )
}

function CategoryPage() {
  const { categoryName } = useParams()
  const category = categoryName && categoryName in categories
    ? categories[categoryName as keyof typeof categories]
    : null

  if (!category) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ap-ink text-ap-paper">
        <img
          src={category.image}
          alt={`${category.title} collection at Atelier Pascale`}
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover ${category.imagePosition}`}
        />
        <div className="absolute inset-0 bg-ap-ink/55" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8 lg:px-12">
          <div className="ml-auto max-w-3xl text-right">
            <Reveal key={`${categoryName}-title`}>
              <h1 className="font-title text-7xl font-normal leading-none tracking-wide sm:text-8xl lg:text-9xl">
                {category.title}
              </h1>
            </Reveal>
            <Reveal key={`${categoryName}-description`} delay={0.4}>
              <p className="ml-auto mt-6 max-w-xl text-base leading-7 text-ap-paper/90 md:text-lg md:leading-8">
                {category.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {categoryName === 'home-decor' && <HomeDecorContent />}
      {categoryName === 'gifts' && <GiftsContent />}
    </main>
  )
}

export default CategoryPage
