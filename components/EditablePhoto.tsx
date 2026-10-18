'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { photoUrl } from '@/app/photoUrl'

type EditablePhotoProps = {
  path: string // where the photo lives in S3, e.g. 'gifts/Pic 1.jpg'
  alt: string
  className: string // the photo's layout, e.g. 'aspect-[4/5] object-cover md:h-[30rem]'
}

// Classes every editable photo shares: full width, and a slow zoom on hover
const baseClassName = 'w-full transition duration-500 hover:scale-105'

// A product photo. Admins get a "Replace photo" button to swap it for a new photo.
function EditablePhoto({ path, alt, className }: EditablePhotoProps) {
  const { data: session } = useSession() // null when nobody is logged in
  const [version, setVersion] = useState(0) // changes after a replace so the new photo shows
  const [message, setMessage] = useState('')
  const fileInput = useRef<HTMLInputElement>(null) // the hidden file picker
  // Note: The server expects 'newImage' as the key for the new image.

  // Runs as soon as the admin picks a new image
  const replacePhoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target.files?.[0]
    if (!newImage) return

    setMessage('Uploading…')

    const formData = new FormData()
    formData.append('path', path) // which photo to replace
    formData.append('newImage', newImage) // the new image

    try {
      const response = await fetch('/api/photos', { method: 'POST', body: formData })

      if (response.ok) {
        setVersion(Date.now()) // load the new photo instead of the browser's saved copy
        setMessage('')
      } else {
        setMessage('Upload failed. Please try again.')
      }
    } 
    catch (error) {
      setMessage(`Upload failed. Please try again. ${error}`)
    }
  }

  // After a replace, "?v=..." makes the browser fetch the photo again
  const src = version ? `${photoUrl(path)}?v=${version}` : photoUrl(path)

  return (
    <div className="group relative h-full">
      <Image width={1200} height={1500} src={src} alt={alt} className={`${baseClassName} ${className}`} />

      {/* Only admins see the Replace button, in the middle of the photo when hovering over it.
          Only the button itself opens the hidden file picker. */}
      {session && (
        <>
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer border border-ap-paper bg-ap-ink px-6 py-3 text-base font-semibold text-ap-paper transition group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 ${
              message ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {message || 'Replace photo'}
          </button>
          <input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={replacePhoto} />
        </>
      )}
    </div>
  )
}

export default EditablePhoto
