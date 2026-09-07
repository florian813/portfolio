"use client";

import { motion } from "motion/react";
import { Project } from "@/types/project";
import ProjectStatus from "./ProjectStatus";
import { getWebsiteScreenshot } from "@/app/lib/utils";

type Props = {
  project: Project;
  number: string;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectCard({ project, number, index }: Props) {
  const isClickable = project.status === "live" && Boolean(project.url);

  // Image locale prioritaire, sinon capture dynamique pour les projets LIVE
  const imageUrl =
    project.image ||
    (isClickable && project.url ? getWebsiteScreenshot(project.url) : undefined);

  const content = (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white/90 via-neutral-50/50 to-neutral-100/80 p-5 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-neutral-800/80 dark:from-neutral-900/90 dark:via-neutral-900/40 dark:to-neutral-950/80 dark:hover:border-emerald-400/50">
      {/* Glow d'arrière-plan discret au survol */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        {/* Container Image / Placeholder avec gradient */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200/80 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-6xl font-bold tracking-tight bg-gradient-to-br from-neutral-300 to-neutral-400 bg-clip-text text-transparent dark:from-neutral-700 dark:to-neutral-800">
                {number}
              </span>
            </div>
          )}

          {/* Boutons d'action flottants (Demo + Repository) */}
          <div className="absolute right-4 top-4 z-20 flex gap-2">
            {/* Bouton Dépôt Git (GitHub / GitLab) */}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Voir le code source"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/90 text-neutral-900 shadow-md backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            )}

            {/* Bouton Vers le site si LIVE */}
            {isClickable && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/90 text-neutral-900 shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-white">
                <span className="text-base transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </div>
            )}
          </div>

          {/* Badge de statut */}
          <div className="absolute bottom-4 left-4">
            <ProjectStatus status={project.status} />
          </div>
        </div>

        {/* Informations du projet */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {number}
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:via-teal-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent dark:text-white md:text-3xl">
                {project.title}
              </h3>
            </div>

            {isClickable && (
              <span className="pt-2 font-mono text-xs font-medium text-neutral-400 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                Voir
              </span>
            )}
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Carte : Technologies & Liens explicites */}
      <div className="mt-6 flex flex-col gap-4 border-t border-neutral-200/60 pt-4 dark:border-neutral-800/60">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-200/80 bg-gradient-to-r from-neutral-100 to-white px-3 py-1 font-mono text-xs font-medium text-neutral-700 transition-all duration-300 group-hover:border-emerald-500/30 dark:border-neutral-800 dark:from-neutral-800/50 dark:to-neutral-900/50 dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Liens en bas de carte si le dépôt existe */}
        {project.repositoryUrl && (
          <div className="flex items-center gap-4 pt-1 font-mono text-xs">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="z-20 inline-flex items-center gap-1.5 text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400"
            >
              <span>Code source</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="h-full"
    >
      {isClickable ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      ) : (
        <article className="block h-full">{content}</article>
      )}
    </motion.div>
  );
}