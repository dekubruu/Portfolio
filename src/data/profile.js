// ─── À PERSONNALISER ────────────────────────────────────────────────────────
// Remplacez toutes les valeurs par vos informations réelles.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  prenom: 'Thomas',
  nom: 'Renard',
  titre: "Étudiant BAC 3 — Technologies de l'Informatique",
  ecole: 'EPHEC Bruxelles',
  email: 'thomas.renard@ephec.be',
  telephone: '+32 485 12 34 56',
  localisation: 'Bruxelles, Belgique',
  github: 'https://github.com/thomas-renard',
  linkedin: 'https://linkedin.com/in/thomas-renard',

  objectifProfessionnel: 'Développeur Full-Stack spécialisé en solutions cloud-native',

  accroche:
    "Passionné par la conception de systèmes robustes et les architectures modernes, je cherche à intégrer une équipe ambitieuse où je pourrai allier créativité technique et rigueur professionnelle pour construire des produits qui font réellement la différence.",

  formation: [
    {
      diplome: "Bachelier en Technologies de l'Informatique",
      ecole: 'EPHEC',
      lieu: 'Bruxelles',
      periode: '2023 – 2026',
      statut: 'En cours — BAC 3',
      description:
        "Formation en développement logiciel, réseaux, bases de données, gestion de projets IT et cybersécurité.",
    },
    {
      diplome: 'CESS — Sciences Générales',
      ecole: 'Institut Saint-Louis',
      lieu: 'Bruxelles',
      periode: '2019 – 2023',
      statut: 'Diplômé',
      description: 'Options mathématiques et sciences appliquées.',
    },
  ],

  competencesTechniques: [
    { categorie: 'Langages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'Bash'] },
    { categorie: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3'] },
    { categorie: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'] },
    { categorie: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    {
      categorie: 'Cloud & DevOps',
      items: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'],
    },
    { categorie: 'Outils', items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'] },
  ],

  niveaux: [
    { competence: 'Développement Web', niveau: 85 },
    { competence: 'Bases de données', niveau: 75 },
    { competence: 'Cloud & DevOps', niveau: 60 },
    { competence: 'Cybersécurité', niveau: 50 },
    { competence: 'Réseaux & Systèmes', niveau: 65 },
    { competence: 'Gestion de projet', niveau: 70 },
  ],

  softSkills: [
    {
      nom: 'Travail en équipe',
      description: 'Habitué à collaborer en méthode Agile/Scrum sur des projets pluridisciplinaires.',
    },
    {
      nom: 'Résolution de problèmes',
      description: 'Approche analytique et structurée face aux défis techniques complexes.',
    },
    {
      nom: 'Adaptabilité',
      description: 'Capacité à monter en compétences rapidement sur de nouvelles technologies.',
    },
    {
      nom: 'Communication',
      description: "Aisance à vulgariser des concepts techniques auprès de publics non-spécialistes.",
    },
    {
      nom: 'Autonomie',
      description: "Capacité à organiser mon travail de façon indépendante et à prendre des initiatives.",
    },
    {
      nom: 'Curiosité intellectuelle',
      description: 'Veille technologique active et apprentissage continu en dehors du cursus.',
    },
  ],

  langues: [
    { langue: 'Français', niveau: 'Langue maternelle', code: 'C2' },
    { langue: 'Anglais', niveau: 'Avancé — documentation technique', code: 'B2' },
    { langue: 'Néerlandais', niveau: 'Notions de base', code: 'A2' },
  ],

  experiences: [
    {
      poste: 'Développeur Web Junior',
      entreprise: 'StartupXYZ',
      lieu: 'Bruxelles',
      periode: 'Juillet – Août 2024',
      type: 'Stage',
      description:
        "Développement de nouvelles fonctionnalités sur une application React/Node.js. Participation aux sprints Scrum bi-hebdomadaires. Optimisation des requêtes SQL et mise en place d'un pipeline CI/CD avec GitHub Actions.",
    },
    {
      poste: 'Assistant IT Helpdesk',
      entreprise: 'Cabinet Conseil ABC',
      lieu: 'Bruxelles',
      periode: 'Janvier – Juin 2024',
      type: 'Job étudiant',
      description:
        "Support technique niveau 1 et 2. Gestion du parc informatique (80 postes). Déploiement et configuration de postes Windows. Rédaction de documentation technique.",
    },
  ],

  projets: [
    {
      nom: 'EphécTrack',
      description:
        "Application web de suivi des notes et crédits ECTS pour les étudiants EPHEC. Stack complète React + Express + PostgreSQL avec authentification JWT.",
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      lien: 'https://github.com/thomas-renard/ephec-track',
    },
    {
      nom: 'DevPortfolio CLI',
      description:
        "Outil CLI en Python pour générer des portfolios statiques à partir d'un fichier JSON. Publié sur PyPI.",
      technologies: ['Python', 'Typer', 'Jinja2'],
      lien: 'https://github.com/thomas-renard/devportfolio-cli',
    },
  ],
}
