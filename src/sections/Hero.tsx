import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Container } from "../components/Container";
import { GradientText } from "../components/GradientText";
import { MagneticButton } from "../components/MagneticButton";
import { profile } from "../data/profile";

const HeroScene = lazy(() => import("../three/HeroScene").then((m) => ({ default: m.HeroScene })));

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-[var(--bg-0)]" />}>
        <HeroScene />
      </Suspense>

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-mono mb-6 flex items-center gap-3 text-[11px] text-[var(--text-muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
          {profile.role}
        </motion.p>

        <h1 className="max-w-4xl text-[13vw] font-medium uppercase leading-[0.95] tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
          <AnimatedText text="Rafli Kurnia" as="span" />
          <br />
          <AnimatedText text="Nugroho" as="span" delay={0.12} />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 font-heading text-xl font-medium uppercase tracking-[0.08em] sm:text-2xl md:text-3xl"
        >
          <GradientText>{profile.positioning}</GradientText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">Lihat Proyek</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Hubungi Saya
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="label-mono mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6 text-[10px] text-[var(--text-muted)] sm:grid-cols-3"
        >
          {profile.focusTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
