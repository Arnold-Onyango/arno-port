'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Tag } from 'lucide-react'
import type { Project } from '@/data/projects'
import { EMAIL } from '@/lib/site'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!project) return

    // Remember what was focused so we can restore it on close
    const previouslyFocused = document.activeElement as HTMLElement | null

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      // Trap Tab focus inside the dialog
      if (e.key === 'Tab') {
        const panel = panelRef.current
        if (!panel) return
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    // Move focus into the dialog once it has mounted
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus()
    }, 0)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.clearTimeout(focusTimer)
      previouslyFocused?.focus?.()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/55 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Panel — opacity-only entrance so the hero layout morph stays clean */}
          <motion.div
            key="modal"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 overflow-y-auto bg-cream rounded-2xl shadow-2xl"
            style={{
              inset: '16px',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            {/* Hero image — shared element, morphs from the clicked card */}
            <motion.div
              layoutId={`media-${project.id}`}
              className="relative overflow-hidden rounded-t-2xl"
              style={{
                aspectRatio: '16/7',
                background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Ghost title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-bold text-white/[0.07] select-none"
                  style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
                >
                  {project.title}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Category pill */}
              <div className="absolute bottom-4 left-6">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-7 md:p-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-2 leading-tight">
                {project.title}
              </h2>
              <p className="text-charcoal/45 text-base md:text-lg mb-7">{project.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full bg-charcoal/[0.05] text-charcoal/60"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Design goal callout */}
              <div
                className="rounded-xl p-5 mb-8 border"
                style={{
                  background: `${project.bgLight}`,
                  borderColor: `${project.accentColor}30`,
                }}
              >
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal/35 mb-1.5">
                  Design Goal
                </p>
                <p className="text-base md:text-lg font-medium text-charcoal leading-snug">
                  {project.goalLine}
                </p>
              </div>

              {/* Description */}
              <p className="text-charcoal/65 leading-relaxed text-base md:text-[17px] mb-9">
                {project.description}
              </p>

              {/* Divider */}
              <div className="border-t border-charcoal/[0.07] pt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    `Re: ${project.title} — let's talk`
                  )}&body=${encodeURIComponent(
                    `Hi Arnold,\n\nI saw the ${project.title} case study on your portfolio and I'd like to discuss something similar.\n\n`
                  )}`}
                  className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber hover:text-charcoal transition-all duration-300"
                >
                  Discuss This Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="text-sm text-charcoal/35 hover:text-charcoal transition-colors"
                >
                  ← Back to work
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
