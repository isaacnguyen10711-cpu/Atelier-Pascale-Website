import type { Metadata } from 'next'
import newArrivalHeroImage from '../../../assets/images/Background/NewArrivalBackground.jpg'
import CategoryHero from '../../../components/CategoryHero'

export const metadata: Metadata = { title: 'New Arrival' }

function NewArrivalPage() {
  return (
    <main>
      <CategoryHero
        title="New Arrival"
        description="A quiet collection of new pieces chosen for warmth, detail, and the feeling they bring into a room."
        image={newArrivalHeroImage}
        imagePosition="object-[center_55%]"
      />
    </main>
  )
}

export default NewArrivalPage
