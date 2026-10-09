# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Locals in Vietnam** looking for pieces for their homes or as gifts.
- **Tourists visiting Vietnam** who may discover the business while travelling.
- **Overseas buyers** who want pieces from Vietnam.

All three browse the collections and then contact the business directly to ask about a piece. The site serves them in English and Vietnamese.

- **Admin (Isaac)** manages product photos through the `/admin` page. Isaac's mother owns the business; for now Isaac does the uploads for her.

## Product Purpose

A bilingual showcase website for Atelier Pascale, a family-owned business that makes and sells art, home decor, gifts and jewelry. The site shows the collections and the story behind them, then moves visitors to make an enquiry by phone or Facebook. Success means a visitor finds a piece they like and gets in touch.

## Positioning

Atelier Pascale makes traditional Vietnamese lacquerware in its own workshop, with makers who shape, decorate and finish each piece by hand. On top of its own production, it offers a curated selection chosen for colour, texture and character, and gives each customer personal help choosing a piece.

## Operating Context

- There is no online checkout. Visitors enquire about availability, materials and choices by phone or Facebook message, and the sale happens through that conversation.
- Collections: New Arrival, Home Decor, Gifts, Jewelry, Art. There are also About and Contact pages.
- Every page has an English version and a Vietnamese version under `/vi`. The language switch keeps the visitor on the same page.

## Capabilities and Constraints

- Stack: Next.js App Router, React, TypeScript, Tailwind CSS v4, Motion. Deployed on Vercel with a custom domain.
- Admin login: Google sign-in through Auth.js v5, limited to an email allowlist. Public visitors never log in.
- Open: where uploaded photos will be stored. The admin page design is built, but uploading and deleting are not connected yet.
- Open: whether customers will get accounts in the future, and whether the business owner will do uploads herself later. If she does, the admin page should be easy for a non-technical user to use.

## Brand Commitments

- Name: Atelier Pascale. Logo: `assets/images/logo AP.png`.
- Voice: warm, personal and understated. It talks about care, craft and pieces that last, not sales pressure.
- Contact channels: phone `+84 913 008 959`, Facebook `facebook.com/TraditionalLacquer`, email `Ngohaap@gmail.com`.

## Evidence on Hand

- Real photos of products, the workshop and the team in `assets/images/` (About, Art, Gift, Home Decor, Jewelry, Background).
- Existing English and Vietnamese copy in the page files under `app/`.
- Absent, so never invent them: prices, testimonials, reviews, customer names, stockists, press, awards, shipping or delivery terms, and founding dates or history beyond the current About copy.

## Product Principles

1. **The pieces lead.** Real photos of real work are the main way the site persuades.
2. **Handmade and personal over transactional.** Every path ends in a conversation with the business, not a cart.
3. **Equal in both languages.** English and Vietnamese visitors get the same content and quality.
4. **Truthful.** Only show claims, details and proof that the business can back up.
5. **Simple to maintain.** Admin tools should let photos change without code changes or developer help.
