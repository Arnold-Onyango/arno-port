'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.title} case study`}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-charcoal/[0.07] hover:border-amber hover:shadow-[0_20px_60px_-15px_rgba(26,26,26,0.18)] hover:-translate-y-1.5 transition-all duration-400 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-2"
    >
      {/* Image area — 4/3 gradient placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/3' }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          }}
        />

        {/* Grid overlay on image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ghost title */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className="font-display font-bold text-white/[0.08] select-none leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          >
            {project.title}
          </span>
        </div>

        {/* Category pill */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Hover arrow badge */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-2xl font-bold text-charcoal leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            className="w-5 h-5 text-charcoal/20 group-hover:text-amber mt-0.5 flex-shrink-0 transition-colors duration-300"
          />
        </div>

        <p className="text-sm text-charcoal/45 mb-5 leading-relaxed">{project.subtitle}</p>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-3 py-1 rounded-full bg-charcoal/[0.05] text-charcoal/55 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Goal line */}
        <div className="border-t border-charcoal/[0.06] pt-4">
          <p className="text-sm text-charcoal/60 italic leading-relaxed">{project.goalLine}</p>
        </div>
      </div>
    </motion.article>
  )
}
