import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

const emailAddress = 'Ngohaap@gmail.com'

function ContactPage() {
  return (
    <main className="bg-ap-paper text-ap-ink">
      <section className="px-5 pb-20 pt-36 sm:px-8 md:pb-24 md:pt-32 lg:px-12">
        <div className="mx-auto grid min-h-[calc(100dvh-16rem)] max-w-[76rem] gap-16 md:grid-cols-12 md:items-center md:gap-12">
          <Reveal className="md:col-span-5">
            <h1 className="font-title text-7xl font-normal leading-none sm:text-8xl lg:text-9xl">
              Contact Us
            </h1>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-title text-6xl font-normal leading-none md:text-7xl lg:text-8xl">
                Start a conversation
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Tell us what caught your eye and we will help with the details.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 border-t border-ap-ink/25 py-7">
                <h3 className="text-lg font-semibold">Product enquiries</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-ap-ink/70">
                  For availability, materials or help choosing a piece, call us or send a message on Facebook.
                </p>
                <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
                  <a
                    href="tel:+84913008959"
                    className="text-base font-semibold underline decoration-ap-ink/35 underline-offset-4 transition hover:decoration-ap-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
                  >
                    +84 913008959
                  </a>
                  <a
                    href="https://www.facebook.com/TraditionalLacquer/#"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-base font-semibold underline decoration-ap-ink/35 underline-offset-4 transition hover:decoration-ap-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
                  >
                    Message us on Facebook
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-ap-ink/25 py-7">
                <h3 className="text-lg font-semibold">Email enquiries</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-ap-ink/70">
                  For general questions or detailed enquiries, contact us by email.
                </p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="mt-5 inline-block break-all text-base font-semibold underline decoration-ap-ink/35 underline-offset-4 transition hover:decoration-ap-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
                >
                  {emailAddress}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
