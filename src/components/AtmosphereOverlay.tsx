/**
 * Sitewide atmosphere: a fine technical grid pinned behind content, and a very
 * faint film-grain layer on top — both fixed, non-interactive, and purely
 * textural (kept cheap: static CSS, no per-frame JS).
 */
export function AtmosphereOverlay() {
  return (
    <>
      <div aria-hidden className="bg-technical-grid pointer-events-none fixed inset-0 -z-10" />
      <div aria-hidden className="film-grain pointer-events-none fixed inset-0 z-100" />
    </>
  );
}
