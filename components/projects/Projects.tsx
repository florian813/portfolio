"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors duration-500 md:py-32"
    >
      {/* Halo Imposant Arrière-plan */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/20 via-teal-500/20 to-emerald-500/25 blur-[140px] dark:from-blue-600/15 dark:via-teal-500/15 dark:to-emerald-500/20" />

      {/* Container Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Ligne Séparatrice Gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/80 via-teal-500/40 to-transparent dark:from-emerald-400/80 dark:via-neutral-800 dark:to-transparent" />

        {/* Header Section */}
        <div className="mb-12 mt-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              02 — Sélection
            </span>

            <h2 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-7xl">
              Projets
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                .
              </span>
            </h2>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col gap-6 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-right md:text-base"
            >
              Glissez latéralement pour explorer mes réalisations récentes.
            </motion.p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Projets précédents"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:text-white active:scale-95 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white dark:hover:border-emerald-400"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Projets suivants"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:text-white active:scale-95 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white dark:hover:border-emerald-400"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carrousel 1 rangée */}
      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 scroll-smooth pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24"
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="w-[85vw] flex-none snap-start sm:w-[450px] lg:w-[520px]"
          >
            <ProjectCard
              project={project}
              number={String(index + 1).padStart(2, "0")}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}