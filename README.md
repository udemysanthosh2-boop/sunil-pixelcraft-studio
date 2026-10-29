# Studio Nova — Creative & Digital Growth Portfolio

A responsive portfolio starter built with React, TypeScript, Vite, and plain CSS.

## Features
- Responsive mobile navigation
- Services section for video editing, content creation, digital marketing guidance, Meta Ads setup, and Google Business Profile
- Filterable portfolio gallery
- Process and about sections
- Contact form that opens WhatsApp with a prefilled message
- Accessible focus states and reduced-motion support
- No backend required for the starter version

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
1. Extract this ZIP.
2. Open the project folder in VS Code.
3. Open a terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Customize before publishing
1. In `src/App.tsx`, change `Studio Nova` to your brand name and update the logo mark.
2. Replace `whatsappNumber = "919XXXXXXXXX"` with your WhatsApp number in international format using digits only. Example: `919876543210`.
3. Update the footer social links to your actual profiles.
4. Replace the sample portfolio concept cards with real work. Do not present sample concepts as completed client projects.
5. Add your own logo, project thumbnails, service prices, email, location, and business details.
6. Update the page title and meta description in `index.html`.
7. Test the contact form on both desktop and mobile.

## Build for production
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## Deployment
You can deploy the `dist` folder to a static hosting provider such as Netlify, Vercel, or Cloudflare Pages. For a Vite project, use:
- Build command: `npm run build`
- Publish/output directory: `dist`

## Important notes
- The contact form uses WhatsApp and does not save submissions to a database.
- No analytics, ad pixels, or tracking scripts are installed by default. Add them only after configuring consent and privacy disclosures appropriate to your audience.
- Meta Ads setup and Google Business Profile work may require access or permissions from the client's business accounts. Never ask clients to share passwords; use the platforms' official access/permission features.
- The portfolio gallery uses CSS-generated concept artwork. Replace it with your own approved portfolio images or video links.
