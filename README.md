# Bhagwati Ayurved Pharmacy — Website Starter

A responsive, bilingual-ready website starter using Next.js, TypeScript and Supabase. It includes seven public pages, a searchable product catalogue, contact and partner enquiry forms, a protected-by-Supabase-auth product admin page, and an optional AI assistant. The design uses the agreed palette: Olive Green `#66785D`, White `#FFFFFF`, Muted Gold `#F2E5A5`, Charcoal Olive `#41463D`, and Light Sage `#F3F5F1`.

> **Important:** Demo products, contact information, sample article copy, and images are placeholders. Replace them with your actual verified content before launch. The starter is not a finished compliance review and does not provide medical advice.

## Pages included

- `/` Home
- `/about-us` About Us
- `/products` searchable/filterable catalogue
- `/partner-with-us` partnership enquiry form
- `/ayurvlogs` starter educational content
- `/faq` FAQ accordion
- `/contact-us` contact page and enquiry form
- `/admin` admin sign-in and basic product management
- `/privacy-policy` and `/terms` are linked as supporting pages but need full policy pages added before launch.

## 1. What you need

- GitHub account (stores your code)
- Vercel account (deploys/hosts the Next.js website)
- Supabase project (database and admin login)
- Your existing domain provider (connect domain DNS to Vercel)
- Optional OpenAI API key for the AI assistant; API usage may cost extra

## 2. Run locally

Install Node.js 20 or newer. Download/clone this folder, then run:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Without Supabase, the site shows sample products; forms will not store submissions.

## 3. Configure Supabase

1. Create a project at [Supabase](https://supabase.com/).
2. Open **SQL Editor** and run `supabase/schema.sql`.
3. In Project Settings → API, copy the Project URL and anon/public key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. In Authentication, create an admin user manually. Do not enable public sign-up for this starter.
5. Visit `/admin` and sign in with that user. You can add products and publish/unpublish them.
6. Product images can use hosted HTTPS URLs. For production, consider configuring Supabase Storage and upload UI.

**Security note:** The included SQL policies allow any authenticated Supabase user to manage products and read enquiries. Create only trusted admin users. For a multi-staff production site, add an explicit admin-role table/policies and server-side authorization. Never put a Supabase service-role key in client-side code.

## 4. Optional AI assistant

Set `OPENAI_API_KEY` and optionally `OPENAI_MODEL=gpt-4o-mini` in your local environment and in Vercel Project Settings → Environment Variables. The key is used only in the server-side `/api/chat` route. Without a key, the assistant gives a setup/contact fallback. It is instructed not to diagnose, prescribe, invent product claims, or promise cures. Add only approved, verified product/company facts to its knowledge source before making it more specific.

## 5. Push to GitHub

Create an empty GitHub repository, then from this folder run:

```bash
git init
git add .
git commit -m "Initial Bhagwati Ayurved Pharmacy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository URL. Do not commit `.env.local`.

## 6. Deploy to Vercel and connect your domain

1. Sign in to [Vercel](https://vercel.com/) and import the GitHub repository.
2. Add the same environment variables from `.env.local` in Project Settings → Environment Variables. Set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain, for example `https://yourdomain.in`.
3. Deploy. Vercel will provide the exact DNS records required. Add those records at your current domain registrar. Do not guess DNS records; use the values shown by Vercel.
4. Once the domain is verified, update `public/robots.txt` or rely on the generated `app/robots.ts`, and submit `https://yourdomain.in/sitemap.xml` in Google Search Console.
5. Test every page, the mobile menu, forms, admin sign-in, and chatbot on mobile and desktop.

## 7. Before going live checklist

- [ ] Replace every sample product with real product names, label-verified descriptions, ingredients, pack sizes and images.
- [ ] Replace the placeholder contact details with verified business address, phone, email, hours and WhatsApp number.
- [ ] Add complete Privacy Policy and Terms pages; get appropriate legal/compliance review.
- [ ] Confirm applicable product, advertising, labelling and licensing requirements with a qualified professional.
- [ ] Add spam protection/rate limiting to public forms and chatbot.
- [ ] Add admin role restrictions, audit logging, backups and restore testing before production.
- [ ] Review image rights, alt text, SEO title/description, and real canonical domain.
- [ ] Test keyboard access, contrast, reduced motion, and mobile layout.

## Notes

- Product MRP is optional; do not show prices unless accurate and appropriate.
- Demo catalogue items are for layout preview only, not real product claims.
- The language toggle in this starter is a visual control; page copy is currently primarily English with selected Hindi text. Full Hindi translation and language persistence should be completed before launch.
- The contact and partner forms store records in Supabase when configured. Review them in Supabase Table Editor under `enquiries`.
- The admin is a starter. Do not treat it as a complete enterprise CMS or security audit.
