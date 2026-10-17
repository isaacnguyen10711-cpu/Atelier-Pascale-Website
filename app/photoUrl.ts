// Product photos are stored in the S3 bucket, in one folder per category.
const bucketUrl = 'https://atelier-pascale-photos.s3.ap-southeast-2.amazonaws.com'

// Turns a path inside the bucket, like 'jewelry/Pic 3.jpg', into the photo's web address.
// encodeURI changes spaces to %20 so names like "Pic 3.jpg" work in a URL.
export function photoUrl(path: string) {
  return `${bucketUrl}/${encodeURI(path)}`
}
