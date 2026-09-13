export interface Education {
  degree: string;
  school: string;
  period: string;
  focus: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "BINUS University",
    period: "2022 – 2026",
    focus: ["Computer Science", "Software Development", "Data", "Machine Learning", "Information Systems"],
  },
  {
    degree: "D1 Teknik Perbaikan Mesin Otomasi",
    school: "Akademi Komunitas Toyota Indonesia",
    period: "2019 – 2020",
    focus: ["Machine Maintenance", "Automation", "Industrial Equipment", "Troubleshooting"],
  },
  {
    degree: "Teknik Otomasi Industri",
    school: "SMK Negeri 2 Depok Sleman",
    period: "2016 – 2020",
    focus: ["Industrial Automation", "Electrical Systems", "Control Systems"],
  },
];

export const certifications: string[] = [
  "Robot Teaching — Kawasaki (industrial robot programming)",
  "Train The Trainers (T3) — Power BI",
  "Database Administration — PostgreSQL / pgAdmin4",
  "Microsoft Power Platform — Power Apps & SharePoint",
  "BNSP — Sertifikasi kompetensi jalur vokasi Toyota",
];
