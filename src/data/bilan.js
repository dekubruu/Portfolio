export const bilan = {
  synthese: `Cette année de BAC 3 a été celle de la consolidation et de la prise de recul. Après deux années à accumuler des connaissances techniques dans un cadre académique, j'ai cherché à ancrer ces connaissances dans des contextes réels, à identifier mes manques, et à construire un plan de développement professionnel cohérent.

Les sept thèmes et treize activités documentés dans ce portfolio ne sont pas une liste exhaustive de tout ce que j'ai fait — c'est une sélection raisonnée d'expériences qui ont réellement changé quelque chose dans ma façon de penser et de travailler.`,

  apprentissagesCles: [
    {
      titre: 'La sécurité n\'est pas optionnelle',
      description:
        "La conférence cybersécurité et les exercices TryHackMe ont radicalement changé ma façon d'écrire du code. Je pense maintenant aux vecteurs d'attaque dès la conception d'une fonctionnalité, et non plus comme une étape finale.",
    },
    {
      titre: 'Le cloud change l\'économie du déploiement',
      description:
        "La formation AWS et le projet CI/CD m'ont montré que le déploiement n'est plus une opération manuelle ponctuelle mais un processus automatisé, reproductible et fiable. Cette vision a transformé mon rapport à la mise en production.",
    },
    {
      titre: "L'IA est un outil, pas une finalité",
      description:
        "Le hackathon m'a confronté aux limites et aux risques éthiques des systèmes IA. Je suis maintenant plus nuancé : l'IA est puissante mais doit être utilisée avec discernement, transparence et sens des responsabilités.",
    },
    {
      titre: 'La communication est une compétence technique',
      description:
        "Les sessions sur la communication professionnelle m'ont convaincu que communiquer efficacement est aussi important que maîtriser un framework. Cette compétence transversale conditionne l'évolution vers des rôles de leadership.",
    },
    {
      titre: 'La pratique prime sur la théorie',
      description:
        "Le bug de firewall que j'ai mis une heure à comprendre m'a appris les réseaux plus profondément que n'importe quel cours magistral. L'apprentissage le plus durable vient de la confrontation directe avec des problèmes réels.",
    },
    {
      titre: 'Le réseau professionnel se construit tôt',
      description:
        "Le Job Day et le salon BeJobs m'ont appris que le réseau ne se construit pas au moment où on en a besoin, mais en permanence. Chaque conversation professionnelle est un investissement à long terme.",
    },
  ],

  progressionCompetences: [
    { competence: 'Développement Web (React/Next.js)', avant: 65, apres: 85 },
    { competence: 'Cloud & DevOps', avant: 20, apres: 55 },
    { competence: 'Cybersécurité', avant: 15, apres: 45 },
    { competence: 'Communication professionnelle', avant: 40, apres: 60 },
    { competence: 'Gestion de projet Agile', avant: 50, apres: 70 },
    { competence: 'Réseaux & Systèmes', avant: 45, apres: 65 },
  ],

  lacunesRestantes: [
    "TypeScript avancé — les types génériques et les patterns avancés restent à approfondir",
    "Tests automatisés — mes connaissances en testing (unitaire, intégration, E2E) sont encore superficielles",
    "Kubernetes — la prochaine étape logique après Docker et le CI/CD de base",
    "Communication orale en public — un travail continu qui demande de la pratique régulière",
  ],

  planAmelioration: `Pour combler ces lacunes, je m'engage sur les actions concrètes suivantes dans les six prochains mois :

**TypeScript** : Refactorer mon projet EphécTrack en TypeScript strict, avec des types complets et zéro usage de any. Délai : fin janvier 2026.

**Tests** : Suivre la formation "Testing JavaScript" de Kent C. Dodds et atteindre 80% de couverture sur EphécTrack. Délai : mars 2026.

**Kubernetes** : Déployer une application sur un cluster K3s personnel après mon stage de fin d'études. Délai : été 2026.

**Communication** : Proposer une présentation technique lors d'un événement EPHEC Tech Club. L'objectif est de dépasser l'inconfort du public en créant des situations d'exposition régulières et progressives. Délai : courant 2026.`,

  reflexionFinale: `Ce portfolio est, au fond, un portrait de moi en train d'apprendre. Chaque activité documentée ici représente un moment où j'ai été confronté à quelque chose que je ne savais pas, où j'ai dû m'adapter, réfléchir, parfois échouer, et en tirer des leçons concrètes.

Ce que je retiens de cette démarche réflexive, c'est que l'apprentissage le plus durable ne vient pas des cours mais des expériences : le bug de firewall que j'ai mis une heure à comprendre m'a appris les réseaux plus profondément que n'importe quel cours. Le hackathon m'a appris la gestion de projet et la communication plus efficacement qu'un séminaire théorique.

Je termine cette année avec une conviction claire : je veux être développeur Full-Stack, je sais pourquoi, et je sais ce que je dois encore construire pour y arriver. Ce portfolio est à la fois un bilan honnête et un point de départ motivé.`,
}
