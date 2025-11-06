import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0e14] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl">
          Let’s build something meaningful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/70">
          I’m actively seeking entry-level Data Scientist roles and internships. If you think I’d be a good fit, I’d love to chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-[#0b0e14] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            <Mail className="h-4 w-4" />
            Say hello
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Your Name — Data Science Portfolio
        </p>
      </div>
    </section>
  );
}
