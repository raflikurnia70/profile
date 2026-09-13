import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { SpotlightCard } from "../components/SpotlightCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Featured Projects & Research"
      description="Proyek yang menghubungkan business process, aplikasi, database, automation, hingga machine learning."
      alt
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <SpotlightCard key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {project.period && (
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                  {project.period}
                </span>
              )}
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </SpotlightCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
