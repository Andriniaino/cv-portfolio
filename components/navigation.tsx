"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "À propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Formation", href: "#education" },
  ]

  const handleDownloadCV = async () => {
    const { generateCVPDF } = await import("./../utils/generale-cv-pdf")
    generateCVPDF()
  }

  const handleContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Profile Photo */}
          <Link href="#" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
              <Image
                src="/images/photo.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:inline font-semibold text-foreground">MAHASOANIRAINY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Download & Contact Buttons & Mobile Menu */}
          <div className="flex items-center space-x-2">
          {/*<Button
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-secondary text-primary-foreground"
            >
              <Download size={16} />
             <span>Télécharger CV</span>
            </Button>*/}

            <Button
              onClick={handleContact}
              className="hidden sm:flex items-center space-x-2 bg-accent hover:bg-accent/80 text-accent-foreground"
            >
              <MessageSquare size={16} />
              <span>Contacter</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => {
                handleDownloadCV()
                setIsOpen(false)
              }}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground flex items-center justify-center space-x-2"
            >
              <Download size={16} />
              <span>Télécharger CV</span>
            </Button>
            <Button
              onClick={() => {
                handleContact()
                setIsOpen(false)
              }}
              className="w-full bg-accent hover:bg-accent/80 text-accent-foreground flex items-center justify-center space-x-2"
            >
              <MessageSquare size={16} />
              <span>Contacter</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
