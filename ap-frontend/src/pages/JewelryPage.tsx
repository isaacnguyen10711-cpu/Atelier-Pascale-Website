import jewelryHeroImage from '../assets/images/Background/JeweleryBackground.jpg'
import CategoryHero from '../components/CategoryHero'

function JewelryPage() {
  return (
    <main>
      <CategoryHero
        title="Jewelry"
        description="Delicate accents and expressive details chosen for everyday wear and lasting sentiment."
        image={jewelryHeroImage}
      />
    </main>
  )
}

export default JewelryPage
