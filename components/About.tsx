"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-24 text-foreground transition-colors duration-500 md:px-10 md:py-32"
    >
      {/* Halo lumineux d'arrière-plan multi-gradients */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-blue-600/20 blur-[130px] dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-blue-600/15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Ligne Séparatrice Gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/80 via-teal-500/40 to-transparent dark:from-emerald-400/80 dark:via-neutral-800 dark:to-transparent" />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          {/* Label de section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-3"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              01 — À propos
            </span>
          </motion.div>

          {/* Texte principal */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-3xl font-medium leading-tight tracking-tight text-neutral-900 dark:text-white md:text-5xl"
            >
              Je suis un développeur passionné par la création de logiciels et d'expériences web.
              <span className="text-neutral-400 dark:text-neutral-500">
                {" "}
                J'aime transformer des idées en produits simples, efficaces et bien construits.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
            >
              Mon approche combine développement frontend, backend et conception d'architectures propres. Je m'intéresse particulièrement aux technologies{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text font-semibold text-transparent">
                .NET
              </span>{" "}
              et{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text font-semibold text-transparent">
                Spring Boot
              </span>
              , ainsi qu'au développement d'applications web modernes.
            </motion.p>

            {/* Grille de compétences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="relative mt-16 grid gap-8 border-t border-neutral-200/80 pt-10 dark:border-neutral-800 sm:grid-cols-3"
            >
              <Skill
                title="Frontend"
                items={["Vue.js", "React", "JavaScript", "TypeScript", "Bootstrap", "Tailwind", "CSS"]}
              />

              <Skill
                title="Backend"
                items={["Java", "Spring Boot", "Node.js", "C#", ".NET", "Python", "API REST", "SQL"]}
              />

              <Skill
                title="Outils"
                items={["Git", "Docker", "GitLab", "Vercel", "Postman", "Swagger", "CI/CD"]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Index décoratif */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-8 right-6 hidden font-mono text-xs font-medium text-neutral-400 dark:text-neutral-600 md:right-10 md:block"
      >
        01 / 03
      </motion.div>
    </section>
  );
}

function Skill({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-gradient-to-b from-white/90 via-neutral-50/50 to-neutral-100/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-neutral-800/80 dark:from-neutral-900/90 dark:via-neutral-900/40 dark:to-neutral-950/80 dark:hover:border-emerald-400/50">
      {/* Halo subtil interne au survol */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2 sm:flex-col sm:gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="group/item inline-flex items-center text-sm font-medium text-neutral-700 transition-colors dark:text-neutral-300"
          >
            <span className="mr-2 hidden h-1.5 w-1.5 rounded-full bg-emerald-500 transition-all duration-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_8px_#10b981] sm:inline-block" />
            <span className="transition-colors duration-200 group-hover/item:bg-gradient-to-r group-hover/item:from-emerald-500 group-hover/item:to-teal-400 group-hover/item:bg-clip-text group-hover/item:text-transparent">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}