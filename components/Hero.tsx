"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pb-16 pt-28 text-foreground transition-colors duration-500 md:px-10 md:pb-20 md:pt-32">
      {/* Halos lumineux en arrière-plan (Gradients plus intenses) */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-blue-600/15 blur-[120px] dark:from-emerald-500/25 dark:via-teal-500/15 dark:to-blue-600/15" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-blue-600/25 via-teal-500/20 to-emerald-500/10 blur-[130px] dark:from-blue-500/20 dark:via-teal-500/15" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Barre supérieure d'infos */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex items-center justify-between text-sm md:mb-16"
        >
          {/* Badge Disponible avec contour & fond dégradés */}
          <div className="flex items-center gap-3 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </span>
            <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              Disponible pour une opportunité
            </span>
          </div>

          <span className="hidden font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 sm:block">
            Hauts-de-France, France
          </span>
        </motion.div>

        {/* Grille principale */}
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-8">
          {/* Carte Photo avec bordure dégradée éclatante */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="order-1 md:col-span-4 md:col-start-9 md:row-start-1"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease }}
              className="group relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 p-1 shadow-2xl shadow-emerald-500/20"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2.3rem]">
                <img
                  src="/profile.jpg"
                  alt="Portrait de Florian Leborgne"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Overlay léger au survol */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

              {/* Badge Nom sur la photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease }}
                className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/80 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-white"
              >
                Florian Leborgne
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Titre / Nom avec Gradient Tricolore */}
          <div className="order-2 md:col-span-9 md:col-start-1 md:row-start-1">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="text-[clamp(4.5rem,11vw,10.5rem)] font-bold leading-[0.82] tracking-[-0.05em]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
                }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-300"
              >
                Florian
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
                }}
                className="block text-neutral-400 dark:text-neutral-600"
              >
                Leborgne
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                  .
                </span>
              </motion.span>
            </motion.h1>
          </div>
        </div>

        {/* Pied du Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="relative mt-14 grid gap-10 pt-8 md:mt-20 md:grid-cols-12"
        >
          {/* Ligne Séparatrice Gradient */}
          <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-emerald-500/80 via-teal-500/40 to-transparent dark:from-emerald-400/80 dark:via-neutral-800 dark:to-transparent" />

          {/* Master Tag & Bio */}
          <div className="space-y-4 md:col-span-7">
            <span className="inline-block rounded-md border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
              Master Informatique
            </span>
            <p className="max-w-2xl text-xl font-normal leading-relaxed tracking-tight text-neutral-600 dark:text-neutral-300 md:text-2xl">
              Développeur Fullstack Junior.
              <br />
              Je conçois des applications modernes,
              <br className="hidden md:block" />
              performantes et maintenables.
            </p>
          </div>

          {/* Bouton d'action CTA */}
          <div className="flex items-end md:col-span-5 md:justify-end">
            <motion.a
              href="#projects"
              whileHover="hover"
              className="group flex items-center gap-4 text-sm font-medium"
            >
              <motion.span
                variants={{
                  hover: { rotate: -45, scale: 1.05 },
                }}
                transition={{ duration: 0.3 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 text-white shadow-lg shadow-emerald-500/25 text-lg"
              >
                ↓
              </motion.span>

              <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
                Découvrir mes projets
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Index décoratif */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-6 hidden font-mono text-xs font-medium text-neutral-400 dark:text-neutral-600 md:right-10 md:block"
      >
        01 / 04
      </motion.div>
    </section>
  );
}