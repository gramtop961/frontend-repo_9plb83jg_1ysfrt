import { motion } from 'framer-motion';
import { Brain, Database, LineChart, Code2 } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['Regression', 'Classification', 'Model Tuning', 'Scikit-Learn'],
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['SQL', 'ETL', 'Pandas', 'NumPy'],
    color: 'from-sky-500/20 to-sky-500/5 border-sky-500/20',
  },
  {
    icon: LineChart,
    title: 'Analytics',
    items: ['A/B Testing', 'Dashboards', 'Metrics', 'Storytelling'],
    color: 'from-amber-500/20 to-amber-500/5 border-amber-500/20',
  },
  {
    icon: Code2,
    title: 'Dev & Tools',
    items: ['Python', 'Jupyter', 'Git', 'FastAPI'],
    color: 'from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0e14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl">
          Skills & Stack
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl border bg-gradient-to-b ${s.color} p-5`}
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/70">
                {s.items.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
