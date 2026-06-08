'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { MAILTO_PREFILLED } from '@/lib/site'

const WORDS = ['Ecommerce', 'Fintech', 'SaaS', 'Wellness']

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">
      {/* Animated CSS grid */}
      <div className="hero-grid pointer-events-none" aria-hidden="true" />

      {/* Soft amber radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '8%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,113,74,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-28 w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-6 h-px bg-amber" />
          <span className="text-xs font-medium tracking-[0.22em] uppercase text-charcoal/40">
            UI/UX Designer &amp; Developer · Kampala, Uganda
          </span>
        </motion.div>

        {/* Main name — giant editorial type */}
        <div className="overflow-hidden leading-none mb-1">
          <motion.h1
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.25 }}
            className="font-display font-bold text-charcoal leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(5rem, 13vw, 11rem)' }}
          >
            Arnold
          </motion.h1>
        </div>
        <div className="overflow-hidden leading-none mb-10">
          <motion.h1
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.35 }}
            className="font-display font-bold italic leading-[0.88] tracking-tight"
            style={{
              fontSize: 'clamp(5rem, 13vw, 11rem)',
              color: 'rgba(26,26,26,0.18)',
            }}
          >
            Onyango
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="font-display text-xl md:text-2xl font-medium italic text-charcoal/50 mb-6 max-w-lg"
        >
          "I design it, then I build it — no hand-off, no gap."
        </motion.p>

        {/* Rotating word strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.68, ease }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-sm md:text-base text-charcoal/40 font-medium">
            Currently designing for
          </span>
          {/* fixed-width container so layout doesn't shift */}
          <div
            className="relative overflow-hidden"
            style={{ height: '1.5rem', minWidth: '140px' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[wordIndex]}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="absolute inset-0 text-sm md:text-base font-bold text-amber"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tool stack */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.78 }}
          className="text-xs tracking-[0.18em] uppercase text-charcoal/45 mb-12"
        >
          Figma · Framer · Webflow · React
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.88, ease }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 bg-charcoal text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-amber hover:text-charcoal transition-all duration-300"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-base leading-none">
              →
            </span>
          </a>
          <a
            href={MAILTO_PREFILLED}
            className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default select-none"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/45">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-charcoal/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
