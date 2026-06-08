'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Wraps the app so Framer Motion honors the user's
 * "prefers-reduced-motion" OS setting automatically.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
