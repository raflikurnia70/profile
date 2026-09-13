import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CircularPhoto } from "../components/CircularPhoto";
import { SectionWrapper } from "../components/SectionWrapper";
import { journeyImages } from "../data/journeyImages";
import { timeline } from "../data/timeline";
import { cn } from "../lib/cn";

const EVOLUTION_STAGES = [
  "Automation",
  "Manufacturing",
  "Maintenance",
  "Computer Science",
  "IT",
  "Data",
  "AI",
  "Digital Transformation",
];

const FUTURE_STAGES = [
  "Digital Transformation",
  "Technology Leadership",
  "Industrial AI",
  "Entrepreneurship",
];

/** Compact progression strip — e.g. Automation → Manufacturing → ... → Digital Transformation. */
function EvolutionStrip({ stages, className }: { stages: string[]; className?: string }) {
  return (
    <div
      className={cn(
        "label-mono flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[10px] text-[var(--text-muted)]",
        className,
      )}
    >
      {stages.map((stage, i) => (
        <span key={stage} className="flex items-center gap-2.5">
          <span className={i === stages.length - 1 ? "text-[var(--accent-strong)]" : undefined}>
            {stage}
          </span>
          {i < stages.length - 1 && (
            <span aria-hidden className="text-[var(--border-strong)]">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

/**
 * Career & education journey — a technical spine running through circular
 * milestone photos, framed as one continuous evolution rather than a CV list.
 * The connector line draws progressively as the section scrolls into view.
 */
export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper
      id="timeline"
      eyebrow="Journey"
      title="From the Shop Floor to Digital Transformation"
      description="Dimulai dari memahami bagaimana mesin bekerja, kemudian berkembang menjadi bagaimana data dan teknologi dapat membuat operasi menjadi lebih cerdas — bukan perpindahan karier yang random, melainkan evolusi dari pengalaman industrial menuju technology."
      alt
    >
      <div className="mb-14 border-y border-[var(--border)] py-6">
        <EvolutionStrip stages={EVOLUTION_STAGES} />
      </div>

      <div ref={containerRef} className="relative">
        {/* Base line + progressive draw, both aligned to the circular photos' center */}
        <div className="absolute left-7 top-1 bottom-1 w-px bg-[var(--border)] sm:left-10" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-7 top-1 bottom-1 w-px origin-top bg-[var(--accent-strong)] sm:left-10"
        />

        <div className="space-y-14 sm:space-y-16">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="relative flex gap-5 sm:gap-7"
            >
              <div className="relative z-10 shrink-0">
                <CircularPhoto
                  src={journeyImages[item.image]}
                  alt={item.title}
                  achievement={item.achievement}
                />
              </div>

              <div className="min-w-0 flex-1 pt-0.5 sm:pt-2">
                <p className="label-mono text-[10px] text-[var(--text-muted)]">
                  {item.period} · {item.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-snug text-[var(--text-primary)] sm:text-lg">
                  {item.title}
                </h3>
                <p className="label-mono mt-1 text-[10.5px] text-[var(--accent-strong)]">
                  {item.org}
                </p>
                <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.desc}
                </p>

                {item.skills && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {item.achievement && (
                  <span className="label-mono mt-3 inline-block border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 py-1 text-[10px] text-[var(--accent-strong)]">
                    Achievement
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing — future direction, framed as ambition, not an accomplished claim */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-20 border-t border-[var(--border)] pt-12 text-center"
      >
        <p className="label-mono text-[11px] text-[var(--accent-strong)]">The Journey Continues</p>
        <div className="mt-5">
          <EvolutionStrip stages={FUTURE_STAGES} />
        </div>
        <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-snug text-[var(--text-primary)] md:text-xl">
          "From understanding machines to building the intelligence around them."
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
