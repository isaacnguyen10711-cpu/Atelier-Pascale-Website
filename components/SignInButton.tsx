import { signIn } from '@/auth'

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button type="submit" className="border border-ap-ink px-5 py-3">
        Sign in with Google
      </button>
    </form>
  ) 
}
