export interface Project {
  title: string;
  period?: string;
  summary: string;
  details: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Preventive Maintenance Digitalization",
    summary:
      "Digitalisasi proses preventive maintenance dari scheduling manual menjadi sistem terintegrasi Power Apps → SharePoint → SQL Server → Dashboard.",
    details: [
      "Maintenance scheduling & periodical maintenance logic (weekday/weekend)",
      "Backend & application layer untuk job scheduling",
      "Integrasi database & workflow automation",
      "Alur: Business Process → Application → Database → Automation → Visualization",
    ],
    tags: ["Power Apps", "SharePoint", "SQL Server", "Dashboard"],
  },
  {
    title: "Painting Booth Condition Monitoring",
    summary:
      "Monitoring parameter kritis painting booth untuk menjaga kualitas proses dan mencegah defect.",
    details: [
      "Parameter: dew point, humidity, temperature, washer temperature, chiller pressure",
      "Batas operasional acuan: Humidity 68–79%, Temperature 26–28°C",
      "Menghubungkan Machine Data → Process Condition → Quality → Business Impact",
    ],
    tags: ["Monitoring", "Process Quality", "Manufacturing"],
  },
  {
    title: "Industrial IoT & System Integration",
    summary:
      "Membangun ekosistem integrasi data industrial dari PLC/mesin hingga dashboard & analytics menggunakan HighByte Intelligence Hub.",
    details: [
      "Protokol: OPC UA, MQTT — tooling: Node-RED, ThingsBoard, UAExpert, OPC UA Device Xplorer",
      "Data ingestion, connector, data transformation di HighByte Intelligence Hub",
      "Menangani upgrade versi 4.2.1 → eksplorasi 4.4.0 & troubleshooting Java heap/memory",
      "Arsitektur: Machine/PLC → Protocol → Integration Layer → Database/Broker → Application → Dashboard/AI",
    ],
    tags: ["OPC UA", "MQTT", "HighByte", "Node-RED", "ThingsBoard"],
  },
  {
    title: "LSTM Autoencoder — Predictive Maintenance Research",
    period: "Thesis & Research",
    summary:
      "Prediksi kerusakan mesin industri berbasis unsupervised anomaly detection pada data time-series arus motor industrial (interval ~250ms).",
    details: [
      "Arsitektur: Input Time-Series → Encoder LSTM → Latent Representation → Decoder LSTM → Reconstruction Error → Anomaly Score",
      "Konfigurasi: PyTorch, hidden size 64, latent dim 32, Adam (lr 0.001), batch size 64, early stopping patience 8",
      "Feature engineering: EWMA current, delta current, RMS current, spike ratio, program context",
      "Evaluasi: MSE, MAE, RMSE — MSE sebagai indikator utama anomaly score",
    ],
    tags: ["PyTorch", "LSTM", "Anomaly Detection", "Time-Series"],
  },
];
