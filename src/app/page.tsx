"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "App Router",
    description:
      "Built on Next.js's app directory, so routing, layouts, and metadata just work.",
  },
  {
    title: "Tailwind CSS v4",
    description:
      "Utility-first styling with automatic light and dark theming baked in.",
  },
  {
    title: "Framer Motion",
    description:
      "Animation primitives are wired up and ready — fade, slide, and scroll effects out of the box.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center justify-center gap-6 py-32 px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50"
        >
          Next.js + Framer Motion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
        >
          This starter is wired up with framer-motion. Edit{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            src/app/page.tsx
          </code>{" "}
          to build from here.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Get started
        </motion.button>
      </main>

      <section className="w-full max-w-5xl mx-auto px-16 pb-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-black/[.08] bg-white p-6 text-left dark:border-white/[.1] dark:bg-zinc-900"
            >
              <h2 className="text-base font-semibold text-black dark:text-zinc-50">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-black/[.08] py-8 text-center text-sm text-zinc-500 dark:border-white/[.1] dark:text-zinc-500">
        Built with Next.js and Framer Motion.
      </footer>
    </div>
  );
}
