import type { PropsWithChildren } from "react";
import { cn } from "../lib/cn";

export function GradientText({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <span className={cn("text-gradient-accent", className)}>{children}</span>;
}
