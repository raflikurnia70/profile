import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../lib/cn";
import { Container } from "./Container";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg-0)]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
          RKN<span className="text-[var(--accent-strong)]">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "text-[var(--accent-strong)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent-strong)] md:hidden"
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
