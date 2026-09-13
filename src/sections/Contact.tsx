import { motion } from "framer-motion";
import { GradientText } from "../components/GradientText";
import { MagneticButton } from "../components/MagneticButton";
import { SectionWrapper } from "../components/SectionWrapper";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Mari terhubung"
      description="Terbuka untuk diskusi seputar digital transformation, industrial IoT, data & AI, atau peluang kolaborasi."
      alt
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-[var(--border)] bg-[var(--bg-2)] p-10 text-center md:p-16"
      >
        <h3 className="text-2xl font-semibold md:text-3xl">
          Punya proyek atau ide? <GradientText>Ayo diskusikan.</GradientText>
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)]">
          {profile.location} · Terbuka untuk kolaborasi, konsultasi, maupun peluang karier di bidang
          Digital Transformation & Industrial AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${profile.email}`}>Email Saya</MagneticButton>
          <MagneticButton href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
            GitHub
          </MagneticButton>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
