import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nexus UI',
    description: 'A cyberpunk design system with glass textures, gradients, and motion primitives.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    href: '#',
    accent: 'from-fuchsia-600 to-cyan-500',
  },
  {
    title: 'Quantum Dashboard',
    description: 'Real-time analytics with GPU-accelerated charts and orbital navigation.',
    tech: ['React', 'WebGL', 'D3'],
    href: '#',
    accent: 'from-cyan-500 to-purple-600',
  },
  {
    title: 'Astra Labs Site',
    description: 'A fast marketing site blending Spline 3D scenes and buttery transitions.',
    tech: ['Vite', 'Spline', 'SSR'],
    href: '#',
    accent: 'from-violet-600 to-emerald-500',
  },
];

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0.0)_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-zinc-300 max-w-2xl">Interfaces with precision and flair—built for speed, accessibility, and delight.</p>
          </div>
          <div className="hidden md:block text-sm text-zinc-400">3 projects</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className={`absolute -right-16 -top-16 h-48 w-48 rotate-12 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-2xl`} aria-hidden />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="size-4 text-zinc-300 opacity-70 group-hover:opacity-100 transition" />
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
