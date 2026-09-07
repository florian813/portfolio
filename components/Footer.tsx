export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background px-6 py-10 text-foreground transition-colors duration-500 md:px-10">
      {/* Halo lumineux d'arrière-plan discret */}
      <div/>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 pt-8 font-mono text-xs text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center">
        {/* Ligne Séparatrice Gradient */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-emerald-500/80 via-teal-500/40 to-transparent dark:from-emerald-400/80 dark:via-neutral-800 dark:to-transparent" />

        {/* Copyright */}
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          © {new Date().getFullYear()} Florian Leborgne
        </span>

        {/* Liens réseaux / plateformes */}
        <div className="flex flex-wrap gap-6 font-medium">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            <span className="transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
              GitHub
            </span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <a
            href="https://gitlab.com/florian_leborgne813"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            <span className="transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
              GitLab
            </span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/florian-leborgne-556597232/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            <span className="transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
              LinkedIn
            </span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Status / Titre avec Badge Gradient */}
        <span className="rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent px-3 py-1 font-semibold text-neutral-700 dark:text-neutral-300">
          Développeur Fullstack
        </span>
      </div>
    </footer>
  );
}