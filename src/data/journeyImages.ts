/**
 * Centralized image map for the Journey/Timeline section.
 *
 * To replace a placeholder with a real photo: drop your file into
 * `public/images/journey/` using the SAME filename listed below, and it
 * updates everywhere automatically — no component changes needed. If you
 * use a different filename or extension, update the path here (one line).
 */
const base = import.meta.env.BASE_URL;

export const journeyImages = {
  education: `${base}images/journey/education.jpg`,
  mechatronics: `${base}images/journey/mechatronics.jpg`,
  iot: `${base}images/journey/iot.jpg`,
  toyotaAcademy: `${base}images/journey/toyota-academy.jpg`,
  production: `${base}images/journey/production.jpg`,
  maintenance: `${base}images/journey/maintenance.jpg`,
  binus: `${base}images/journey/binus.jpg`,
  it: `${base}images/journey/it.jpg`,
} as const;

export type JourneyImageKey = keyof typeof journeyImages;
