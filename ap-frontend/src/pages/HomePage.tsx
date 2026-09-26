import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import newArrivalHomeDecor from '../assets/images/Home Decor/Pic 11.jpg'
import newArrivalGiftOne from '../assets/images/Gift/Pic 11.jpg'
import newArrivalGiftTwo from '../assets/images/Gift/Pic 16.jpeg'
import homeDecorOne from '../assets/images/Home Decor/Pic 1.jpg'
import homeDecorTwo from '../assets/images/Home Decor/Pic 2.jpg'
import giftOne from '../assets/images/Gift/Pic 1.jpg'
import giftTwo from '../assets/images/Gift/Pic 2.jpg'
import giftThree from '../assets/images/Gift/Pic 3.jpg'
import giftFour from '../assets/images/Gift/Pic 4.jpg'
import jewelry from '../assets/images/Jewelry/Pic 3.jpg'
import artOne from '../assets/images/Art/Pic 5.jpg'
import artTwo from '../assets/images/Art/Pic 6.jpg'
import artThree from '../assets/images/Art/Pic 7.jpg'
import artFour from '../assets/images/Art/Pic 8.jpg'

const newArrivalImages = [
  newArrivalHomeDecor,
  newArrivalGiftOne,
  newArrivalGiftTwo,
]
const homeDecorImages = [
  homeDecorOne,
  homeDecorTwo,
]
const giftsImages = [
  giftOne,
  giftTwo,
  giftThree,
  giftFour,
]
const jewelryImage = jewelry
const artImages = [
  artOne,
  artTwo,
  artThree,
  artFour,
]

const buttonClass = "mt-8 inline-block cursor-pointer border border-ap-brown px-7 py-3 text-xs uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-1 hover:bg-ap-brown hover:text-ap-tan active:translate-y-0 md:px-8 md:text-sm lg:px-9 lg:py-4"
const headingClass = "font-['Tangerine'] text-5xl font-bold transition duration-500 hover:-translate-y-1 md:text-6xl lg:text-7xl"
const bodyClass = 'mt-5 text-sm leading-7 text-ap-brown md:mt-6 md:text-base md:leading-8 lg:text-lg lg:leading-9'

