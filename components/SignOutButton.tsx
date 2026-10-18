'use client'

import { signOut } from 'next-auth/react'

// Signs out in the browser, so every page forgets the login straight away
// (the Replace photo buttons disappear too).
export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ redirectTo: '/admin' })}
      className="mt-4 cursor-pointer border border-ap-ink px-5 py-3"
    >
      Sign out
    </button>
  )
}
