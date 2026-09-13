import { useRef, type PropsWithChildren } from "react";
import { cn } from "../lib/cn";

interface SpotlightCardProps {
  className?: string;
}

/**
 * Card with a red glow that follows the cursor — React Bits-style "spotlight" effect,
 * implemented via a radial-gradient mask driven by CSS custom properties.
 */
export function SpotlightCard({ children, className }: PropsWithChildren<SpotlightCardProps>) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6 transition-colors duration-300 hover:border-[var(--accent-border)]",
        className,
      )}
      style={{ "--spot-x": "50%", "--spot-y": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x) var(--spot-y), var(--accent-glow), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
