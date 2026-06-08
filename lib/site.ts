// Single source of truth for contact + social links.

// Canonical site URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (set it in Vercel to your real domain, e.g. https://arno.design).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arno.design'

export const EMAIL = 'arnoldonyangor@gmail.com'

// Pre-filled email so the primary CTA opens a ready-to-send draft
// instead of a blank message (much lower friction than bare mailto:).
const SUBJECT = "Project inquiry — let's talk"
const BODY = [
  'Hi Arnold,',
  '',
  "I came across your portfolio and I'd like to discuss a project.",
  '',
  'A bit about what I need:',
  '- ',
  '',
  'Timeline:',
  'Budget range:',
  '',
  'Thanks,',
].join('\n')

export const MAILTO_PREFILLED =
  `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`

// Plain mailto for places that just surface the address as text.
export const MAILTO = `mailto:${EMAIL}`

export const SOCIALS = {
  github: 'https://github.com/Arnold-Onyango',
  linkedin: 'https://www.linkedin.com/in/arnold-onyango-63b3003b3/',
  twitter: 'https://x.com/arnoldOnyango_R',
  // TODO: drop a resume.pdf into /public to enable this download
  resume: '/resume.pdf',
}
