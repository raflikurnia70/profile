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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-2)]/60 px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
          {profile.role}
        </motion.p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          <AnimatedText text="Rafli Kurnia" as="span" />{" "}
          <GradientText>
            <AnimatedText text="Nugroho" as="span" delay={0.15} />
          </GradientText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
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
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]"
        >
          {profile.focusTags.map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
              {tag}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
