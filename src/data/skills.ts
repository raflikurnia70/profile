export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Programming & Backend", items: ["Python", "SQL", "Flask", "Laravel", "REST API"] },
  { category: "Database", items: ["SQL Server", "PostgreSQL", "InfluxDB", "DBeaver", "pyodbc"] },
  { category: "Data", items: ["Pandas", "PyArrow", "Parquet", "Data Pipeline"] },
  { category: "Visualization & BI", items: ["Power BI", "Plotly", "Grafana", "Metabase"] },
  { category: "Machine Learning & AI", items: ["PyTorch", "LSTM", "Anomaly Detection", "Generative AI"] },
  { category: "Industrial IoT", items: ["MQTT", "OPC UA", "Node-RED", "ThingsBoard", "HighByte Intelligence Hub"] },
  { category: "Automation & Platform", items: ["Power Apps", "Power Automate", "SharePoint"] },
  { category: "Infrastructure", items: ["Docker", "WSL", "Windows Server", "Git & GitHub"] },
];

export interface DomainRating {
  domain: string;
  level: number; // 0-5
}

export const domainKnowledge: DomainRating[] = [
  { domain: "Manufacturing", level: 5 },
  { domain: "Maintenance", level: 5 },
  { domain: "Industrial Automation", level: 4 },
  { domain: "Industrial IT", level: 4 },
  { domain: "Data Analytics", level: 4 },
  { domain: "Software Development", level: 4 },
  { domain: "Industrial IoT", level: 4 },
  { domain: "Machine Learning", level: 4 },
  { domain: "Generative AI", level: 3 },
  { domain: "Digital Transformation", level: 4 },
];
