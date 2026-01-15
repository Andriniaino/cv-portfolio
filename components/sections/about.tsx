import Image from "next/image"

export default function About() {
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


          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">À Propos</h2>
                <p className="text-sm text-primary font-medium">
                  Administrateur Systèmes & Réseaux
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis un etudient d'Ecole Nationale d'Informatique Université de Fianarantsoa,
                Parcours Informatique Génerale(IG).<br></br>
                 je suis un Administrateur Systèmes et Réseaux passionné par la mise en place, la gestion et la
                sécurisation des infrastructures informatiques critiques. Avec une expertise approfondie en Windows
                Server, Linux, virtualisation VMware et sécurité réseau avancée, je suis capable d'assurer le support de
                niveau 3 et de gérer des migrations complexes.
              </p>
              <p>
                Ma spécialité réside dans la conception et l'optimisation d'architectures informatiques complètes, la
                mise en place de solutions de supervision innovantes et la sécurisation des environnements multi-sites.
                J'analyse, optimise et résous les problèmes critiques pour offrir un environnement informatique fiable,
                performant et adapté aux besoins métier.
              </p>
              <p>
                Au-delà de mes compétences en administration système et réseau, je dispose également d'une solide
                expérience en développement full-stack avec Next.js, React,React Native, Express.js et spring boot  me permettant de
                comprendre et contribuer à des projets technologiques complexes.
              </p>
            </div>

            {/* Info Cards 
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Informations Personnelles</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Date de naissance:</span> 11 Décembre 2001 a Anjoma-Nandihizana Manandriana 323
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Nationalité:</span> Malagasy
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Situation:</span> Célibataire
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Email:</span> andriniainajohanessa@gmail.com
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Tél:</span> +261 34 86 626 83/ +261 33 76 488 37
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Adresse:</span> Andrainjato, Fianarantsoa 301
                  </p>
                </div>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
