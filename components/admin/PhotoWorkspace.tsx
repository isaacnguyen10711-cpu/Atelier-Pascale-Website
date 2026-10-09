import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Collection, Photo } from '@/lib/collections'
import DeletePhotoButton from './DeletePhotoButton'
import PhotoUploader from './PhotoUploader'

type PhotoWorkspaceProps = {
  collection: Collection
  photos: Photo[]
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(isoDate: string) {
  if (!isoDate) return ''
  return new Date(isoDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

// The upload box and photo grid for one collection.
function PhotoWorkspace({ collection, photos }: PhotoWorkspaceProps) {
  return (
    <section className="mx-auto max-w-[76rem] px-5 pb-24 pt-10 sm:px-8 md:pt-12 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-normal sm:text-3xl">{collection.label}</h2>
          <p className="mt-2 text-sm text-ap-ink/75">
            <span className="tabular-nums">{photos.length}</span> {photos.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>
        <Link
          href={collection.pagePath}
          target="_blank"
          className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-ap-ink/35 underline-offset-4 transition hover:decoration-ap-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
        >
          Open the {collection.label} page
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8">
        <PhotoUploader />
      </div>

      {photos.length === 0 ? (
        <div className="mt-12 border-t border-ap-ink/20 pt-10">
          <p className="text-lg font-semibold">No photos in {collection.label} yet</p>
          <p className="mt-2 text-ap-ink/75">Upload the first one using the box above.</p>
        </div>
      ) : (
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
          {photos.map((photo) => (
            <li key={photo.id}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-ap-beige">
                  <Image
                    src={photo.url}
                    alt={photo.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="truncate text-sm font-medium" title={photo.name}>
                    {photo.name}
                  </p>
                  <p className="mt-1 text-xs tabular-nums text-ap-ink/70">
                    {formatSize(photo.size)} · {formatDate(photo.uploadedAt)}
                  </p>
                </figcaption>
              </figure>
              <div className="mt-2">
                <DeletePhotoButton name={photo.name} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default PhotoWorkspace
