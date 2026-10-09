// The collections shown as tabs on the admin page.
export const collections = [
  { id: 'new-arrival', label: 'New Arrival', pagePath: '/products/new-arrival' },
  { id: 'home-decor', label: 'Home Decor', pagePath: '/products/home-decor' },
  { id: 'gifts', label: 'Gifts', pagePath: '/products/gifts' },
  { id: 'jewelry', label: 'Jewelry', pagePath: '/products/jewelry' },
  { id: 'art', label: 'Art', pagePath: '/products/art' },
  { id: 'about', label: 'About', pagePath: '/about' },
  { id: 'backgrounds', label: 'Page backgrounds', pagePath: '/' },
]

export type Collection = (typeof collections)[number]

export type Photo = {
  id: string
  name: string
  url: string
  size: number
  uploadedAt: string
}

// Use the first collection when the URL asks for one that doesn't exist.
export function findCollection(id: string | undefined) {
  return collections.find((collection) => collection.id === id) ?? collections[0]
}
