import jsPDF from "jspdf"

export const generateCVPDF = () => {
  const doc = new jsPDF()

  // Set colors for the design
  const primaryColor = [30, 58, 138] // Blue
  const textColor = [33, 33, 33] // Dark gray
  const lightGray = [240, 240, 240]

  let yPosition = 15

  // Header with background
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(0, 0, 210, 35, "F")

  // Title
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.text("MAHASOANIRAINY Jaonarivelo Andriniaina", 15, 20)

  doc.setFontSize(11)
  doc.text("Administrateur Systèmes & Réseaux - Full Stack Developer", 15, 28)

  // Reset for content
  doc.setTextColor(textColor[0], textColor[1], textColor[2])
  yPosition = 40

  // Contact info
  doc.setFontSize(9)
  const contactInfo = [
    "Email: andriniainajohanessa@gmail.com | Tel: +261 34 86 626 83 | WhatsApp: +261 34 86 626 83",
    "Localisation: Andrainjato Fianarantsoa 301, Madagascar | GitHub: github.com/dashboardle",
  ]

  contactInfo.forEach((info) => {
    doc.text(info, 15, yPosition)
    yPosition += 5
  })

  yPosition += 3

  // Section helper
  const addSection = (title: string, content: string[]) => {
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2])
    doc.rect(0, yPosition - 3, 210, 7, "F")

    doc.setFontSize(11)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text(title, 15, yPosition + 2)

    yPosition += 8

    doc.setFont(undefined, "normal")
    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(9)

    content.forEach((line) => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 15
      }
      doc.text(line, 15, yPosition, { maxWidth: 180 })
      yPosition += 4
    })

    yPosition += 3
  }

  // Profil
  addSection("PROFIL", [
    "Administrateur Systèmes et Réseaux passionné par la mise en place, la gestion et la sécurisation des infrastructures informatiques critiques. Expertise en Windows Server, Linux, virtualisation VMware, sécurité réseau avancée et supervision multi-outils. Capable d'assurer le support niveau 3, de gérer des migrations complexes et de piloter des projets IT stratégiques.",
  ])

  // Experience
  addSection("EXPÉRIENCE PROFESSIONNELLE", [
    "Septembre - Décembre 2024 | Stage en Administration Réseau (Spray Info, Fianarantsoa)",
    "• Mise en place du serveur CRM via ODOO 17.0",
    "• Configuration Nginx, PostgreSQL, gestion utilisateurs",
    "• Administration PFSense et Mikrotik (firewall, portail captif, VPN)",
    "• Supervision: EON, Zabbix, Grafana + Prometheus",
    "• Développement applications: Java, C#, PHP, Vue.js, Next.js, React Native",
  ])

  // Skills
  addSection("COMPÉTENCES TECHNIQUES", [
    "Systèmes: Windows Server (2012-2022), Linux (Ubuntu, CentOS, Debian, RedHat)",
    "Virtualisation: VMware vSphere, Hyper-V, Proxmox, VirtualBox",
    "Réseaux: Cisco, Huawei, pfSense, Fortigate, Cisco ASA",
    "Sécurité: Firewall, IDS/IPS, VPN, SSL/TLS, PKI, MFA, Active Directory",
    "Supervision: Zabbix, Nagios, Centreon, Grafana, Prometheus, ELK Stack",
    "Bases de données: MySQL, MariaDB, PostgreSQL, SQL Server",
    "Web: Next.js, React, Vue.js, Express.js, PHP",
    "Mobile: React Native, Expo",
    "Automatisation: PowerShell, Bash, Ansible",
  ])

  // Projects
  addSection("PROJETS RÉALISÉS", [
    "• Supervision avec Zabbix, Grafana + Prometheus",
    "• VPN OpenVPN avec PFSense et Mikrotik",
    "• Téléphonie IP avec Asterisk",
    "• Gestion de billets d'avion (Next.js, Express.js)",
    "• Gestion bancaire (Spring Boot, Next.js, Express.js)",
    "• Applications mobiles (React Native, Expo)",
    "• Mise en place ODOO 17.0 CRM",
  ])

  // Education
  addSection("FORMATION", [
    "2022-2025 | Licence Professionnelle en Informatique (ENI Université de Fianarantsoa)",
    "Mai - Septembre 2024 | Administration Windows Server 2012/2019 (Spray Info)",
    "2020-2021 | Bac Série D (Lycée Manandriana)",
  ])

  // Languages
  addSection("LANGUES", ["Malagasy (Natif) • Français (Courant) • Anglais (Intermédiaire)"])

  // Footer
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text("© 2025 MAHASOANIRAINY Jaonarivelo. Tous droits réservés.", 105, 285, { align: "center" })

  // Download
  doc.save("CV_MAHASOANIRAINY_Jaonarivelo.pdf")
}
