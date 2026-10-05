import Link from 'next/link'

const footerLinkClassName = 'underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current'

function Footer() {
  return (
    <footer className="bg-ap-beige px-5 py-12 text-ap-ink sm:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-12 md:grid-cols-[7fr_5fr] md:items-end">
          <div>
            <Link href="/" className="font-display text-4xl italic tracking-wide md:text-5xl">
              Atelier Pascale
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-ap-ink/65">
              Art, home decor, gifts and jewelry selected with care in Adelaide, Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end md:text-right">
            <div className="flex flex-col gap-3">
              <Link href="/products/new-arrival" className={footerLinkClassName}>Collections</Link>
              <Link href="/about" className={footerLinkClassName}>About</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className={footerLinkClassName}>Contact</Link>
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
          <p>© 2026 Atelier Pascale. All rights reserved.</p>
          <p>Designed by Isaac Nguyen.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
