import artHeroImage from '../assets/images/Background/ArtBackground.jpg'
import CategoryHero from '../components/CategoryHero'

function ArtPage() {
  return (
    <main>
      <CategoryHero
        title="Art"
        description="Expressive pieces selected to shape the mood of a room and invite slower looking."
        image={artHeroImage}
        imagePosition="object-[center_30%]"
      />
    </main>
  )
}

export default ArtPage
