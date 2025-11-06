import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Globe2 } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Prediction',
    desc: 'Built an end-to-end pipeline: data cleaning, feature engineering, and an XGBoost model with SHAP explanations.',
    tags: ['Python', 'XGBoost', 'Pandas', 'SHAP'],
  },
  {
    title: 'Sales Forecasting Dashboard',
    desc: 'Time-series forecasting with Prophet and an interactive dashboard to monitor weekly trends.',
    tags: ['Prophet', 'Plotly', 'FastAPI'],
  },
  {
    title: 'NLP Resume Analyzer',
    desc: 'Extracts key skills and experience from resumes using spaCy and keyword matching.',
    tags: ['NLP', 'spaCy', 'Regex'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0e14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">Selected Projects</h2>
          <a href="#contact" className="hidden rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 md:block">
            Get in touch
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="absolute right-3 top-3 text-white/10 transition group-hover:text-white/30">
                {idx === 0 && <Sparkles className="h-8 w-8" />} 
                {idx === 1 && <BarChart3 className="h-8 w-8" />} 
                {idx === 2 && <Globe2 className="h-8 w-8" />} 
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
