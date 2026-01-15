# CV En Ligne - Portfolio Professionnel

Un site portfolio moderne et professionnel construit avec Next.js 16, React 19 et Tailwind CSS. Parfait pour les administrateurs système, développeurs et professionnels de l'IT.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ installé sur votre système
- npm ou yarn package manager

### Installation

1. **Cloner ou télécharger le projet**
\`\`\`bash
git clone <votre-repo>
cd cv-en-ligne
\`\`\`

2. **Installer les dépendances**
\`\`\`bash
npm install
\`\`\`

3. **Lancer le serveur de développement**
\`\`\`bash
npm run dev
\`\`\`

4. **Ouvrir dans le navigateur**
Le projet sera accessible à l'adresse: `http://localhost:3000`

## 📝 Scripts Disponibles

\`\`\`bash
# Mode développement (avec hot-reload)
npm run dev

# Construire pour la production
npm run build

# Lancer le serveur de production
npm start

# Vérifier la syntaxe avec ESLint
npm run lint
\`\`\`

## 📁 Structure du Projet

\`\`\`
.
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux avec Tailwind CSS v4
├── components/
│   ├── navigation.tsx      # Barre de navigation
│   ├── hero.tsx            # Section héro
│   └── sections/
│       ├── about.tsx       # Section À Propos
│       ├── experience.tsx  # Section Expérience
│       ├── skills.tsx      # Section Compétences
│       ├── projects.tsx    # Section Projets
│       ├── education.tsx   # Section Formation
│       └── contact.tsx     # Section Contact
├── public/                 # Fichiers statiques
└── package.json           # Dépendances du projet
\`\`\`

## ✨ Fonctionnalités

- **Navigation Responsive** - Menu de navigation moderne et réactif
- **Section Héro** - Présentation professionnelle avec statistiques
- **À Propos** - Résumé du profil professionnel
- **Expérience Professionnelle** - Expériences détaillées avec points clés
- **Compétences** - Grille de compétences organizée par catégories
- **Projets** - Showcase des projets avec détails complets
- **Formation & Certifications** - Timeline éducative
- **Téléchargement CV** - Bouton pour télécharger votre CV en format texte
- **Contact** - Liens directs (Email, Téléphone, WhatsApp, LinkedIn)
- **Design Responsif** - Optimisé pour mobile, tablette et desktop
- **Mode Sombre** - Support du mode sombre (Next Themes)

## 🎨 Technologie

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 avec composants Radix UI
- **Styling**: Tailwind CSS v4
- **Thème**: Dark Mode support avec Next Themes
- **Formulaires**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React

## 🔧 Personnalisation

### Modifier le Contenu

1. **Section À Propos** - Éditez `components/sections/about.tsx`
2. **Expérience** - Éditez `components/sections/experience.tsx`
3. **Compétences** - Éditez `components/sections/skills.tsx`
4. **Projets** - Éditez `components/sections/projects.tsx`
5. **Formation** - Éditez `components/sections/education.tsx`

### Modifier les Couleurs

Les couleurs principales sont définies dans `app/globals.css` :
\`\`\`css
--primary: 210 40% 40%;      /* Bleu professionnel */
--accent: 210 100% 50%;      /* Bleu clair */
--secondary: 240 10% 20%;    /* Gris foncé */
\`\`\`

### Modifier les Polices

Les polices sont configurées dans `app/layout.tsx`. Changez les imports de `next/font/google` pour utiliser d'autres polices.

## 📦 Déploiement

### Déployer sur Vercel (Recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repository GitHub
3. Cliquer sur "Deploy"

\`\`\`bash
# Ou via Vercel CLI
npm i -g vercel
vercel
\`\`\`

### Déployer sur d'autres plateformes

\`\`\`bash
# Construire l'application
npm run build

# Lancer le serveur de production
npm start
\`\`\`

Le build est prêt à être déployé sur:
- Netlify
- GitHub Pages
- Render
- Railway
- DigitalOcean
- Autres services Node.js

## 🐛 Dépannage

### Le projet ne démarre pas
\`\`\`bash
# Supprimer les dépendances et cache
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### Erreurs TypeScript
\`\`\`bash
# Reconstruire le projet
npm run build
\`\`\`

### Problèmes de port 3000
\`\`\`bash
# Lancer sur un port différent
npm run dev -- -p 3001
\`\`\`

## 📄 Contenu du CV

Le portfolio inclut:
- **Profil**: Administrateur Systèmes et Développeur Full-Stack
- **Expérience**: Spray Info et autres postes IT
- **Compétences**: Linux, Windows, Réseaux, Développement Web, Sécurité IT
- **Projets**: Projets techniques détaillés avec technologies utilisées
- **Formation**: Diplômes et certifications IT
- **Contact**: Email, Téléphone, WhatsApp, LinkedIn

## 📱 Responsive Design

Le site est optimisé pour tous les appareils:
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Grand écran (1280px+)

## 🔐 Sécurité

- Pas de données sensibles stockées localement
- Tous les liens de contact utilisent des protocoles sécurisés (mailto:, tel:, https)
- Validation des données avec Zod

## 📞 Support

Si vous avez des questions ou rencontrez des problèmes:
1. Consultez la documentation Next.js: https://nextjs.org
2. Consultez la documentation Tailwind CSS: https://tailwindcss.com
3. Consultez la documentation Radix UI: https://radix-ui.com

## 📄 Licence

Ce projet est fourni tel quel pour usage personnel et professionnel.

---

**Créé avec ❤️ pour votre carrière IT**
