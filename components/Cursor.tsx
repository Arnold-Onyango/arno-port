'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Custom cursor: a precise dot + a lagging ring.
 * - Only renders on fine pointers (mouse), never touch.
 * - Skipped when the user prefers reduced motion.
 * - Uses mix-blend-mode: difference so it stays visible on
 *   both the cream and the dark charcoal sections.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  // Raw pointer position (dot tracks this instantly)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // Ring lags behind with a spring
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduce.matches) return

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      setHovering(
        !!target?.closest('a, button, [role="button"], input, textarea, select, label')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: hovering ? 0.4 : 1 }}
        transition={{ duration: 0.18 }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.18 }}
        aria-hidden="true"
      />
    </>
  )
}
