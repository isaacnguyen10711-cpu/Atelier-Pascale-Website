import { copyFile, readdir } from 'node:fs/promises'
import path from 'node:path'

// Next.js can export segment files into nested folders on Windows, while
// the browser requests flat filenames. Keep both paths available.
// https://github.com/vercel/next.js/issues/92339
const outputDirectory = path.resolve('out')
const files = await readdir(outputDirectory, { recursive: true })
let fixedFiles = 0

for (const file of files) {
  const parts = file.split(path.sep)
  const segmentIndex = parts.findIndex((part) => part.startsWith('__next.'))

  if (segmentIndex === -1 || segmentIndex === parts.length - 1 || !file.endsWith('.txt')) {
    continue
  }

  const routeDirectory = parts.slice(0, segmentIndex)
  const filename = parts.slice(segmentIndex).join('.')
  await copyFile(
    path.join(outputDirectory, file),
    path.join(outputDirectory, ...routeDirectory, filename),
  )
  fixedFiles += 1
}

if (fixedFiles > 0) {
  console.log(`Fixed ${fixedFiles} static export segment filenames.`)
}
