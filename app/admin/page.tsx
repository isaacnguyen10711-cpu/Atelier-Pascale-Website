import type { ReactNode } from 'react'
import { auth } from '@/auth'
import AdminNavBar from '@/components/admin/AdminNavBar'
import PhotoWorkspace from '@/components/admin/PhotoWorkspace'
import SignInButton from '@/components/SignInButton'
import { findCollection, type Photo } from '@/lib/collections'

type AdminPageProps = {
  searchParams: Promise<{ collection?: string; error?: string }>
}

type NoticeProps = {
  title: string
  children: ReactNode
}

// A simple message block used for sign-in, setup and error states.
function Notice({ title, children }: NoticeProps) {
  return (
    <section className="mx-auto max-w-[76rem] px-5 pb-24 pt-12 sm:px-8 lg:px-12">
      <div className="max-w-xl">
        <h2 className="text-2xl font-normal sm:text-3xl">{title}</h2>
        <div className="mt-4 space-y-5 leading-7 text-ap-ink/80">{children}</div>
      </div>
    </section>
  )
}

async function AdminPage(props: AdminPageProps) {
  // Read the notes on the end of the URL, like /admin?collection=jewelry
  const urlNotes = await props.searchParams
  const collectionId = urlNotes.collection // 'jewelry', or undefined on plain /admin
  const error = urlNotes.error

  const session = await auth()

  // Not logged in: show the sign-in step
  if (!session) {
    return (
      <main className="min-h-dvh bg-ap-paper text-ap-ink">
        <AdminNavBar />
        <Notice title="Sign in to manage photos">
          <p>Use a Google account that is on the admin list.</p>
          {error && (
            <p role="alert" className="text-ap-lacquer">
              {error === 'AccessDenied'
                ? 'That Google account is not on the admin list. Try a different account.'
                : 'Sign-in did not work. Please try again.'}
            </p>
          )}
          <SignInButton />
        </Notice>
      </main>
    )
  }

  const email = session.user?.email

  if (!email) {
    return (
      <main className="min-h-dvh bg-ap-paper text-ap-ink">
        <AdminNavBar email={email} />
        <Notice title="This account can't manage photos">
          <p>Sign out and sign in with an account that is on the admin list.</p>
        </Notice>
      </main>
    )
  }

  // Design only for now: no photos are loaded yet, so every collection starts empty.
  const photos: Photo[] = []
  const current = findCollection(collectionId)

  return (
    <main className="min-h-dvh bg-ap-paper text-ap-ink">
      <AdminNavBar email={email} current={current} />
      <PhotoWorkspace collection={current} photos={photos} />
    </main>
  )
}

export default AdminPage
