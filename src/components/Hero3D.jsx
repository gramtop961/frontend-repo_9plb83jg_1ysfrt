import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0e14] text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e14]/20 via-[#0b0e14]/50 to-[#0b0e14]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 md:items-start md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to Data Science roles & internships
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-3xl text-center text-4xl font-[800] leading-tight tracking-tight md:text-left md:text-6xl">
          Building intelligent products with data, code, and curiosity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-2xl text-center text-white/70 md:text-left">
          I’m a data science fresher who loves turning messy data into crisp insights, smart models, and delightful experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-[#0b0e14] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            View Projects
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 flex items-center gap-4 text-white/70">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
