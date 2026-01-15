"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const experiences = [
    {
      period: "Septembre - Décembre 2025",
      title: "Stage en Administration Réseau",
      company: "Zomatel Hôtel, Anjoma Fianarantsoa 301",
      description: "Mise en place de Windows Server Datacenter 2024 avec détection automatique des alertes en cas de panne via Zabbix, déploiement de Starlink V7",
      highlights: [
        "Installation de Windows Server Datacenter 2024 au sein de Zomatel Hôtel",
        "Configuration et mise en place des rôles Active Directory, DNS, DHCP et ADCS",
        "Configuration et déploiement de RemoteApp (RD Web, RD Gateway, RD Session Host)",
        "Gestion et administration des espaces de stockage des utilisateurs",
        "Création et gestion des comptes utilisateurs et des groupes de sécurité",
        "Mise en place des stratégies de groupe (GPO) pour la gestion centralisée",
        "Configuration des sauvegardes et plan de restauration",
        "Sécurisation du serveur et des services (pare-feu, certificats, mises à jour)",
    
        "INSTALLATION ET CONFIGURATION DE ZABBIX",
        "Configuration du serveur web (Nginx) et de la base de données (PostgreSQL)",
        "Configuration des hôtes, items et triggers",
        "Installation et configuration des agents Zabbix sur les appareils et services à surveiller",
        "Configuration des alertes automatiques par e-mail et envoi aux administrateurs en cas de panne",
        
        "MISE EN PLACE DE STARLINK V7 au sein de ZOMATEL HOTEL",
        "Installation et configuration des points d’accès (AP) dans tous les bâtiments disponibles",
        "Sécurisation de la connexion avec CGNAT et mise en place de pare-feu",
        "Remplacement des câbles réseau défectueux et optimisation du câblage des postes de travail",
        "Configuration du réseau local (LAN) et du Wi-Fi pour les clients et le personnel",
        "Mise en place de la segmentation réseau (VLAN) pour séparer les services (administration, invités, IoT)",
        "Gestion des adresses IP et plan d’adressage adapté",
        "Mise en place de la supervision du réseau et suivi de la bande passante",
        "Configuration des sauvegardes et plan de continuité en cas de panne"
      ]
    },
    

   

    {
      period: "Septembre - Décembre 2024",
      title: "Stage en Administration Réseau",
      company: "Spray Info batiment santatra, imandry Fianarantsoa 301",
      description: "Mise en place du serveur CRM via ODOO 17.0 avec configuration complète de l'infrastructure",
      highlights: [
        "Installation et configuration Odoo 17 CRM",
        "Configuration serveur web (Nginx), base de données (PostgreSQL)",
        "Gestion des opportunités",
        "Ajout de clients et d'utilisateurs",
        "Gestion des activités et des devis",
        "Suivi des gains et des pertes de ventes",
        "Création de ventes commerciales",
        "Rapports et analyses en temps réel",
        "Utilisation du pipeline de ventes",
        "Envoyer mail et gérer le facturation, impression du bon de commande",
      ],
    },
    {
      period: "",
      title: "Administration des Systèmes",
      company: "Multiples Environnements",
      description: "Gestion complète d'infrastructures informatiques critiques",
      highlights: [
        "Installation et configuration Windows Server 2012/2016/2019/2022",
        "Administration avancée Linux (Ubuntu, Debian, CentOS)",
        "Gestion des comptes utilisateurs, politiques de sécurité et permissions",
        "Mise en place et optimisation des services (DNS, DHCP, IIS,ADDS,red web, Apache, Samba)",
        "Gestion et sécurisation des serveurs critiques(ADCS)",
        "Virtualisation multi-hyperviseurs (VMware, Hyper-V, VirtualBox)",
      ],
    },
    {
      period: "",
      title: "Gestion et Supervision des Infrastructures Réseau",
      company: "Environnements Multi-sites",
      description: "Conception et gestion des réseaux LAN/WAN complexes",
      highlights: [
        "Configuration de switches, routeurs et firewalls (Cisco, PFsense, Mikrotik)",
        "Mise en place de VLAN, routage avancé, VPN site-to-site et VPN utilisateur",
        "Monitoring réseau et supervision via Zabbix, Centreon, Nagios",
        "Analyse et résolution des incidents réseau complexes",
        "Conception et optimisation d'architectures LAN/WAN/WiFi",
        "Gestion des migrations complexes et haute disponibilité",
      ],
    },
    {
      period: "novembre - decembre 2025",
      title: " Configuration des smartphone Android",
      company: "Prestataire de PIvot Ranomafana Ifanadina",
      description: "on utilise le script bash",
      highlights: [
        "Configuration de smartphone android 820 pour apliquer le Agent Communautaire de Nosy varika ",
        "identifient des smartphones",
        "check IMEIL a chaque smartphones",
        "premier demarrages des smartphones",
        "installation des applications dans le script bash, comme commCaire",
        "insertions des carte SIM et config de APN",
        "droit, permission d'utilisateur",
        "blocages des services comme cammera, bloutoofth",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Expérience Professionnelle</h2>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium w-fit">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${expanded === idx ? "rotate-180" : ""
                    }`}
                />
              </button>

              {expanded === idx && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Responsabilités & Réalisations:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
