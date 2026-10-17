'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

type PhotoUploaderProps = {
  category: string // the category to upload into, e.g. 'gifts'
}

function PhotoUploader({ category }: PhotoUploaderProps) {
  const [message, setMessage] = useState('')

  const uploadPhotos = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // stop the page from reloading

    setMessage('Uploading…')

    // Grab everything in the form: the category + the photos
    const formData = new FormData(event.currentTarget)

    const response = await fetch('/api/photos', { method: 'POST', body: formData })

    setMessage(response.ok ? 'Photos uploaded ✅' : 'Upload failed. Please try again.')
  }

  return (
    <form onSubmit={uploadPhotos} className="space-y-5">
      {/* Sends the selected category along with the photos */}
      <input type="hidden" name="category" value={category} />

      <label className="block font-semibold">
        Photos
        <input type="file" name="photos" accept="image/*" multiple required className="mt-2 block" />
      </label>

      <button type="submit" className="cursor-pointer bg-ap-ink px-6 py-3 font-semibold text-ap-paper">
        Upload
      </button>

      {message && <p>{message}</p>}
    </form>
  )
}

export default PhotoUploader
