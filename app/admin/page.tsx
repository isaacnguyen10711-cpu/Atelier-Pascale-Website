import { auth, signOut } from '@/auth'
import SignInButton from '@/components/SignInButton'

async function AdminPage() {
  const session = await auth()

  // Not logged in: show the sign-in page
  if (!session) {
    return (
      <main className="bg-ap-paper text-ap-ink">
        {/* Fill the whole screen so the footer stays below the fold */}
        <section className="flex min-h-[100dvh] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[76rem] gap-10 md:grid-cols-12 md:items-center md:gap-12">
            <h1 className="font-sans text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl md:col-span-5">
              Admin
            </h1>

            <div className="md:col-span-7">
              <h2 className="font-sans text-3xl font-normal leading-snug md:text-4xl">
                Sign in to manage the website
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-ap-ink/70 md:text-lg md:leading-8">
                Use the Google account that has been approved as an admin.
              </p>

              <div className="mt-10 border-t border-ap-ink/25 pt-8">
                <SignInButton />
                <p className="mt-4 text-sm text-ap-ink/70">Only approved accounts can sign in.</p>
              </div>
            </div>
          </div>
        </section>
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
