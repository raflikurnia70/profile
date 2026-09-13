import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { profile } from "../data/profile";

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Dari lapangan manufaktur menuju teknologi & AI"
      description={profile.identity}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {profile.layers.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
              Layer {i + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{layer.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{layer.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-10 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-bg)] p-8"
      >
        <p className="text-lg font-medium leading-relaxed text-[var(--text-primary)] md:text-xl">
          “{profile.valueProposition}”
        </p>
      </motion.blockquote>
    </SectionWrapper>
  );
}
