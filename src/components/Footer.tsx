'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
const translations = {
  en: {
    location: 'Based in Hanoi, Vietnam.',
    collections: 'Collections',
    about: 'About',
    contact: 'Contact',
    rights: 'All rights reserved.',
    designedBy: 'Designed by Isaac Nguyen.',
  },
  vi: {
    location: 'Tại Hà Nội, Việt Nam.',
    collections: 'Bộ sưu tập',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    rights: 'Bảo lưu mọi quyền.',
    designedBy: 'Thiết kế bởi Isaac Nguyen.',
  },
}

const footerLinkClassName =
  'underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current'

function Footer() {
  const pathname = usePathname()
  const language = pathname?.split('/')[1] === 'vi' ? 'vi' : 'en'
  const text = translations[language]
  const prefix = language === 'vi' ? '/vi' : ''

  return (
    <footer
      lang={language}
      className="bg-ap-beige px-5 py-12 text-ap-ink sm:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-12 md:grid-cols-[7fr_5fr] md:items-end">
          <div>
            <Link
              href={language === 'vi' ? '/vi/' : '/'}
              className="font-display text-4xl italic tracking-wide md:text-5xl"
            >
              Atelier Pascale
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-ap-ink/65">{text.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end md:text-right">
            <div className="flex flex-col gap-3">
              <Link href={`${prefix}/products/new-arrival`} className={footerLinkClassName}>
                {text.collections}
              </Link>
              <Link href={`${prefix}/about`} className={footerLinkClassName}>
                {text.about}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href={`${prefix}/contact`} className={footerLinkClassName}>
                {text.contact}
              </Link>
              <a
                href="https://www.facebook.com/TraditionalLacquer"
                target="_blank"
                rel="noreferrer"
                className={footerLinkClassName}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ap-ink/18 pt-5 text-xs text-ap-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Atelier Pascale. {text.rights}</p>
          <p>{text.designedBy}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
