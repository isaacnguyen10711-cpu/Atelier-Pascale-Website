import jewelryHeroImage from '../assets/images/Background/JeweleryBackground.jpg'
import jewelryFirstImage from '../assets/images/Jewelry/Pic 3.jpg'
import jewelrySecondImage from '../assets/images/Jewelry/Pic 1.jpg'
import jewelryThirdImage from '../assets/images/Jewelry/Pic 4.jpg'
import jewelryFourthImage from '../assets/images/Jewelry/Pic 8.jpg'
import jewelryFifthImage from '../assets/images/Jewelry/Pic 5.jpg'
import CategoryHero from '../components/CategoryHero'
import EnquiryLink from '../components/EnquiryLink'
import Reveal from '../components/Reveal'

function JewelryPage() {
  return (
    <main>
      <CategoryHero
        title="Jewelry"
        description="Delicate accents and expressive details chosen for everyday wear and lasting sentiment."
        image={jewelryHeroImage}
      />

      <section className="bg-ap-paper px-5 py-20 text-ap-ink sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Colour in motion
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Silk-wrapped beads and polished forms bring vivid colour, soft texture and an expressive finish to everyday dressing.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-7">
              <figure>
                <div className="overflow-hidden bg-ap-beige">
                  <img
                    src={jewelryFirstImage}
                    alt="Long necklaces made with bright silk-wrapped beads"
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[46rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <div className="grid gap-8 md:col-span-5">
              <Reveal>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <img
                      src={jewelrySecondImage}
                      alt="Blue, black and pink resin bangles"
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105 md:h-[18rem]"
                    />
                  </div>
                </figure>
              </Reveal>

              <Reveal>
                <figure>
                  <div className="overflow-hidden bg-ap-beige">
                    <img
                      src={jewelryThirdImage}
                      alt="Yellow and charcoal silk-wrapped bead necklaces"
                      className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[26rem]"
                    />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ap-paper px-5 pb-20 pt-8 text-ap-ink sm:px-8 md:pb-28 md:pt-16 lg:px-12">
        <div className="mx-auto max-w-[76rem]">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Sculptural details
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Bold links, curved silhouettes and natural tonal variation give each piece a distinctive sense of rhythm and character.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-stretch">
            <Reveal className="md:col-span-7">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <img
                    src={jewelryFourthImage}
                    alt="Statement necklace with orange and horn-toned links"
                    className="aspect-[4/5] w-full object-contain transition duration-500 hover:scale-105 md:h-[40rem]"
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal className="md:col-span-5">
              <figure className="h-full">
                <div className="h-full overflow-hidden bg-ap-beige">
                  <img
                    src={jewelryFifthImage}
                    alt="Black and ivory leaf-shaped drop earrings"
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:h-[40rem]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ap-ink/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ap-ink/70">
              Ask us about available pieces, materials and finding a style that feels distinctly yours.
            </p>
            <EnquiryLink />
          </div>
        </div>
      </section>
    </main>
  )
}

export default JewelryPage
