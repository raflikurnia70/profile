import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "../lib/cn";
import { Container } from "./Container";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  alt?: boolean;
}

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className,
  alt = false,
  children,
}: PropsWithChildren<SectionWrapperProps>) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 md:py-32", alt && "bg-[var(--bg-1)]", className)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}
