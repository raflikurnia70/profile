export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  desc: string;
  highlight?: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "2016 – 2020",
    title: "Teknik Otomasi Industri",
    org: "SMK Negeri 2 Depok Sleman",
    desc: "Fondasi sistem otomasi, kelistrikan industri, instrumentasi, mesin & sistem kontrol, troubleshooting.",
  },
  {
    period: "2019",
    title: "Juara 2 LKS Nasional — Mechatronics",
    org: "Lomba Kompetensi Siswa Tingkat Nasional",
    desc: "Meraih peringkat kedua tingkat nasional pada bidang Mechatronics, sebagai bagian dari tim.",
    highlight: "National Achievement",
  },
  {
    period: "2019",
    title: "Juara 1 Seleksi Nasional IoT",
    org: "ASEAN Skill Competition (ASC) XIII — Kemnaker RI",
    desc: "Bersama Akhmad Satria Daris Jaya, meraih peringkat pertama seleksi nasional calon kompetitor bidang Internet of Things, mengungguli tim lain di seleksi tersebut. Terpilih mewakili Indonesia pada ASC XIII yang dijadwalkan berlangsung di Singapura pada Juli 2020. Dicatat resmi dalam publikasi TMMIN Newsroom.",
    highlight: "National Achievement",
  },
  {
    period: "2019 – 2020",
    title: "D1 Teknik Perbaikan Mesin Otomasi",
    org: "Akademi Komunitas Toyota Indonesia",
    desc: "Memperkuat kemampuan maintenance, mesin industri, otomasi, troubleshooting, dan reliability.",
  },
  {
    period: "Mar 2021 – Sep 2021",
    title: "Production Operator",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Pengalaman langsung pada production process, standardized work, shop-floor discipline, quality & productivity.",
  },
  {
    period: "Okt 2021 – Present",
    title: "Maintenance Specialist",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Preventive maintenance, machine troubleshooting, equipment reliability, maintenance planning — fondasi kombinasi Manufacturing + Maintenance + Technology.",
  },
  {
    period: "2022 – 2026",
    title: "Bachelor of Computer Science",
    org: "BINUS University",
    desc: "Computer Science, software development, data, machine learning, information systems.",
  },
  {
    period: "2025 – Present",
    title: "Staff — Information System & Technology",
    org: "PT Toyota Motor Manufacturing Indonesia",
    desc: "Transisi dari maintenance ke IT: digital application, data, automation, dashboard, industrial integration, dan AI.",
    highlight: "Current Role",
  },
];
