import type { JourneyImageKey } from "./journeyImages";

export type MilestoneCategory = "EDUCATION" | "CAREER" | "ACHIEVEMENT";

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  desc: string;
  category: MilestoneCategory;
  image: JourneyImageKey;
  skills?: string[];
  /** Extra visual emphasis for standout, externally-validated achievements. */
  achievement?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    period: "2016 – 2020",
    title: "Teknik Otomasi Industri",
    org: "SMK Negeri 2 Depok Sleman",
    desc: "Fondasi industrial automation, electrical systems, instrumentation, industrial machinery, control systems, dan troubleshooting.",
    category: "EDUCATION",
    image: "education",
    skills: ["Industrial Automation", "Electrical Systems", "Instrumentation", "Control Systems"],
  },
  {
    period: "2019",
    title: "Peringkat 2 LKS Nasional — Mechatronics",
    org: "Lomba Kompetensi Siswa Tingkat Nasional",
    desc: "Mewakili DI Yogyakarta / SMKN 2 Depok dalam bidang Mechatronics dan meraih peringkat 2 tingkat nasional sebagai bagian dari tim.",
    category: "ACHIEVEMENT",
    image: "mechatronics",
    achievement: true,
  },
  {
    period: "2019",
    title:
      "Peringkat 1 Seleksi Nasional Calon Kompetitor ASEAN Skill Competition XIII — Internet of Things (IoT)",
    org: "Kementerian Ketenagakerjaan RI",
    desc: "Bersama Akhmad Satria Daris Jaya, meraih peringkat 1 seleksi nasional calon kompetitor ASEAN Skill Competition XIII bidang Internet of Things (IoT). Dicatat resmi dalam publikasi PT Toyota Motor Manufacturing Indonesia sebagai external validation.",
    category: "ACHIEVEMENT",
    image: "iot",
    achievement: true,
  },
  {
    period: "2019 – 2020",
    title: "D1 Teknik Perbaikan Mesin Otomasi",
    org: "Akademi Komunitas Toyota Indonesia",
    desc: "Memperkuat kemampuan maintenance, industrial machinery, automation, troubleshooting, reliability, dan manufacturing.",
    category: "EDUCATION",
    image: "toyotaAcademy",
    skills: ["Maintenance", "Industrial Machinery", "Automation", "Reliability"],
  },
  {
    period: "Maret 2021 – September 2021",
    title: "Production Operator",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Pengalaman langsung di production environment: production process, standardized work, shop-floor discipline, quality, dan productivity.",
    category: "CAREER",
    image: "production",
    skills: ["Production Process", "Standardized Work", "Quality", "Productivity"],
  },
  {
    period: "Oktober 2021 – Sekarang",
    title: "Maintenance Specialist",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Fokus pada preventive maintenance, machine troubleshooting, equipment reliability, maintenance planning, machine condition, dan operational problem solving.",
    category: "CAREER",
    image: "maintenance",
    skills: ["Preventive Maintenance", "Troubleshooting", "Equipment Reliability"],
  },
  {
    period: "2022 – 2026",
    title: "Bachelor of Computer Science",
    org: "BINUS University",
    desc: "Fokus pada computer science, software development, data, machine learning, dan information systems.",
    category: "EDUCATION",
    image: "binus",
    skills: ["Computer Science", "Software Development", "Machine Learning"],
  },
  {
    period: "2025 – Sekarang",
    title: "Staff — Information System & Technology",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Transisi dari maintenance menuju IT. Fokus pada digital application, data, automation, dashboard, industrial integration, industrial IoT, AI/machine learning, dan generative AI.",
    category: "CAREER",
    image: "it",
    skills: ["Digital Application", "Data & Automation", "Industrial IoT", "AI / Machine Learning"],
  },
];
