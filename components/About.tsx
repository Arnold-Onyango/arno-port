'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '4 yrs',  label: 'Experience'  },
  { value: '30+',    label: 'Clients'      },
  { value: '5+',     label: 'Countries'    },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-cream border-t border-charcoal/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Circular photo placeholder */}
            <div className="relative self-start">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-amber/25 pointer-events-none" />
              {/* Amber dot accent */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber rounded-full shadow-sm" />

              <div
                className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(145deg, #C4714A 0%, #F5A623 50%, #7A3B1E 100%)',
                }}
              >
                {/* Monogram / placeholder */}
                <span className="font-display text-8xl font-bold text-white/20 select-none">A</span>

                {/* Inner subtle grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
              </div>
            </div>

            {/* Stat chips */}
            <div className="flex gap-8 mt-10">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-charcoal/35 mt-1.5 tracking-wide uppercase">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tool badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {['Figma', 'Framer', 'Webflow', 'React', 'Next.js', 'Tailwind'].map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium px-3 py-1 rounded-full bg-charcoal/[0.05] text-charcoal/50 tracking-wide"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-charcoal/35 mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-amber" />
              About Me
            </p>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-8 leading-[0.92] tracking-tight">
              Designer.
              <br />
              <span className="italic text-charcoal/22">Developer.</span>
            </h2>

            <div className="space-y-5 text-charcoal/65 leading-relaxed text-[15px] md:text-base">
              <p>
                I'm a designer-developer hybrid based in Kampala, Uganda. I work with startups
                and growth-stage teams who need design that actually converts — not just looks
                good in a deck. My work lives at the intersection of craft and strategy.
              </p>
              <p>
                My background spans both the visual discipline of Figma and the engineering
                reality of React and Next.js. That dual fluency means I design with
                implementation in mind, and build with the user experience at the centre.
                No hand-off friction. No gap between intention and output.
              </p>
              <p>
                I've worked across e-commerce, fintech, SaaS, and wellness verticals — always
                starting with the problem, never the palette. If you need a collaborator who
                thinks deeply, ships cleanly, and sweats the details, let's talk.
              </p>
            </div>

            <motion.a
              href="mailto:arnoldonyangor@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 mt-9 text-sm font-semibold text-charcoal group"
            >
              <span className="border-b border-amber pb-0.5 group-hover:text-amber transition-colors duration-300">
                Get in touch
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
