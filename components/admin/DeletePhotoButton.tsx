'use client'

import { useState } from 'react'

type DeletePhotoButtonProps = {
  name: string
}

// Deleting asks for a second click instead of opening a popup, so it can't happen by accident.
// Design only for now: "Yes, delete" just closes the question until storage is connected.
function DeletePhotoButton({ name }: DeletePhotoButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false)

  const linkStyle =
    'cursor-pointer underline underline-offset-4 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ap-ink'

  if (!isConfirming) {
    return (
      <button
        type="button"
        aria-label={`Delete ${name}`}
        onClick={() => setIsConfirming(true)}
        className={`${linkStyle} text-sm text-ap-ink/75 decoration-ap-ink/30 hover:text-ap-lacquer hover:decoration-ap-lacquer`}
      >
        Delete
      </button>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span>Delete for good?</span>
      <button
        type="button"
        onClick={() => setIsConfirming(false)}
        className={`${linkStyle} font-semibold text-ap-lacquer decoration-ap-lacquer/40 hover:decoration-ap-lacquer`}
      >
        Yes, delete
      </button>
      <button
        type="button"
        autoFocus
        onClick={() => setIsConfirming(false)}
        className={`${linkStyle} decoration-ap-ink/30 hover:decoration-ap-ink`}
      >
        Cancel
      </button>
    </div>
  )
}

export default DeletePhotoButton
