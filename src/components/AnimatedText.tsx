import { motion } from "framer-motion";
import { cn } from "../lib/cn";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  wordDelay?: number;
}

/**
 * Word-by-word blur/fade reveal — a React Bits-style text animation,
 * implemented locally with Framer Motion.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "span",
  wordDelay = 0.06,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.span;

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: delay + i * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
