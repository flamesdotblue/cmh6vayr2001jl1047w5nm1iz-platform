import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <a href="#home" className="group flex items-center gap-2 px-4 py-3">
            <div className="relative">
              <span className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-fuchsia-600/40 to-cyan-500/40 blur-md opacity-0 group-hover:opacity-100 transition" />
              <Rocket className="relative size-6 text-cyan-300" />
            </div>
            <span className="font-semibold tracking-wide text-cyan-200">CyberKunju</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 p-1">
            {[
              { href: '#home', label: 'Home' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm text-zinc-200/90 hover:text-white transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 pr-3">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              Explore
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
