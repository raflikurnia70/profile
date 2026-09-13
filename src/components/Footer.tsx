import { profile } from "../data/profile";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{profile.name}</p>
          <p className="mt-1 max-w-md text-xs text-[var(--text-muted)]">{profile.valueProposition}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-strong)]"
          >
            <svg className="h-5 w-5" aria-hidden="true">
              <use href="/icons.svg#mail-icon" />
            </svg>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-strong)]"
          >
            <svg className="h-5 w-5" aria-hidden="true">
              <use href="/icons.svg#github-icon" />
            </svg>
          </a>
        </div>
      </Container>
      <p className="mt-8 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js & Framer Motion.
      </p>
    </footer>
  );
}
