import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['New Arrival', '/products/new-arrival'],
  ['Home Decor', '/products/home-decor'],
  ['Gifts', '/products/gifts'],
  ['Jewelry', '/products/jewelry'],
  ['Art', '/products/art'],
  ['About', '/about'],
]

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="font-display text-2xl italic tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Atelier Pascale
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="text-sm font-medium text-white/88 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="cursor-pointer p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/20 bg-ap-ink/96 px-5 py-7 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
