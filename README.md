# Atelier Pascale

Atelier Pascale is a bilingual (English and Vietnamese) showcase website for a family business that makes lacquerware and sells art, home decor, gifts and jewelry.

The project was inspired by my family's business, which traditionally relied on word-of-mouth sales and had little online presence. This motivated me to create a modern website where the business can showcase its products and reach a wider audience online.

This is the second version of the site. The first version was a full-stack e-commerce app built with React and ASP.NET Core. This version is a faster, simpler Next.js site focused on showing the collections, with customers contacting the business directly to buy.

## Live Website

[View Atelier Pascale](https://www.atelierpascaleboutique.com/)

## Features

- Browse five collections: New Arrival, Home Decor, Gifts, Jewelry and Art
- About page with the story of the workshop and the people behind it
- Contact page with phone and Facebook links for product enquiries
- Full English and Vietnamese versions of every page, with a language switch that keeps you on the same page
- Responsive design for desktop and mobile devices
- Scroll animations that respect the device's reduced-motion setting
- Admin sign-in with Google, limited to approved email addresses
- Photo uploader for the admin page (in progress)

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion (animations)
- Auth.js (Google sign-in)

## Deployment

The site is deployed on Vercel and connected to the custom domain `atelierpascaleboutique.com`.

## Running Locally

1. Install the packages:

   ```sh
   npm install
   ```

2. Create a `.env.local` file in the project root with these settings:

   ```
   AUTH_SECRET=
   AUTH_GOOGLE_CLIENT_ID=
   AUTH_GOOGLE_CLIENT_SECRET=
   ADMIN=you@gmail.com,someone@gmail.com
   ```

   - `AUTH_SECRET`: generate one with `npx auth secret`
   - `AUTH_GOOGLE_CLIENT_ID` and `AUTH_GOOGLE_CLIENT_SECRET`: from a Google Cloud OAuth client, with `http://localhost:3000/api/auth/callback/google` as an authorised redirect URI
   - `ADMIN`: the Google accounts allowed to sign in to `/admin`, separated by commas

3. Start the dev server:

   ```sh
   npm run dev
   ```

4. Open http://localhost:3000. The admin page is at http://localhost:3000/admin.

## Project Structure

- `app/`: the pages. English pages are at the top level, and the Vietnamese versions are under `app/vi/`.
- `app/admin/`: the admin page
- `app/api/auth/`: the Google sign-in routes
- `components/`: shared parts such as the navbar, footer and animations
- `assets/images/`: product, workshop and background photos
- `auth.ts`: the Google sign-in setup and admin email check

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Future Improvements

- Upload and remove product photos from the admin page without changing code
- Load product photos from cloud storage
- Improved search and filtering

## Author

**Isaac Nguyen**

GitHub: [isaacnguyen10711-cpu](https://github.com/isaacnguyen10711-cpu)
