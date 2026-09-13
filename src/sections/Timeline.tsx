import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { timeline } from "../data/timeline";
import { cn } from "../lib/cn";

export function Timeline() {
  return (
    <SectionWrapper
      id="timeline"
      eyebrow="Journey"
      title="Career & Education Timeline"
      description="Perjalanan dari pendidikan vokasi otomasi industri hingga menjadi profesional IT & Digital Transformation."
      alt
    >
      <div className="relative border-l border-[var(--border)] pl-8">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title + item.period}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className={cn(
                "absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2",
                item.highlight
                  ? "border-[var(--accent-strong)] bg-[var(--accent-strong)] shadow-[0_0_12px_var(--accent-glow)]"
                  : "border-[var(--border-strong)] bg-[var(--bg-1)]",
              )}
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <p className="text-sm font-medium text-[var(--accent-strong)]">{item.org}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.desc}
            </p>
            {item.highlight && (
              <span className="mt-3 inline-block rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                {item.highlight}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
