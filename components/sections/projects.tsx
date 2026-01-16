"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Supervision Zabbix + Grafana",
      category: "Infrastructure",
      description:
        "Mise en place d'une solution de supervision complète avec Zabbix et Grafana pour la surveillance des serveurs et équipements réseau.",
      details: [
        "Zabbix: supervision complète serveurs/services/applications/équipements réseau",
        "Grafana: création de dashboards interactifs",
        "Prometheus: collecte de métriques et alertes",
        "PostgreSQL: base de données",
        "Nginx: serveur web",
        "Alertes automatiques par mail et SMS",
        "Surveillance RAM, CPU, DISQUE DUR en temps réel",
      ],
      technologies: ["Zabbix", "Grafana", "Prometheus", "PostgreSQL", "Nginx"],
      status: "Complété",
    },
    {
      title: "Infrastructure VPN & Firewall",
      category: "Sécurité Réseau",
      description:
        "Configuration et déploiement d'une infrastructure VPN sécurisée avec PFSense et Mikrotik pour les connexions distantes.",
      details: [
        "OpenVPN: serveur VPN haute sécurité",
        "PFSense: firewall avancé avec portail captif",
        "Mikrotik: gestion du trafic et port forwarding",
        "Configuration de zones DMZ",
        "Blocage de sites et contrôle d'accès",
        "VPN Site-to-Site et Remote Access",
        "Protection DoS et règles de sécurité",
      ],
      technologies: ["OpenVPN", "PFSense", "Mikrotik", "Firewall", "VPN"],
      status: "Complété",
    },
    {
      title: "Téléphonie IP Asterisk",
      category: "Télécommunications",
      description:
        "Mise en place complète d'un système de téléphonie IP professionnel avec Asterisk et gestion de la facturation.",
      details: [
        "Asterisk: serveur VoIP",
        "A2billing: facturation et CDR",
        "PostgreSQL: base de données",
        "Nginx: serveur web",
        "Gestion des appels et intégration messagerie",
        "Facturation automatique",
        "Enregistrement des appels",
        "Réseau sécurisé avec a2billing",
      ],
      technologies: ["Asterisk", "A2billing", "PostgreSQL", "Nginx", "VoIP"],
      status: "Complété",
    },
    {
      title: "ODOO CRM 17.0",
      category: "Développement",
      description:
        "Mise en place et configuration d'une plateforme CRM ODOO 17 pour la gestion intégrée des ventes et de la facturation.",
      details: [
        "Installation et configuration Odoo 17 CRM",
        "Configuration serveur (Nginx, PostgreSQL)",
        "Gestion des utilisateurs et permissions",
        "Module Ventes et Facturation",
        "Rapports automatisés",
        "Dashboards personnalisés",
        "Intégration réseau sécurisée",
      ],
      technologies: ["ODOO 17", "PostgreSQL", "Nginx", "Python"],
      status: "En production",
    },
    {
      title: "Gestion de Billets d'Avion",
      category: "Développement Web",
      description:
        "Application web de gestion de billets d'avion avec interface utilisateur respectant les normes d'IHM.",
      details: [
        "Frontend: Next.js avec interface moderne",
        "Backend: Express.js pour les APIs",
        "Base de données pour les réservations",
        "Paiement intégré",
        "Notifications par email",
        "Dashboard pour les administrateurs",
        "Normes d'IHM professionnelles",
      ],
      technologies: ["Next.js", "Express.js", "React", "Node.js", "MongoDB"],
      status: "Complété",
    },
    {
      title: "Gestion Bancaire Multi-stack",
      category: "Développement Web",
      description:
        "Application de gestion bancaire développée avec plusieurs stacks technologiques pour la robustesse et l'apprentissage.",
      details: [
        "Version Spring Boot avec architecture microservices",
        "Version Next.js/Express.js pour une approche moderne",
        "Gestion des comptes et transactions",
        "Sécurité renforcée (authentification, chiffrement)",
        "APIs RESTful complètes",
        "Dashboard analytique",
        "Rapports de transactions",
      ],
      technologies: ["Spring Boot", "Next.js", "Express.js", "PostgreSQL", "React"],
      status: "Complété",
    },
    {
      title: "Application Mobile: Suivi d'Objectifs",
      category: "Développement Mobile",
      description:
        "Application mobile cross-platform pour le suivi des objectifs personnels avec graphes dynamiques et données chiffrées.",
      details: [
        "Développement React Native avec Expo",
        "Backend Express.js",
        "Graphes dynamiques en temps réel",
        "Stockage local et synchronisation cloud",
        "Interface intuitive et responsive",
        "Notifications push",
        "Exportation des données",
      ],
      technologies: ["React Native", "Expo", "Express.js", "Firebase", "Node.js"],
      status: "Complété",
      github: "https://github.com",
    },
    {
      title: "Analyseur de Document Administratif",
      category: "Développement Mobile",
      description:
        "Application mobile pour scanner et analyser automatiquement les documents d'identité avec reconnaissance OCR.",
      details: [
        "React Native avec capacités caméra",
        "OCR pour extraction de données",
        "Remplissage automatique de formulaires",
        "Validation des données",
        "Express.js backend",
        "Chiffrement des données sensibles",
        "Sauvegarde sécurisée",
      ],
      technologies: ["React Native", "Express.js", "OCR", "Node.js"],
      status: "Complété",
      github: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projets Réalisés</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Découvrez une sélection de mes projets profesionnels couvrant l'infrastructure IT, la sécurité réseau et le
          développement full-stack.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-accent mt-1">{project.category}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium ${
                      project.status === "En production" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary/20 text-secondary px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details (Expandable) */}
                {selectedProject === idx && (
                  <div className="space-y-3 py-4 border-t border-border">
                    <h4 className="font-semibold text-foreground text-sm">Détails du projet:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight size={16} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                  className="w-full mt-4 py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {selectedProject === idx ? "Voir moins" : "Voir détails"}
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${selectedProject === idx ? "rotate-90" : ""}`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
