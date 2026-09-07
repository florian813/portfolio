"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-neutral-200/80 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-md transition-colors duration-500 dark:border-neutral-800 dark:bg-neutral-900/70">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-neutral-900 dark:text-white"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] transition-transform duration-300 group-hover:scale-125" />
          <span className="transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
            FLORIAN LEBORGNE
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 font-mono text-xs font-medium text-neutral-600 dark:text-neutral-400 md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            01. À propos
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            02. Projets
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            03. Contact
          </a>
        </div>

        {/* Desktop Actions : Toggle Thème + Bouton Contact */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <a
            href="#contact"
            className="relative overflow-hidden rounded-full p-[1px]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 opacity-80 transition-opacity duration-300 hover:opacity-100" />
            <span className="relative block rounded-full bg-neutral-900 px-5 py-2 font-mono text-xs font-semibold text-white transition-all duration-300 hover:bg-opacity-80 dark:bg-neutral-950 dark:hover:bg-opacity-80">
              Me contacter
            </span>
          </a>
        </div>

        {/* Mobile Actions : Toggle Thème + Bouton Burger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-100 text-neutral-900 transition-colors hover:border-emerald-500/50 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          >
            <span className="font-mono text-sm">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/90 md:hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600" />

            <div className="flex flex-col gap-5 font-mono text-sm font-medium text-neutral-800 dark:text-neutral-200">
              <a
                href="#about"
                onClick={closeMenu}
                className="group flex items-center justify-between transition-colors hover:text-emerald-500"
              >
                <span>01. À propos</span>
                <span className="text-xs text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500">
                  →
                </span>
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="group flex items-center justify-between transition-colors hover:text-emerald-500"
              >
                <span>02. Projets</span>
                <span className="text-xs text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500">
                  →
                </span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="group flex items-center justify-between transition-colors hover:text-emerald-500"
              >
                <span>03. Contact</span>
                <span className="text-xs text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500">
                  →
                </span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 py-3 text-center text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-opacity active:opacity-90"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}