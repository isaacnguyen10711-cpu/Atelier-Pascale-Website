'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const translations = {
  en: {
    links: [
      { label: 'New Arrival', href: '/products/new-arrival' },
      { label: 'Home Decor', href: '/products/home-decor' },
      { label: 'Gifts', href: '/products/gifts' },
      { label: 'Jewelry', href: '/products/jewelry' },
      { label: 'Art', href: '/products/art' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  vi: {
    links: [
      { label: 'Mẫu mới', href: '/vi/products/new-arrival' },
      { label: 'Trang trí nhà', href: '/vi/products/home-decor' },
      { label: 'Quà tặng', href: '/vi/products/gifts' },
      { label: 'Trang sức', href: '/vi/products/jewelry' },
      { label: 'Nghệ thuật', href: '/vi/products/art' },
      { label: 'Giới thiệu', href: '/vi/about' },
      { label: 'Liên hệ', href: '/vi/contact' },
    ],
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
  },
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  // Read the current URL path, for example '/about/' or '/vi/about/'.
  // Use '/' if the pathname is not available yet.
  const currentPath = pathname || '/'

  // Vietnamese pages are '/vi' or have '/vi/' at the beginning.
  const isVietnamese = currentPath === '/vi' || currentPath.startsWith('/vi/')

  // Choose the English or Vietnamese navbar text.
  const language = isVietnamese ? 'vi' : 'en'
  const text = translations[language]

  // Destination for the EN button: remove '/vi' from a Vietnamese URL.
  // Example: '/vi/about/' becomes '/about/'. For '/vi', use '/' (home).
  const englishPath = isVietnamese ? currentPath.slice(3) || '/' : currentPath

  // Destination for the VI button: add '/vi' to the English URL.
  // Example: '/about/' becomes '/vi/about/', so switching keeps the same page.
  const vietnamesePath = `/vi${englishPath}`

  // Contact has a light background, so use dark navbar text in either language.
  const usesLightNavigation = englishPath === '/contact' || englishPath === '/contact/'

  return (
    <nav
      lang={language}
      className={`absolute inset-x-0 top-0 z-20 border-b ${usesLightNavigation ? 'border-ap-ink/20 text-ap-ink' : 'border-white/25 text-white'}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[76rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={language === 'vi' ? '/vi/' : '/'}
          className={`text-4xl font-extrabold font-title tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 ${usesLightNavigation ? 'focus-visible:outline-ap-ink' : 'focus-visible:outline-white'}`}
        >
          Atelier Pascale
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {text.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 ${usesLightNavigation ? 'text-ap-ink hover:text-ap-ink focus-visible:outline-ap-ink' : 'text-white/88 hover:text-white focus-visible:outline-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={language === 'vi' ? 'Ngôn ngữ' : 'Language'}
            className="flex items-center gap-2 text-sm"
          >
            <Link
              href={englishPath}
              hrefLang="en"
              lang="en"
              aria-label="English"
              aria-current={language === 'en' ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`underline-offset-4 hover:underline ${language === 'en' ? 'font-bold underline' : ''}`}
            >
              EN
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href={vietnamesePath}
              hrefLang="vi"
              lang="vi"
              aria-label="Tiếng Việt"
              aria-current={language === 'vi' ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`underline-offset-4 hover:underline ${language === 'vi' ? 'font-bold underline' : ''}`}
            >
              VI
            </Link>
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? text.menuClose : text.menuOpen}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`cursor-pointer p-2 focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${usesLightNavigation ? 'text-ap-ink focus-visible:outline-ap-ink' : 'text-white focus-visible:outline-white'}`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/20 bg-ap-ink/96 px-5 py-7 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-[76rem] flex-col gap-5">
            {text.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
