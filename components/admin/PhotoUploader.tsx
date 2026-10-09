'use client'

import { CircleAlert, ImageUp } from 'lucide-react'
import { useState } from 'react'

const maxSize = 20 * 1024 * 1024 // 20 MB in bytes

type ChosenFile = {
  name: string
  problem: string // empty when the file is OK
}

// Checks one file. Returns what's wrong with it, or '' if it's fine.
function checkFile(file: File) {
  if (!file.type.startsWith('image/')) return 'This is not an image file.'
  if (file.size > maxSize) return 'This photo is larger than 20 MB.'
  return ''
}

// Design only for now: it lists the chosen files but doesn't upload them anywhere yet.
function PhotoUploader() {
  // The files picked so far
  const [chosenFiles, setChosenFiles] = useState<ChosenFile[]>([])

  // Runs when files are picked with "choose files"
  function addFiles(fileList: FileList | null) {
    if (!fileList) return

    const newFiles = Array.from(fileList).map((file) => ({
      name: file.name,
      problem: checkFile(file),
    }))

    // Newest files go at the top of the list
    setChosenFiles([...newFiles, ...chosenFiles])
  }

  return (
    <div>
      {/* Clicking anywhere on a <label> opens the hidden file picker inside it */}
      <label className="flex cursor-pointer flex-col items-center gap-3 border border-dashed border-ap-ink/40 bg-white/50 px-6 py-10 text-center transition hover:border-ap-ink hover:bg-ap-beige/40 focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-ap-ink md:py-12">
        <ImageUp className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-lg font-semibold underline underline-offset-4">Choose photos</span>
        <span className="max-w-md text-sm leading-6 text-ap-ink/75">
          JPG, PNG or WebP, up to 20 MB each. A photo with the same name as one below replaces it.
        </span>

        {/* The real file picker. It's hidden, but still works with the keyboard. */}
        <input
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(event) => {
            addFiles(event.target.files)
            event.target.value = '' // lets you pick the same file again
          }}
        />
      </label>

      {/* The list of chosen files */}
      {chosenFiles.length > 0 && (
        <ul aria-live="polite" className="mt-4 divide-y divide-ap-ink/15 border-y border-ap-ink/15">
          {chosenFiles.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center gap-3 py-3 text-sm">
              {file.problem && <CircleAlert className="h-4 w-4 shrink-0 text-ap-lacquer" aria-hidden="true" />}
              <span className="min-w-0 flex-1 truncate font-medium">{file.name}</span>
              <span className={file.problem ? 'text-ap-lacquer' : 'text-ap-ink/70'}>
                {file.problem || 'Not uploaded yet'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PhotoUploader
