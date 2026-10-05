import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Reveal from './Reveal'

type CategoryHeroProps = {
  title: string
  description: string
  image: StaticImageData
  imagePosition?: string
}

function CategoryHero({
  title,
  description,
  image,
  imagePosition = 'object-center',
}: CategoryHeroProps) {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ap-ink text-ap-paper">
      <Image
        fill
        preload
        src={image}
        alt={`${title} collection at Atelier Pascale`}
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
      />
      <div className="absolute inset-0 bg-ap-ink/55" />

      <div className="relative mx-auto w-full max-w-[76rem] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="ml-auto max-w-3xl text-right">
          <Reveal>
            <h1 className="font-sans text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="ml-auto mt-6 max-w-xl text-base leading-7 text-ap-paper/90 md:text-lg md:leading-8">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CategoryHero
