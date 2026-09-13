import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { domainKnowledge, skillGroups } from "../data/skills";

const RADIUS = 42; // percent, from center

function nodeAngle(i: number, total: number) {
  return (i / total) * 2 * Math.PI - Math.PI / 2;
}

function nodePosition(i: number, total: number) {
  const angle = nodeAngle(i, total);
  return {
    left: `${50 + RADIUS * Math.cos(angle)}%`,
    top: `${50 + RADIUS * Math.sin(angle)}%`,
  };
}

/** Radial "technology ecosystem" — Digital Transformation at the center, surrounded by
 * the same skill categories as before, connected by thin animated lines.
 *
 * One `useInView` call drives every child's `animate` state directly (rather than
 * relying on Framer Motion variant propagation through nested plain elements, which
 * proved unreliable here). Positioning and entrance-animation are also kept on
 * separate elements: the outer wrapper (plain CSS) centers the node on its point via
 * translate(-50%,-50%), while the inner motion.div only animates scale/opacity — put
 * both on one element and the animated transform would clobber the centering. */
function EcosystemDiagram() {
  const total = skillGroups.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <div ref={containerRef} className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        {skillGroups.map((_, i) => {
          const angle = nodeAngle(i, total);
          const x = 50 + RADIUS * Math.cos(angle);
          const y = 50 + RADIUS * Math.sin(angle);
          return (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="var(--border-strong)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.06 }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-[var(--accent-border)] bg-[var(--bg-2)] text-center sm:h-32 sm:w-32"
        style={{ left: "50%", top: "50%" }}
      >
        <span className="label-mono text-[9px] text-[var(--accent-strong)]">Core</span>
        <span className="mt-1 px-2 text-xs font-semibold leading-tight text-[var(--text-primary)] sm:text-sm">
          Digital
          <br />
          Transformation
        </span>
      </div>

      {/* Satellite nodes — outer div centers via CSS transform, inner motion.div animates scale/opacity */}
      {skillGroups.map((group, i) => {
        const pos = nodePosition(i, total);
        return (
          <div
            key={group.category}
            className="absolute w-24 -translate-x-1/2 -translate-y-1/2 sm:w-28"
            style={pos}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="border border-[var(--border)] bg-[var(--bg-1)] px-2 py-2 text-center"
            >
              <p className="label-mono text-[8.5px] leading-tight text-[var(--text-primary)] sm:text-[9px]">
                {group.category}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="Technology Ecosystem"
      description="Digital Transformation berada di pusat — dihubungkan dengan kemampuan software, data, AI, dan industrial IoT yang dibangun dari kebutuhan operasional nyata."
    >
      <EcosystemDiagram />

      {/* Reference index — same category/skill data, kept fully readable below the diagram */}
      <div className="mt-16 grid gap-x-8 gap-y-6 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="label-mono text-[10px] text-[var(--text-muted)]">{group.category}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-[var(--border)] bg-[var(--bg-2)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-[var(--border)] pt-10">
        <p className="label-mono mb-6 text-[10px] text-[var(--text-muted)]">Domain Proficiency</p>
        <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
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
                <span className="label-mono text-[10px] text-[var(--text-muted)]">
                  {d.level}/5
                </span>
              </div>
              <div className="h-[3px] w-full bg-[var(--bg-3)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.level / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
                  className="h-full bg-[var(--accent-strong)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
