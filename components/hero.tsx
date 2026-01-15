"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, Phone } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
                MAHASOANIRAINY Jaonarivelo Andriniaina
              </h1>
              <p className="text-xl sm:text-2xl text-accent font-semibold mt-2">Administrateur Systèmes & Réseaux</p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionné par la mise en place, la gestion et la sécurisation des infrastructures informatiques critiques.
              Expertise en virtualisation, sécurité réseau avancée et supervision multi-outils avec une solide
              expérience en développement full-stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="bg-primary hover:bg-secondary text-primary-foreground px-6 py-2"
              >
                Voir mon travail
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-border hover:bg-muted bg-transparent"
              >
                Nous contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="mailto:andriniainajohanessa@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
              <a href="tel:+261348662683" className="text-muted-foreground hover:text-accent transition-colors">
                <Phone size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jaonarivelo-andriniaina-mahasoanirainy-37319439b"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/dashboardle"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Stats or Image Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-2 hover:bg-primary/15 transition-colors">
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Années d'expérience IT</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-2 hover:bg-accent/15 transition-colors">
              <p className="text-3xl font-bold text-accent">25+</p>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-2 hover:bg-secondary/15 transition-colors">
              <p className="text-3xl font-bold text-secondary">50+</p>
              <p className="text-sm text-muted-foreground">Compétences techniques</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-2 hover:bg-primary/15 transition-colors">
              <p className="text-3xl font-bold text-primary">L3</p>
              <p className="text-sm text-muted-foreground">Licence professionnelle</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-2 hover:bg-primary/15 transition-colors">
              <p className="text-3xl font-bold text-primary">M1</p>
              <p className="text-sm text-muted-foreground">en cours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
