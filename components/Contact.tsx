"use client";

import { useState } from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const EMAIL = "florianleborgne813@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Erreur de copie :", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground transition-colors duration-500 md:px-10 md:py-40"
    >
      {/* 1. Halo d'arrière-plan BEAUCOUP plus prononcé */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-blue-600/15 blur-[100px] dark:from-emerald-500/20 dark:via-teal-500/15 dark:to-blue-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* 2. Ligne de séparation avec Gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/80 via-neutral-300 to-transparent dark:from-emerald-400/80 dark:via-neutral-800 dark:to-transparent" />

        {/* Header de section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 mt-16 flex flex-wrap items-center justify-between gap-4"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            03 — Contact
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouveaux projets
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          {/* Titre avec TEXT GRADIENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-neutral-900 dark:text-white md:text-8xl">
              Un projet ?<br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Parlons-en.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
              Basé en France, disponible pour des opportunités en
              CDI ou missions en freelance. N'hésitez pas à me contacter directement.
            </p>
          </motion.div>

          {/* Boutons avec bordure & fond en Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {/* Bouton Mail Principal */}
            <a
              href={`mailto:${EMAIL}`}
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-6 font-mono text-sm font-medium text-white shadow-xl transition-all duration-500 hover:from-emerald-600 hover:to-teal-600 dark:from-white dark:via-neutral-100 dark:to-white dark:text-neutral-900 dark:hover:from-emerald-400 dark:hover:to-teal-400"
            >
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-white/80 dark:group-hover:text-neutral-900/80">
                  Envoyer un e-mail
                </span>
                <span className="text-base font-bold md:text-lg">{EMAIL}</span>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20 dark:bg-black/5">
                →
              </span>
            </a>

            {/* Bouton Copier */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex w-full items-center justify-between rounded-2xl border border-neutral-200/80 bg-gradient-to-r from-neutral-50/80 to-transparent p-4 font-mono text-xs font-semibold text-neutral-700 transition-all hover:border-emerald-500/50 hover:from-emerald-500/5 dark:border-neutral-800 dark:from-neutral-900/50 dark:text-neutral-300 dark:hover:border-emerald-400/50 dark:hover:from-emerald-500/10"
            >
              <span>{copied ? "✓ Copié dans le presse-papier !" : "Copier l'adresse e-mail"}</span>
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">
                {copied ? "Succès" : "Copier"}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-8 right-6 hidden font-mono text-xs font-medium text-neutral-400 dark:text-neutral-600 md:right-10 md:block"
      >
        04 / 04
      </motion.div>
    </section>
  );
}