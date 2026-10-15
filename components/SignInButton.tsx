import { LogIn } from 'lucide-react'
import { signIn } from '@/auth'

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button
        type="submit"
        className="inline-flex cursor-pointer items-center gap-3 bg-ap-ink px-6 py-3 text-base font-semibold text-ap-paper transition hover:bg-ap-ink/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
      >
        <LogIn className="h-5 w-5" aria-hidden="true" />
        Sign in with Google
      </button>
    </form>
  )
}
