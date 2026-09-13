import { useState } from "react";
import { cn } from "../lib/cn";

interface CircularPhotoProps {
  src: string;
  alt: string;
  /** Extra ring/glow treatment for standout milestones. */
  achievement?: boolean;
  className?: string;
}

/**
 * Circular milestone photo with a graceful fallback: if the image at `src`
 * fails to load (missing/replaced file), it falls back to an abstract
 * initial-based badge at the same size — never a broken-image icon, never a
 * layout shift.
 */
export function CircularPhoto({ src, alt, achievement, className }: CircularPhotoProps) {
  const [failed, setFailed] = useState(false);
  const initial = alt.trim().charAt(0).toUpperCase() || "•";

  return (
    <div
      className={cn(
        "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border bg-[var(--bg-2)] shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.07] sm:h-20 sm:w-20",
        achievement
          ? "border-[var(--accent-strong)] shadow-[0_0_0_3px_var(--accent-bg),0_4px_20px_var(--accent-glow)]"
          : "border-[var(--border-strong)]",
        className,
      )}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[var(--bg-3)]">
          <span className="label-mono text-sm text-[var(--text-muted)]">{initial}</span>
        </div>
      )}
    </div>
  );
}
