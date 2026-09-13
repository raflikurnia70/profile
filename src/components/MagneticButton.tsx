import { motion } from "framer-motion";
import { useRef, useState, type PropsWithChildren } from "react";
import { cn } from "../lib/cn";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

/** Button that gently follows the cursor within its bounds — React Bits-style magnetic interaction. */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
  ariaLabel,
}: PropsWithChildren<MagneticButtonProps>) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
    variant === "primary"
      ? "text-white shadow-[0_8px_24px_var(--accent-glow)] hover:brightness-110"
      : "border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-border)] hover:text-[var(--accent-strong)]",
    className,
  );
  // Set via inline style, not a Tailwind arbitrary background class: Tailwind can't tell
  // a CSS-variable value is a gradient image and would emit it as background-color instead.
  const primaryStyle: React.CSSProperties | undefined =
    variant === "primary" ? { backgroundImage: "var(--gradient-accent)" } : undefined;

  const motionProps = {
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.5 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={base}
        style={primaryStyle}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      className={base}
      style={primaryStyle}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
