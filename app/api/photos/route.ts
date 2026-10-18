import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { auth } from '@/auth'

// On EC2 the S3 client uses the server's IAM role, so no access keys are needed.
const s3 = new S3Client({ region: 'ap-southeast-2' })
const bucket = 'atelier-pascale-photos'
const maxSize = 20 * 1024 * 1024 // 20 MB

// Replaces one product photo in S3, e.g. path = "gifts/Pic 1.jpg"
async function POST(request: Request) {
  // 1. Only logged-in admins can replace photos
  const session = await auth()
  if (!session) {
    return Response.json({ error: 'Please sign in.' }, { status: 401 })
  }

  // 2. Read what the page sent: which photo to replace + the new image
  const formData = await request.formData()
  const path = String(formData.get('path'))
  const newImage = formData.get('newImage')

  // 3. The new image must be under 20 MB
  if (!(newImage instanceof File) || !newImage.type.startsWith('image/') || newImage.size > maxSize) {
    return Response.json({ error: 'Please choose an image under 20 MB.' }, { status: 400 })
  }

  // 4. Upload to the SAME path, so the old photo gets replaced
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: path,
      Body: Buffer.from(await newImage.arrayBuffer()),
      ContentType: newImage.type,
      CacheControl: 'no-cache', // browsers must check for a newer version
    }),
  )

  return Response.json({ ok: true })
}

export { POST }
