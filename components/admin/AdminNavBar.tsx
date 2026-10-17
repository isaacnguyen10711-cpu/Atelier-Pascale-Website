import Link from 'next/link'

// The product categories, in the same order as the main navbar.
// Each id is also the folder name in S3.
const categories = [
  { id: 'new-arrival', label: 'New Arrival' },
  { id: 'home-decor', label: 'Home Decor' },
  { id: 'gifts', label: 'Gifts' },
  { id: 'jewelry', label: 'Jewelry' },
  { id: 'art', label: 'Art' },
]

type AdminNavBarProps = {
  currentCategory: string // the selected category id, e.g. 'gifts'
}

function AdminNavBar({ currentCategory }: AdminNavBarProps) {
  return (
    <nav aria-label="Product categories" className="border-b border-ap-ink/25">
      <ul className="flex flex-wrap gap-1">
        {categories.map((category) => {
          const isCurrent = category.id === currentCategory

          return (
            <li key={category.id}>
              <Link
                href={`/admin?category=${category.id}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={`block px-4 py-3 text-sm font-medium transition ${
                  isCurrent ? 'bg-ap-ink text-ap-paper' : 'hover:bg-ap-ink/10'
                }`}
              >
                {category.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default AdminNavBar
