'use client'

import { motion } from 'framer-motion'
import { Layers, Code2, Palette } from 'lucide-react'

const SERVICES = [
  {
    Icon: Layers,
    title: 'UI/UX Design',
    description:
      'End-to-end product design — from user research and wireframes to polished, pixel-perfect interfaces that convert visitors into customers.',
    number: '01',
  },
  {
    Icon: Code2,
    title: 'Web Development',
    description:
      "React and Next.js development with a designer’s eye. Built fast, accessible, and production-ready. No gap between design and code.",
    number: '02',
  },
  {
    Icon: Palette,
    title: 'Design Systems',
    description:
      'Scalable component libraries and token-based design systems that keep your product consistent, legible, and maintainable as you grow.',
    number: '03',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 border-t border-charcoal/[0.06] bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.22em] uppercase text-charcoal/35 mb-3 flex items-center gap-2"
            >
              <span className="w-5 h-px bg-amber" />
              What I Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-5xl md:text-7xl font-bold text-charcoal leading-[0.92] tracking-tight"
            >
              Services
            </motion.h2>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map(({ Icon, title, description, number }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 md:p-8 rounded-2xl border border-charcoal/[0.07] bg-white hover:border-amber transition-all duration-400 hover:shadow-[0_8px_40px_-12px_rgba(26,26,26,0.12)]"
            >
              {/* Ghost number */}
              <span className="absolute top-5 right-6 font-display text-6xl font-bold text-charcoal/[0.04] select-none leading-none">
                {number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 bg-amber/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-amber" strokeWidth={1.75} />
              </div>

              <h3 className="font-display text-2xl font-bold text-charcoal mb-3">{title}</h3>
              <p className="text-charcoal/55 leading-relaxed text-[15px]">{description}</p>

              {/* Bottom accent bar */}
              <div className="mt-8 h-px w-0 group-hover:w-12 bg-amber transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
