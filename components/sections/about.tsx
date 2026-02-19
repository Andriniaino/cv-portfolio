import { useState } from "react"
import Image from "next/image"

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Side Navigation */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/images/nav.jpg"
              alt="Photo de profil"
              className="w-110 h-120 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Contenu */}
          <div className="md:col-span-2 space-y-6">

            {/* Titre */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">À Propos de Moi</h2>
              <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                Administrateur Systèmes & Réseaux 
              </p>
            </div>

            {/* Paragraphes */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">

              <p>
                Étudiant en fin de formation à l'<span className="font-medium text-foreground">École Nationale
                  d'Informatique (ENI) de l'Université de Fianarantsoa</span>, spécialité{" "}
                <span className="font-medium text-foreground">Administration Systèmes et Réseaux</span>, je suis
                activement à la recherche d'une opportunité professionnelle pour mettre en pratique et approfondir
                mes compétences acquises tout au long de mon parcours académique.
              </p>

              <p>
                Passionné par la gestion et la sécurisation des infrastructures informatiques, je maîtrise les
                environnements <span className="font-medium text-foreground">Windows Server et Linux</span>, la
                virtualisation avec <span className="font-medium text-foreground">VMware, VirtualBox</span>, ainsi que les
                techniques de sécurité réseau avancée. Je suis capable d'assurer un support de niveau 3 et de
                participer à des migrations d'infrastructure complexes avec rigueur et méthode.
              </p>

              <p>
                Ma formation m'a également permis de développer une expertise dans la{" "}
                <span className="font-medium text-foreground">conception d'architectures informatiques</span>, la
                mise en place de solutions de supervision et la sécurisation d'environnements multi-sites. Je suis
                orienté résolution de problèmes, toujours soucieux d'offrir un environnement informatique fiable,
                performant et adapté aux besoins de l'organisation.
              </p>

              <p>
                En complément de mon profil système et réseau, je possède des compétences solides en{" "}
                <span className="font-medium text-foreground">développement full-stack</span> — notamment avec
                Next.js, React, Express.js et Spring Boot, Laravel et bootstrap— ce qui me permet d'appréhender des
                projets technologiques transverses et d'apporter une vision complète entre infrastructure et
                développement applicatif.
              </p>

              <p>
                Motivé, rigoureux et doté d'un fort esprit d'équipe, je suis prêt à m'investir pleinement dans
                votre entreprise et à contribuer activement à vos projets informatiques. Je suis disponible
                immédiatement et ouvert à toute opportunité.
              </p>
            </div>

            {/* Bouton plus d'information */}
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
              >
                {isOpen ? "▲ Moins d'informations" : "▼ Plus d'informations"}
              </button>

              {/* Collapse animé */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="bg-card border border-border rounded-lg p-4 text-muted-foreground">
                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* Infos personnelles */}
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3">Informations Personnelles</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">Date de naissance :</span>{" "}
                          11 Décembre 2001 — Anjoma-Nandihizana, Manandriana
                        </p>
                        <p>
                          <span className="font-medium text-foreground">CIN :</span>{" "}
                          223 011 012 807 — délivré le 28 Janvier 2020 à Manandriana
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Nationalité :</span> Malagasy
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Situation :</span> Célibataire
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Disponibilité :</span>{" "}
                          <span className="text-green-600 font-semibold">Immédiate</span>
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3">Contact</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">Email :</span>{" "}
                          andriniainajohanessa@gmail.com
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Tél :</span>{" "}
                          +261 34 86 626 83 / +261 33 76 488 37
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Adresse :</span>{" "}
                          Andrainjato, Fianarantsoa 301
                        </p>
                       
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}