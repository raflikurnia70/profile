import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { SpotlightCard } from "../components/SpotlightCard";
import { domainKnowledge, skillGroups } from "../data/skills";

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="Technical Skills & Domain Knowledge"
      description="Kombinasi kemampuan software, data, AI, dan industrial IoT yang dibangun dari kebutuhan operasional nyata."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <SpotlightCard key={group.category}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-3)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Domain Knowledge
        </h3>
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {domainKnowledge.map((d, i) => (
            <motion.div
              key={d.domain}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-[var(--text-primary)]">{d.domain}</span>
                <span className="text-[var(--text-muted)]">{d.level}/5</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-3)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.level / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
                  className="h-full rounded-full bg-[var(--gradient-accent)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
