import { Navigate, useParams } from 'react-router-dom'
import artHeroImage from '../assets/images/Background/ArtBackground.jpg'
import giftHeroImage from '../assets/images/Background/GiftBackground.jpg'
import homeDecorHeroImage from '../assets/images/Background/HomeDecorBackground.jpg'
import jewelryHeroImage from '../assets/images/Background/JeweleryBackground.jpg'
import newArrivalHeroImage from '../assets/images/Background/NewArrivalBackground.jpg'
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
    </main>
  )
}

export default CategoryPage
