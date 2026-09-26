import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-ap-ink px-5 py-12 text-ap-paper sm:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <Link to="/" className="font-display text-4xl italic tracking-wide md:text-5xl">
              Atelier Pascale
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-ap-paper/65">
              Art, home decor, gifts and jewelry selected with care in Adelaide, Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end md:text-right">
            <div className="flex flex-col gap-3">
              <Link to="/products/new-arrival" className="transition hover:text-white">Collections</Link>
              <Link to="/about" className="transition hover:text-white">About</Link>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:isaac.nguyen10711@gmail.com" className="transition hover:text-white">Email</a>
              <a href="https://www.instagram.com/" className="transition hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ap-paper/18 pt-5 text-xs text-ap-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Atelier Pascale. All rights reserved.</p>
          <p>Designed by Isaac Nguyen.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
