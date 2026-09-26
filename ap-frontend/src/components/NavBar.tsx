import { useState } from 'react'
import { House, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  ['New Arrival', '/products/new-arrival'], ['Home Decor', '/products/home-decor'],
  ['Gifts', '/products/gifts'], ['Jewelry', '/products/jewelry'],
  ['Art', '/products/art'], ['About', '/about'],
]

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white bg-transparent text-white shadow-md">
      <div className="mx-auto grid grid-cols-[25%_50%_25%] items-center px-4 py-4 text-sm font-medium md:text-base lg:text-lg">
        <div className="md:hidden"><button type="button" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer hover:text-gray-300">{isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div>
        <div className="justify-self-center md:justify-self-start"><div className="flex items-center gap-2"><Link className="hover:text-gray-300" to="/"><House className="hidden h-4 w-4 md:flex md:h-6 md:w-6 lg:h-8 lg:w-8" /></Link><Link to="/" className="hover:text-gray-300">Atelier Pascale</Link></div></div>
        <div className="hidden justify-center md:flex md:gap-6 lg:gap-8">{links.map(([label, to]) => <Link key={to} className="hover:text-gray-300" to={to}>{label}</Link>)}</div>
        <div />
      </div>
      {isMenuOpen && <div className="border-t border-white bg-black/30 px-4 py-4 backdrop-blur-sm md:hidden"><div className="flex flex-col items-center gap-4 text-sm font-medium">{links.map(([label, to]) => <Link key={to} className="hover:text-gray-300" to={to} onClick={() => setIsMenuOpen(false)}>{label}</Link>)}</div></div>}
    </nav>
  )
}

export default NavBar
