'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="bg-charcoal relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(247,245,242,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,245,242,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Amber glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-40">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.22em] uppercase text-cream/25 mb-6 flex items-center gap-2"
        >
          <span className="w-5 h-px bg-amber/50" />
          Let's Collaborate
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-cream leading-[0.9] tracking-tight mb-12"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
        >
          Ready to build
          <br />
          <span className="text-amber">something great?</span>
        </motion.h2>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6"
        >
          <a
            href="mailto:arnoldonyangor@gmail.com"
            className="group inline-flex items-center gap-3 bg-amber text-charcoal px-9 py-4.5 rounded-full text-sm font-bold tracking-wide hover:bg-cream transition-colors duration-300"
            style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
          >
            Let's Talk
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-base leading-none">
              →
            </span>
          </a>
          <a
            href="mailto:arnoldonyangor@gmail.com"
            className="text-sm text-cream/35 hover:text-cream/60 transition-colors"
          >
            arnoldonyangor@gmail.com
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[13px] text-cream/25"
        >
          Usually respond within 24 hours.
        </motion.p>

        {/* Footer bar */}
        <div className="mt-24 md:mt-32 pt-8 border-t border-cream/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-display text-cream/30 text-sm">
            Arno<span className="text-amber">.</span> — Kampala, Uganda
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:arnoldonyangor@gmail.com"
              className="text-[12px] text-cream/20 hover:text-cream/50 transition-colors"
            >
              Email
            </a>
            <span className="text-cream/10">·</span>
            <p className="text-[12px] text-cream/15">
              © {year} Arnold Onyango
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
