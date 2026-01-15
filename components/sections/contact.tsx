"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin, X } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState<"email" | "whatsapp" | null>(null)

  const handleSendMessage = (type: "email" | "whatsapp") => {
    if (type === "email") {
      window.location.href = "mailto:andriniainajohanessa@gmail.com?subject=Demande de collaboration"
    } else if (type === "whatsapp") {
      window.location.href =
        "https://wa.me/261348662683?text=Bonjour, je souhaite discuter d'une opportunité de collaboration"
    }
    setShowMessageModal(false)
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Parlons Ensemble</h2>
              <p className="text-muted-foreground text-lg">
                Intéressé par une collaboration ou une opportunité? N'hésitez pas à me contacter.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "andriniainajohanessa@gmail.com",
                  href: "mailto:andriniainajohanessa@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  value: "+261 34 86 626 83/ +261 33 76 488 37",
                 
                },
                {
                  icon: MapPin,
                  title: "Localisation",
                  value: "Fianarantsoa, Madagascar",
                 
                },
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <contact.icon className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{contact.title}</p>
                    <p className="text-foreground font-semibold">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connectez-moi</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Trouvez-moi sur les réseaux sociaux et les plateformes professionnelles.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/jaonarivelo-andriniaina-mahasoanirainy-37319439b",
                  },
                  { icon: Github, label: "GitHub", href: "https://github.com/dashboardle" },
                  { icon: Mail, label: "Email", href: "mailto:andriniainajohanessa@gmail.com" },
                  { icon: Phone, label: "WhatsApp", href: "https://wa.me/261348662683" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex items-center justify-center gap-2 p-3 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg transition-colors border border-transparent hover:border-primary/30"
                  >
                    <social.icon size={20} />
                    <span className="text-sm font-medium hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button
                onClick={() => setShowMessageModal(true)}
                className="w-full bg-primary hover:bg-secondary text-primary-foreground py-3"
              >
                Envoyer un Message
              </Button>
            </div>
          </div>
        </div>

        {/* Message Modal */}
        {showMessageModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg border border-border max-w-sm w-full p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Choisir un moyen de contact</h3>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-sm text-muted-foreground">Sélectionnez votre préférence pour envoyer un message:</p>

              <div className="space-y-2">
                <Button
                  onClick={() => handleSendMessage("email")}
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground py-2 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Par Email
                </Button>
                <Button
                  onClick={() => handleSendMessage("whatsapp")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Par WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 MAHASOANIRAINY Jaonarivelo. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
