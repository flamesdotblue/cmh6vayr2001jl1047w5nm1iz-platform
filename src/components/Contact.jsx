import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s collaborate</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">Have an idea that needs a cybernetic touch? I’m open to select freelance work and collaborations.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-4">
              <label className="mb-1 block text-sm text-zinc-300">Name</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 focus:border-cyan-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm text-zinc-300">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-3 outline-none focus:border-fuchsia-500"
                  placeholder="you@domain.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-sm text-zinc-300">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              Send Message
              <Send className="size-4" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold">Availability</h3>
                <p className="mt-1 text-zinc-300">Open for consulting, prototypes, and select end-to-end builds.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tech Stack</h3>
                <p className="mt-1 text-zinc-300">React, Vite, Tailwind, Framer Motion, Spline, Three.js, Radix, and performance-first tooling.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Find me</h3>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-200 hover:text-white hover:bg-white/10 transition"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-200 hover:text-white hover:bg-white/10 transition"
                  >
                    <Linkedin className="size-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
