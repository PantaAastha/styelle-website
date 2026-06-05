# Styelle / StyledTogether

Styelle is a fashion discovery and styling brand focused on helping people style coordinated looks together.

This is the public placeholder website for the company and app.

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Static Export configuration

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To create an optimized production build and generate static HTML files:

```bash
npm run build
```

This will output the static files to the `out/` directory.

## Deployment

This website is configured to output static files (`output: 'export'` in `next.config.ts`), meaning it requires no backend or server-side functionality.

### Deploying to Vercel

Vercel is the easiest way to deploy a Next.js app:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project in Vercel.
3. Vercel will automatically detect it as a Next.js project and deploy it.

### Deploying to Netlify

1. Push your code to a Git repository.
2. Log in to Netlify and click "Add new site" -> "Import an existing project".
3. Connect your Git provider and select the repository.
4. Netlify will automatically detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site".

## Configuration

### Contact Email

To update the contact email, modify the `mailto:` links found in:
- `src/components/Footer.tsx`
- `src/app/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

### Domain

To update the domain from `styelle.style` to something else, you should replace references in the files mentioned above.
