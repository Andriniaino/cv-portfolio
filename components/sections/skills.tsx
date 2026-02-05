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
      category: "Infrastructures & Systèmes",
      icon: "🖥️",
      items: [
        "Maîtrise des architectures IT : serveurs, réseaux, systèmes d’exploitation, bases de données, applications et sécurité",
        "Standardisation, documentation et optimisation des infrastructures IT",
        "Planification et évolution du parc informatique",
        "Veille technologique continue orientée infrastructures et cybersécurité",
        "Gestion des services systèmes, journalisation et scripts de maintenance"
      ]
    },
    {
      category: "Systèmes & Réseaux",
      icon: "🖧",
      items: [
        "Administration avancée Windows Server et Linux",
        "Gestion des environnements virtualisés (VMware, Hyper-V, Proxmox)",
        "Administration des bases de données PostgreSQL, MySQL et SQL Server (exploitation, sauvegarde, supervision)",
        "Administration Active Directory : utilisateurs, groupes, GPO et délégation",
        "Administration Microsoft 365 (Exchange Online, Teams, SharePoint, Entra ID)",
        "Gestion des réseaux LAN, WAN, Wi-Fi et VPN",
        "Administration des solutions de sécurité : firewall, antivirus, EDR",
        "Mise en place et suivi des sauvegardes et restaurations",
        "Supervision de la disponibilité, performance et sécurité des systèmes"
      ]
    },
    {
      category: "Systèmes d’Exploitation",
      icon: "🖥️",
      items: [
        "Windows Server 2012/2016/2019/2022 (AD, DNS, DHCP)",
        "Administration Windows 10 / 11",
        "Linux Ubuntu, Debian, CentOS (Server & Desktop)",
        "Gestion des services, logs et automatisation des tâches"
      ]
    },
    {
      category: "Virtualisation & Infrastructure",
      icon: "☁️",
      items: [
        "VMware, Hyper-V, Proxmox, VirtualBox",
        "Création, gestion et supervision des machines virtuelles",
        "Templates, optimisation des ressources",
        "Notions de haute disponibilité, basculement et dimensionnement"
      ]
    },
    {
      category: "Active Directory & Services d’Infrastructure",
      icon: "👥",
      items: [
        "AD DS, DNS, DHCP, DFS",
        "AD CS, IIS, gestion des certificats",
        "Services Remote Desktop (RD Web, RD Host, RD Gateway)",
        "GPO avancées, délégation d’administration et durcissement de la sécurité"
      ]
    },
    {
      category: "Réseaux & Routage IP",
      icon: "🌐",
      items: [
        "Configuration d’équipements réseau Cisco et Mikrotik",
        "VLAN, inter-VLAN, routage statique et dynamique",
        "VPN IPsec et OpenVPN, QoS et Load Balancing",
        "Notions OSPF et analyse de trafic avec Wireshark"
      ]
    },
    {
      category: "Sécurité Informatique",
      icon: "🔒",
      items: [
        "Firewalls pfSense, Fortigate, Cisco ASA",
        "Filtrage, NAT, port forwarding, portail captif",
        "IDS/IPS (Snort, Suricata), SSL/TLS",
        "Audit de sécurité, durcissement systèmes et réseaux, notions SIEM"
      ]
    },
    {
      category: "Supervision & Monitoring",
      icon: "📊",
      items: [
        "Zabbix : hôtes, items, triggers et templates",
        "Nagios, Centreon",
        "Grafana et Prometheus",
        "ELK Stack et PRTG Network Monitor"
      ]
    },
    {
      category: "Stockage & Sauvegarde",
      icon: "💾",
      items: [
        "SAN,NAS Claud",
        "Veeam Backup & Replication",
        "Plans de sauvegarde, restauration et tests"
      ]
    },
    {
      category: "Bases de Données",
      icon: "🗂️",
      items: [
        "MySQL / MariaDB, PostgreSQL, SQL Server",
        "Installation, administration et sauvegarde",
        "Requêtes SQL et optimisations de base"
      ]
    },
    {
      category: "Développement Web & APIs",
      icon: "💻",
      items: [
        "React, Next.js, Vue.js",
        "Node.js (Express), Spring Boot",
        "HTML, CSS, JavaScript, PHP, Laravel",
        "Conception et intégration d’API REST"
      ]
    },
    {
      category: "Développement Mobile & Desktop",
      icon: "📱",
      items: [
        "React Native, Expo",
        "Java, C#, C++ (applications desktop)",
        "Consommation et intégration d’API REST"
      ]
    },
    {
      category: "Automatisation & Outils",
      icon: "⚙️",
      items: [
        "PowerShell avancé (Active Directory, Windows Server)",
        "Bash / Shell scripting sous Linux",
        "Git, GitHub, GitLab (versioning et CI/CD basique)"
      ]
    },
    {
      category: "Gestion du Parc & Support IT",
      icon: "💻",
      items: [
        "Gestion du parc informatique (PC, laptops, imprimantes, équipements réseau)",
        "Installation, configuration et maintenance des postes utilisateurs",
        "Support utilisateur niveau 1 et 2",
        "Gestion des droits, permissions et accompagnement utilisateurs"
      ]
    },
    {
      category: "Management & Pilotage IT",
      icon: "👥",
      items: [
        "Coordination et encadrement d’équipe IT",
        "Répartition des tâches et priorisation",
        "Suivi des actions et reporting",
        "Communication efficace avec les utilisateurs et la direction"
      ]
    }
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
