export default function Education() {
  const educations = [
    {
      period: "en cours",
      title: "formation de sisco Academy",
      school: "",
      details: "Administration Systèmes et Réseaux",
    },
    {
      period: "2024-2025",
      title: "Troisième année de Licence Professionnelle",
      school: "Ecole Nationale Informatique, Université de Fianarantsoa",
      details: " Spécialisation en Administration Systèmes et Réseaux",
    },
    {
      period: "2023-2024",
      title: "Deuxième année de Licence Professionnelle",
      school: "Ecole Nationale Informatique, Université de Fianarantsoa",
      details: "Complétée avec succès",
    },
    {
      period: "2022-2023",
      title: "Première année de Licence Professionnelle",
      school: "Ecole Nationale Informatique, Université de Fianarantsoa",
      details: "Complétée avec succès",
    },
    {
      period: "Mai - Septembre 2024",
      title: "Formation: Administration Windows Server",
      school: "Spray Info, Fianarantsoa",
      details: "Windows Server 2012/2019 - Certification",
      certificateImage: "images/certificats.png", // ajout du certificat
      
    },

    {
      period: "Septembre - Decembre 2024",
      title: "stage: Administration system et reseau",
      school: "Spray Info, Fianarantsoa",
      details: " - Certification",
      certificateImage: "images/attestaion.png", // ajout du certificat
      
    },
    {
      period: "Mai 2023",
      title: "Formation: Énergie Renouvelable",
      school: "CFP Anjoma, Fianarantsoa",
      details: "Certificat de Formation Professionnelle",
      /*certificateImage: "/images/nav.jpg",*/ // ajout du certificat
    },
    {
      period: "2020-2021",
      title: "Baccalauréat Série D",
      school: "Lycée Manandriana",
      details: "Série Scientifique - Obtenu",
    },
  ]

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Formation & Certifications
        </h2>

        <div className="space-y-4">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="flex gap-6 pb-6 border-b border-border last:border-b-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="w-3 h-3 bg-primary rounded-full mt-2" />
                {idx !== educations.length - 1 && (
                  <div className="w-0.5 h-20 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.title}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-accent mb-1">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.details}</p>

                {/* Bouton pour voir le certificat */}
                {edu.certificateImage && (
                  <a
                    href={edu.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded text-xs font-medium hover:bg-primary/80"
                  >
                    Voir le certificat
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
