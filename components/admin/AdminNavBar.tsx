import Link from 'next/link'
import { signOut } from '@/auth'
import { collections, type Collection } from '@/lib/collections'

type AdminNavBarProps = {
  email?: string | null
  // Pass these to show the collection tabs.
  current?: Collection
  counts?: Record<string, number>
}

// The admin page's own navbar. The public site's navbar is hidden on /admin.
function AdminNavBar({ email, current, counts }: AdminNavBarProps) {
  return (
    <header className="bg-ap-ink text-ap-paper">
      {/* Top bar: same height and divider line as the public navbar */}
      <nav aria-label="Admin" className="border-b border-white/25">
        <div className="mx-auto flex h-[72px] max-w-[76rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-title text-4xl font-extrabold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-paper"
          >
            Atelier Pascale
          </Link>

          {email && (
            <div className="flex items-center gap-4 text-sm">
              <span className="hidden text-ap-paper/80 sm:inline">
                Signed in as <span className="text-ap-paper">{email}</span>
              </span>
              <form
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/admin' })
                }}
              >
                <button
                  type="submit"
                  className="cursor-pointer border border-ap-paper/45 px-4 py-2 transition hover:border-ap-paper hover:bg-ap-paper hover:text-ap-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ap-paper"
                >
                  Sign out
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>

      <div className="mx-auto max-w-[76rem] px-5 sm:px-8 lg:px-12">
        <div className="pb-8 pt-8 md:pt-10">
          <h1 className="text-4xl font-normal leading-tight sm:text-5xl">Photo studio</h1>
          <p className="mt-3 text-base text-ap-paper/80">Add, replace and remove the photos shown on the website.</p>
          {email && (
            // On phones the email doesn't fit in the top bar, so show it here instead
            <p className="mt-2 text-sm text-ap-paper/80 sm:hidden">
              Signed in as <span className="text-ap-paper">{email}</span>
            </p>
          )}
        </div>

        {current && (
          // The selected tab is the same colour as the page below, so it looks like it opens onto it.
          <nav aria-label="Collections" className="-mx-3 sm:mx-0">
            <ul className="flex flex-wrap gap-1">
              {collections.map((collection) => {
                const isCurrent = collection.id === current.id

                return (
                  <li key={collection.id}>
                    <Link
                      href={`/admin?collection=${collection.id}`}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={`flex items-baseline gap-2 px-4 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                        isCurrent
                          ? 'bg-ap-paper text-ap-ink focus-visible:outline-ap-ink'
                          : 'text-ap-paper/80 hover:bg-ap-paper/10 hover:text-ap-paper focus-visible:outline-ap-paper'
                      }`}
                    >
                      {collection.label}
                      <span className="text-xs tabular-nums opacity-70">
                        {counts?.[collection.id] ?? 0}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default AdminNavBar
