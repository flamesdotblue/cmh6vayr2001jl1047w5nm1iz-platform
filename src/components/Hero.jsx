import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.65)_65%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
              <span className="size-2 rounded-full bg-cyan-400" /> Futuristic Developer & Designer
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
                CyberKunju
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-200/90">
              I craft immersive, cybernetic web experiences that blend 3D, motion, and clean code. Let’s build surreal, high-performance interfaces with a taste of the future.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-[0_0_40px_-10px_rgba(56,189,248,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-zinc-100 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
              <div className="ml-2 flex items-center gap-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:text-white hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:text-white hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
