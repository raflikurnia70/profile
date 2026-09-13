import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { certifications, education } from "../data/credentials";

export function Credentials() {
  return (
    <SectionWrapper
      id="credentials"
      eyebrow="Credentials"
      title="Education & Certifications"
      description="Fondasi pendidikan vokasi otomasi industri hingga computer science, dilengkapi pelatihan profesional."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                  {edu.period}
                </p>
                <h4 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  {edu.degree}
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">{edu.school}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {edu.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-[var(--bg-3)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            Certifications & Training
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] p-4 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                {cert}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