function HomePage() {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute bg-home" />
        <div className="absolute inset-0 flex flex-col items-end justify-center pr-10 text-white md:pr-20 lg:pr-30">
          <Reveal><h1 className="pr-15 font-['Mea_Culpa'] text-[4rem] font-thin tracking-[0.15em] transition duration-500 hover:translate-x-2 md:pr-30 md:text-[5rem] lg:pr-50 lg:text-[7rem]">Atelier</h1></Reveal>
          <Reveal delay={0.4}><h1 className="font-['Mea_Culpa'] text-[4rem] font-thin tracking-[0.15em] transition duration-500 hover:translate-x-2 md:mt-[0.2rem] md:text-[5rem] lg:mt-[0.5rem] lg:text-[7rem]">Pascale</h1></Reveal>
        </div>
      </section>

      <main className="bg-ap-tan px-6 py-20 text-ap-brown md:px-12 lg:px-20">
        <Reveal>
          <section id="new-arrival" className="mx-auto max-w-5xl lg:max-w-6xl">
            <h2 className={`mt-[-2rem] text-center ${headingClass}`}>New Arrival</h2>
            <div className="mx-auto mt-5 grid w-full gap-10 md:mt-7 md:w-[90%] md:grid-cols-2 md:gap-12 lg:mt-9 lg:w-[80%] lg:gap-15">
              <div className="transition duration-300 hover:-translate-y-1"><div className="overflow-hidden rounded"><img src={newArrivalImages[0]} alt="New arrival collection" className="mx-auto h-[240px] w-full scale-105 object-cover object-center lg:h-[300px]" /></div><h3 className="mx-auto mt-5 font-['Tangerine'] text-4xl font-bold transition duration-300 hover:text-ap-beige md:text-5xl lg:text-6xl">Latest Pieces</h3><p className="mt-2 text-sm leading-7 text-ap-brown md:text-base md:leading-8 lg:text-lg lg:leading-9">Recently added pieces selected for quiet rooms, warm shelves, and slow-looking corners.</p></div>
              <div className="transition duration-300 hover:-translate-y-1"><div className="overflow-hidden rounded"><img src={newArrivalImages[1]} alt="Featured art arrival" className="mx-auto h-[240px] w-full object-cover object-center lg:h-[300px]" /></div><h3 className="mx-auto mt-5 font-['Tangerine'] text-4xl font-bold transition duration-300 hover:text-ap-beige md:text-5xl lg:text-6xl">Collected Forms</h3><p className="mt-2 text-sm leading-7 text-ap-brown md:text-base md:leading-8 lg:text-lg lg:leading-9">A soft introduction to the newest textures, surfaces, and handmade details.</p></div>
            </div>
            <div className="mx-auto mt-10 w-full text-center md:mt-12 md:w-[45%] lg:mt-14 lg:w-[40%]"><div className="overflow-hidden rounded transition duration-300 hover:-translate-y-1"><img src={newArrivalImages[2]} alt="Centered new arrival feature" className="mx-auto h-[240px] w-full object-cover object-center lg:h-[300px]" /></div><Link to="/products/new-arrival" className={buttonClass}>Discover More</Link></div>
          </section>
        </Reveal>

        <Reveal>
          <section id="home-decor" className="mx-auto mt-24 grid max-w-6xl gap-8 md:mt-28 md:grid-cols-2 md:items-center md:gap-10 lg:mt-32 lg:gap-12">
            <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-ap-brown md:text-sm lg:text-base">Timeless Elegance</p><h2 className={headingClass}>Home Decor</h2><p className={bodyClass}>Objects and finishes chosen to bring warmth, stillness, and character into everyday rooms.</p><Link to="/products/home-decor" className={buttonClass}>Explore</Link></div>
            <div className="grid gap-4 md:grid-cols-[5fr_4fr] md:gap-5 lg:gap-6"><div className="overflow-hidden rounded transition duration-300 hover:-translate-y-1"><img src={homeDecorImages[0]} alt="Home decor collection" className="mx-auto h-[420px] w-full object-cover object-center md:h-[320px] lg:h-[420px]" /></div><div className="overflow-hidden rounded transition duration-300 hover:-translate-y-1 md:mt-10"><img src={homeDecorImages[1]} alt="Home decor detail" className="mx-auto h-[420px] w-full object-cover object-center md:h-[270px] lg:h-[350px]" /></div></div>
          </section>
        </Reveal>

        <Reveal>
          <section id="gifts" className="mx-auto mt-24 max-w-6xl md:mt-28 lg:mt-32">
            <div className="mb-8 text-center md:mb-10 lg:mb-12"><p className="mb-4 text-xs uppercase tracking-[0.3em] text-ap-brown md:text-sm lg:text-base">Thoughtful Gestures</p><h2 className={headingClass}>Gifts</h2><p className={`mx-auto max-w-3xl ${bodyClass}`}>Small pieces with presence, made for celebrations, quiet gratitude, and personal keepsakes.</p></div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">{giftsImages.map((image, index) => <div key={image} className={`overflow-hidden rounded transition duration-300 hover:-translate-y-1 ${index === 2 ? 'md:self-center' : ''}`}><img src={image} alt={`Gift collection ${index + 1}`} className={index === 1 ? 'mx-auto h-[180px] w-full object-cover object-center md:h-[320px] lg:h-[430px]' : 'mx-auto h-[180px] w-full object-cover object-center md:h-[250px] lg:h-[350px]'} /></div>)}</div>
            <div className="text-center"><Link to="/products/gifts" className={buttonClass}>Explore</Link></div>
          </section>
        </Reveal>

        <Reveal>
          <section id="jewelry" className="mx-auto mt-24 grid max-w-6xl gap-8 md:mt-28 md:grid-cols-2 md:items-center md:gap-12 lg:mt-32 lg:gap-16">
            <div className="order-2 overflow-hidden rounded transition duration-300 hover:-translate-y-1 md:order-1"><img src={jewelryImage} alt="Jewelry collection" className="mx-auto h-[400px] w-full object-cover object-center md:h-[340px] lg:h-[550px]" /></div>
            <div className="order-1 md:order-2"><p className="mb-4 text-xs uppercase tracking-[0.3em] text-ap-brown md:text-sm lg:text-base">Personal Details</p><h2 className={headingClass}>Jewelry</h2><p className={bodyClass}>Delicate accents and expressive forms selected for everyday wear and meaningful moments.</p><Link to="/products/jewelry" className={buttonClass}>Explore</Link></div>
          </section>
        </Reveal>

        <Reveal>
          <section id="art" className="mx-auto mt-24 max-w-6xl pb-10 md:mt-28 md:pb-12 lg:mt-32 lg:pb-14">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 lg:gap-8">
              <div className="col-span-2 m-1 md:col-span-1 md:m-2 lg:m-3"><p className="mb-4 text-xs uppercase tracking-[0.3em] text-ap-brown md:text-sm lg:text-base">Moments Become Art</p><h2 className={headingClass}>Art</h2><p className={bodyClass}>Expressive pieces arranged with space to breathe, made to be discovered slowly.</p><Link to="/products/art" className={`${buttonClass} mt-4 md:mt-6 lg:mt-8`}>Explore</Link></div>
              {artImages.map((image, index) => <div key={image} className="overflow-hidden rounded transition duration-300 hover:-translate-y-1"><img src={image} alt={`Art collection ${index + 1}`} className="h-[200px] w-full object-cover object-center md:h-[240px] lg:h-[280px]" /></div>)}
            </div>
          </section>
        </Reveal>
      </main>
    </>
  )
}

export default HomePage
