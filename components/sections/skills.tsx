"use client"

import { useState } from "react"

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const skills = [
    {
      category: "Systèmes d'Exploitation",
      icon: "🖥️",
      items: ["Windows Server 2012/2016/2019/2022", "Ubuntu (Server/Desktop)", "CentOS", "Debian"],
    },
    {
      category: "Virtualisation",
      icon: "☁️",
      items: ["VMware", "Hyper-V", "Proxmox", "VirtualBox", "Haute Disponibilité"],
    },
    {
      category: "Administration Active Directory",
      icon: "👥",
      items: ["ADDS, DNS, DHCP", "ADCS, IIS", "remoteApp(RD Web, RD Host, RD Gateway", "GPO Complexes", "Délégation Admin", "Durcissement Kerberos"],
    },
    {
      category: " routeur: MICROTIC et PFSENSE",
      icon: "👥",
      items: ["ferewall", "port forwarding","porteil captif","Vouchers", "VPN"],
    },
    {
      category: "ROUTAGE IP",
      icon: "👥",
      items: ["Configuration Desequipement reseau"],
    },
    
    {
      category: "Sécurité Informatique",
      icon: "🔒",
      items: [
        "Firewall (pfSense/Fortigate/Cisco)",
        "IDS/IPS (Snort/Suricata)",
        "/SSL/TLS",
        "SIEM",
        "Audit de sécurité",
      ],
    },
    {
      category: "Réseaux",
      icon: "🌐",
      items: [
        "Cisco/Mikrotik",
        "VLAN/Inter-VLAN Routing",
        "VPN/ openVPN",
        "OSPF/BGP",
        "QoS/Load Balancing",
        "Wireshark",
      ],
    },
    {
      category: "Supervision & Monitoring",
      icon: "📊",
      items: ["Zabbix", "Nagios/Centreon", "Grafana + Prometheus", "ELK Stack", "PRTG Network Monitor"],
    },
    {
      category: "Stockage & Sauvegarde",
      icon: "💾",
      items: ["SAN/NAS (Dell EMC, HP, Synology)", "Veeam", "Snapshots"],
    },
    {
      category: "Bases de Données",
      icon: "🗂️",
      items: ["MySQL/MariaDB", "PostgreSQL", "SQL Server", "Administration & Optimisation"],
    },
    {
      category: "Développement Web",
      icon: "💻",
      items: ["Next.js", "React", "Express.js","spring boot", "Vue.js", "HTML/CSS/JavaScript", "PHP"],
    },
    {
      category: "Développement Mobile",
      icon: "📱",
      items: ["React Native", "Expo go", "JavaScript", "REST APIs"],
    },
    {
      category: "Développement Bureau",
      icon: "📱",
      items: ["JAVA", "C#", "C++"],
    },
    {
      category: "Automatisation",
      icon: "⚙️",
      items: ["PowerShell Avancé", "Bash/Shell", "Git/GitHub/GitLab"],
    },
    {
      category: "Smartphone android",
      icon: "📋",
      items: ["premier demarrage","configuration","droit d'utilisateur","permission"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Compétences Techniques</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Une expertise complète couvrant l'administration systèmes, la gestion réseau, la sécurité informatique et le
          développement full-stack.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(selectedCategory === skill.category ? null : skill.category)}
              className="bg-card border border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground text-lg">{skill.category}</h3>
                <span className="text-2xl">{skill.icon}</span>
              </div>

              <div
                className={`space-y-2 overflow-hidden transition-all ${selectedCategory === skill.category ? "max-h-96" : "max-h-20"}`}
              >
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {skill.items.length > 3 && (
                <p className="text-xs text-accent mt-3 font-medium">
                  {selectedCategory === skill.category ? "Voir moins" : `+${skill.items.length - 3} compétences`}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
