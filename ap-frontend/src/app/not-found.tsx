import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-ap-ink px-5 text-center text-ap-paper">
      <div>
        <h1 className="font-title text-7xl">Page not found</h1>
        <p className="mt-5">The page you are looking for could not be found.</p>
        <Link href="/" className="mt-8 inline-block underline underline-offset-4">
          Return home
        </Link>
      </div>
    </main>
  )
}
