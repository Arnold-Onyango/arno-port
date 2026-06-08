'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import type { Project } from '@/data/projects'

export default function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="work" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
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
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-5xl md:text-7xl font-bold text-charcoal leading-[0.92] tracking-tight"
            >
              Case
              <br />
              <span className="italic text-charcoal/25">Studies</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hidden md:block text-sm text-charcoal/40 max-w-[240px] text-right leading-relaxed"
          >
            Each project is a focused design challenge — solved with intention and craft.
          </motion.p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Bottom cue */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-charcoal/30">
            Click any card to read the full case study
          </p>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
