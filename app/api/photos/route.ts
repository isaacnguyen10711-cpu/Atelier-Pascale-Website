import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { auth } from '@/auth'

// On EC2 the S3 client uses the server's IAM role, so no access keys are needed.
const s3 = new S3Client({ region: 'ap-southeast-2' })
const bucket = 'atelier-pascale-photos'
const categories = ['new-arrival', 'home-decor', 'gifts', 'jewelry', 'art']
const maxSize = 20 * 1024 * 1024 // 20 MB

// Uploads the photos from the admin page into the chosen category folder in S3
async function POST(request: Request) {
  // 1. Only logged-in admins can upload
  const session = await auth()
  if (!session) {
    return Response.json({ error: 'Please sign in.' }, { status: 401 })
  }

  // 2. Read what the form sent
  const formData = await request.formData()
  const category = String(formData.get('category'))
  const photos = formData.getAll('photos').filter((entry) => entry instanceof File)

  // 3. Only allow the real category folders
  if (!categories.includes(category)) {
    return Response.json({ error: 'Unknown category.' }, { status: 400 })
  }

  if (photos.length === 0) {
    return Response.json({ error: 'No photos were sent.' }, { status: 400 })
  }

  // 4. Check every file before uploading any
  for (const photo of photos) {
    if (!photo.type.startsWith('image/') || photo.size > maxSize) {
      return Response.json({ error: `${photo.name} is not an image under 20 MB.` }, { status: 400 })
    }
  }

  // 5. Upload each photo to S3, e.g. "gifts/Pic 20.jpg"
  for (const photo of photos) {
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: `${category}/${photo.name}`,
        Body: Buffer.from(await photo.arrayBuffer()),
        ContentType: photo.type,
      }),
    )
  }

  // 6. All done
  return Response.json({ ok: true })
}

export { POST }
