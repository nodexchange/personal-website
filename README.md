This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use `pnpm` for this repo (there is a `pnpm-lock.yaml` lockfile):

```bash
pnpm install
pnpm dev
```

If you are on Windows 11 ARM64 and switch between ARM64 Node and x64 Node (emulation), rerun `pnpm install` after switching architecture so platform-native binaries are refreshed.

This repository intentionally pins `packageManager` and `pnpm.supportedArchitectures`
in `package.json` to avoid install/compile issues on Windows 11 ARM64 when native
dependencies are resolved across ARM64 and x64 environments.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Exporting Resume to PDF

To export the markdown resume to PDF, use [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf):

```bash
npm run resume:pdf
# or
pnpm resume:pdf
```

Equivalent direct command:

```bash
npx md-to-pdf public/marcin-wojtala-resume.md --pdf-options '{"format": "A4", "margin": {"top": "10.85mm", "bottom": "10.99mm", "left": "14.82mm", "right": "14.79mm"}}'
```

On Windows PowerShell, prefer this (safe JSON handling):

```powershell
$pdfOptions = @{
  format = 'A4'
  margin = @{
    top    = '10.85mm'
    bottom = '10.99mm'
    left   = '14.82mm'
    right  = '14.79mm'
  }
} | ConvertTo-Json -Compress

npx md-to-pdf public/marcin-wojtala-resume.md --pdf-options $pdfOptions
```

If `npx` is blocked by PowerShell execution policy, run via `cmd`:

```powershell
cmd /c npx md-to-pdf public/marcin-wojtala-resume.md --pdf-options "{\"format\":\"A4\",\"margin\":{\"top\":\"10.85mm\",\"bottom\":\"10.99mm\",\"left\":\"14.82mm\",\"right\":\"14.79mm\"}}"
```

This generates `public/marcin-wojtala-resume.pdf`.

## Booking Link (Optional)

The `/book` page supports a direct calendar CTA.

Set `NEXT_PUBLIC_BOOKING_URL` (for example, a Calendly link) to enable the
"Open booking calendar" button:

```bash
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-handle/30min
```

You can copy `.env.example` to `.env` and set the value there for local development.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
