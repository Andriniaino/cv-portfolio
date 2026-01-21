"use client"

import { useState } from "react"

type SkillCategory = {
  category: string
  icon: string
  items: string[]
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const skills: SkillCategory[] = [
    {
      category: "Systèmes d'Exploitation",
      icon: "🖥️",
      items: [
        "Windows Server 2012/2016/2019/2022 (AD, DNS, DHCP)",
        "Windows 10/11 Administration",
        "Ubuntu / Debian / CentOS (Server & Desktop)",
        "Gestion des services, journalisation, scripts de maintenance",
      ],
    },
    {
      category: "Virtualisation & Infrastructure",
      icon: "☁️",
      items: [
        "VMware, Hyper-V, Proxmox, VirtualBox",
        "Création et gestion de VM, templates, snapshots",
        "Haute Disponibilité et basculement",
        "Bases de la consolidation et dimensionnement d'infra",
      ],
    },
    {
      category: "Active Directory & Services d’Infrastructure",
      icon: "👥",
      items: [
        "ADDS, DNS, DHCP, DFS",
        "ADCS, IIS, gestion des certificats",
        "RemoteApp (RD Web, RD Host, RD Gateway)",
        "GPO avancées, délégation d'administration, durcissement Kerberos",
      ],
    },
    {
      category: "Réseaux & Routage IP",
      icon: "🌐",
      items: [
        "Cisco / Mikrotik : configuration d’équipements réseau",
        "VLAN / Inter-VLAN, routage statique et dynamique",
        "VPN (IPsec, OpenVPN), QoS / Load Balancing",
        "OSPF / BGP, analyse de trafic avec Wireshark",
      ],
    },
    {
      category: "Sécurité Informatique",
      icon: "🔒",
      items: [
        "Firewalls (pfSense, Fortigate, Cisco ASA)",
        "Règles de filtrage, NAT, port forwarding, portail captif, vouchers",
        "IDS/IPS (Snort / Suricata), SSL/TLS",
        "Audit de sécurité, durcissement systèmes et réseaux, notions de SIEM",
      ],
    },
    {
      category: "Supervision & Monitoring",
      icon: "📊",
      items: [
        "Zabbix (hôtes, items, triggers, templates)",
        "Nagios / Centreon",
        "Grafana + Prometheus",
        "ELK Stack, PRTG Network Monitor",
      ],
    },
    {
      category: "Stockage & Sauvegarde",
      icon: "💾",
      items: [
        "SAN / NAS (Dell EMC, HP, Synology)",
        "Veeam Backup & Replication",
        "Snapshots, plan de sauvegarde et restauration",
        "Notions de PRA/PCA",
      ],
    },
    {
      category: "Bases de Données",
      icon: "🗂️",
      items: [
        "MySQL / MariaDB, PostgreSQL, SQL Server",
        "Installation, sauvegarde/restauration",
        "Requêtes SQL de base et optimisation simple",
      ],
    },
    {
      category: "Développement Web & APIs",
      icon: "💻",
      items: [
        "Next.js, React, Vue.js, Express.js, Spring Boot",
        "HTML / CSS / JavaScript",
        "PHP (base), REST APIs",
        "Intégration front/back pour outils d’admin",
      ],
    },
    {
      category: "Développement Mobile & Bureau",
      icon: "📱",
      items: [
        "React Native, Expo Go",
        "Java, C#, C++ (applications desktop)",
        "Consommation d’APIs REST",
      ],
    },
    {
      category: "Automatisation & Outils",
      icon: "⚙️",
      items: [
        "PowerShell avancé (AD, Windows Server)",
        "Bash / Shell pour Linux",
        "Git / GitHub / GitLab (versionning, CI/CD basique)",
      ],
    },
    {
      category: "Support & Mobilité",
      icon: "📋",
      items: [
        "Smartphone Android : premier démarrage, configuration",
        "Gestion des permissions et droits utilisateurs",
        "Support utilisateur et accompagnement",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Compétences Techniques
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Une expertise complète couvrant l'administration systèmes, la gestion
          réseau, la sécurité informatique et le développement full-stack.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === skill.category ? null : skill.category,
                )
              }
              className="bg-card border border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground text-lg">
                  {skill.category}
                </h3>
                <span className="text-2xl">{skill.icon}</span>
              </div>

              <div
                className={`space-y-2 overflow-hidden transition-all ${
                  selectedCategory === skill.category ? "max-h-96" : "max-h-20"
                }`}
              >
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {skill.items.length > 3 && (
                <p className="text-xs text-accent mt-3 font-medium">
                  {selectedCategory === skill.category
                    ? "Voir moins"
                    : `+${skill.items.length - 3} compétences`}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
