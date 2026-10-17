'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'

type PhotoUploaderProps = {
  category: string // the category to upload into, e.g. 'gifts'
}

function PhotoUploader({ category }: PhotoUploaderProps) {
  const [message, setMessage] = useState('')
  const [fileList, setFileList] = useState<File[]>([])
  const fileInput = useRef<HTMLInputElement>(null) // lets us clear the file picker

  // Clears all picked photos so the admin can start again
  const removeAll = () => {
    if (fileInput.current) fileInput.current.value = ''
    setFileList([])
    setMessage('')
  }

  const uploadPhotos = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // stop the page from reloading

    setMessage('Uploading…')

    // Grab everything in the form: the category + all the picked photos
    const formData = new FormData(event.currentTarget)

    const response = await fetch('/api/photos', { method: 'POST', body: formData })

    if (response.ok) {
      removeAll() // clear the picked photos so they aren't uploaded twice
      setMessage('Photos uploaded ✅')
    } else {
      setMessage('Upload failed. Please try again.')
    }
  }

  return (
    <form onSubmit={uploadPhotos} className="space-y-5">
      {/* Sends the selected category along with the photos */}
      <input type="hidden" name="category" value={category} />

      <div>
        <label htmlFor="photos" className="block font-semibold">
          Photos
        </label>
        {/* The file: classes style the browser's own "Choose files" button */}
        <input
          ref={fileInput}
          id="photos"
          type="file"
          name="photos"
          accept="image/*"
          multiple
          required
          className="mt-2 block text-sm text-ap-ink/70 file:mr-4 file:cursor-pointer file:border file:border-ap-ink file:bg-transparent file:px-5 file:py-3 file:text-base file:font-semibold file:text-ap-ink hover:file:bg-ap-ink/10"
          onChange={(e) => setFileList(Array.from(e.target.files ?? []))}
        />
      </div>

      {fileList.length > 0 && (
        <div className="text-sm text-ap-ink/70">
          <p className="font-semibold text-ap-ink">
            Selected {fileList.length} {fileList.length === 1 ? 'photo' : 'photos'}
          </p>
          <ol className="mt-2 list-decimal pl-5">
            {fileList.map((photo) => (
              <li key={photo.name}>{photo.name}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button type="submit" className="cursor-pointer bg-ap-ink px-6 py-3 font-semibold text-ap-paper">
          Upload
        </button>
        {fileList.length > 0 && (
          <button
            type="button"
            onClick={removeAll}
            className="cursor-pointer border border-ap-ink px-6 py-3 font-semibold text-ap-ink"
          >
            Remove all
          </button>
        )}
      </div>

      {message && <p>{message}</p>}
    </form>
  )
}

export default PhotoUploader
