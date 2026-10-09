import { auth, signOut } from '@/auth'
import SignInButton from '@/components/SignInButton'

async function AdminPage() {
  const session = await auth()

  // Not logged in: show the sign-in button
  if (!session) {
    return (
      <main className="bg-ap-paper px-5 pb-20 pt-36 text-ap-ink">
        <SignInButton />
      </main>
    )
  }

  // Logged in: show who they are and a sign-out button
  return (
    <main className="bg-ap-paper px-5 pb-20 pt-36 text-ap-ink">
      <p>Logged in as {session.user?.email}</p>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button className="mt-4 border border-ap-ink px-5 py-3">Sign out</button>
      </form>
    </main>
  )
}

export default AdminPage
