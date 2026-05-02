export const syntheseGlobale = `Au cours de cette année académique, j'ai organisé mon développement personnel autour de sept thèmes complémentaires qui couvrent à la fois mes forces identifiées et les lacunes que je souhaite combler. Ces activités m'ont permis de sortir du cadre strictement académique pour confronter mes compétences à des contextes réels : hackathons, formations professionnelles, visites d'entreprises, salons de l'emploi et projets personnels.

La sélection de ces thèmes n'est pas le fruit du hasard. Elle répond à une logique claire : renforcer mes bases techniques en développement web et cloud, acquérir une sensibilité à la cybersécurité indispensable dans tout projet logiciel, comprendre les dynamiques de gestion de projet en entreprise, et travailler sur mes compétences transversales de communication et de développement personnel.

Au total, j'ai réalisé 13 activités distinctes réparties sur 7 thèmes, représentant 50 heures d'apprentissage effectif. Chaque activité a fait l'objet d'une analyse réflexive honnête dans laquelle j'ai cherché à identifier non seulement ce que j'ai appris, mais surtout comment cette expérience modifie ma façon de travailler et d'envisager mon avenir professionnel.`

export const themes = [
  // ─── THÈME 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'developpement-web',
    titre: 'Développement Web Moderne',
    icone: 'Code2',
    couleur: 'cyan',
    heuresTotal: 8,
    nbActivites: 2,
    lienForce: "Compétence technique en développement web — ma principale force identifiée",
    resume:
      'Approfondissement des frameworks React et Next.js à travers une formation Udemy en distanciel et un workshop en présentiel organisé par le Tech Club EPHEC.',
    activites: [
      {
        id: 'udemy-nextjs',
        titre: 'Formation Udemy — React & Next.js 14 (Complet)',
        type: 'Formation en distanciel',
        typeBadge: 'distanciel',
        date: 'Octobre – Novembre 2025',
        heuresComptees: 5,
        contexte: `La plateforme Udemy propose une des formations les plus complètes sur React et Next.js 14. J'ai suivi les modules relatifs au App Router de Next.js, aux Server Components, et à l'intégration de Tailwind CSS dans un projet moderne. La formation est animée par un instructeur professionnel avec plus de 15 ans d'expérience en développement web et compte plus de 200 000 étudiants inscrits.

J'ai choisi cette formation parce que le passage du Pages Router vers l'App Router dans Next.js représentait une lacune concrète dans mes compétences. Mon projet de stage et mes projets personnels reposent sur cette technologie, et je voulais maîtriser les conventions actuelles plutôt que de travailler avec des patterns obsolètes.`,
        apprentissages: `J'ai appris à structurer une application Next.js avec l'App Router, à distinguer les Server Components des Client Components et à choisir intelligemment entre les deux selon les besoins de performance et d'interactivité. J'ai également compris le mécanisme de cache de Next.js, fondamentalement différent des applications React classiques.

Les modules sur la gestion des données (fetch, cache, revalidation) m'ont particulièrement apporté : je comprends maintenant pourquoi des architectures comme celle de Vercel peuvent servir des pages quasi-statiques avec des données toujours fraîches, ce qui repose sur des mécanismes précis et bien documentés.`,
        analyse: `Cette formation a confirmé une intuition que j'avais : la frontière entre frontend et backend devient de plus en plus floue dans les applications modernes. Les Server Components de React/Next.js permettent d'écrire du code qui s'exécute côté serveur tout en restant dans le paradigme React. C'est une évolution majeure que je n'avais pas saisie dans toute sa portée avant cette formation.

Ce qui m'a le plus frappé, c'est la façon dont ces abstractions changent radicalement l'expérience de développement. Avant, pour récupérer des données, j'écrivais systématiquement un useEffect avec un fetch — une approche fonctionnelle mais qui génère des états de chargement complexes. Avec les Server Components, cette complexité disparaît : le composant reçoit ses données directement, avec toute la puissance de React.

Je me suis rendu compte, en suivant cette formation, que j'avais jusqu'ici utilisé Next.js "en surface" sans vraiment exploiter ses capacités. Cette prise de conscience a changé la façon dont j'aborde l'architecture de mes projets. Depuis, je structure mes applications en pensant d'abord à ce qui doit être interactif (Client Component) et ce qui est purement de l'affichage (Server Component), plutôt que de tout mettre côté client par défaut.

En lien avec mon projet professionnel : le marché belge et européen valorise fortement les compétences Next.js/React. Maîtriser les patterns actuels me positionne de façon compétitive pour mon stage de fin d'études.`,
        lienObjectif:
          "Cette compétence est centrale dans mon objectif de devenir développeur Full-Stack. Next.js est aujourd'hui le framework de référence pour le développement web React en production.",
        preuve: "Certificat de complétion Udemy — sections 1 à 14 complétées (attestation disponible sur demande via le profil Udemy).",
      },
      {
        id: 'workshop-react',
        titre: 'Workshop React Avancé — EPHEC Tech Club',
        type: 'Formation en présentiel',
        typeBadge: 'présentiel',
        date: 'Novembre 2025',
        heuresComptees: 3,
        contexte: `L'EPHEC Tech Club, association étudiante de l'école, organise régulièrement des workshops techniques animés par des étudiants en dernière année ou des anciens diplômés. Ce workshop sur React avancé était animé par un ancien étudiant EPHEC aujourd'hui développeur senior dans une scale-up bruxelloise. La session réunissait une vingtaine d'étudiants, principalement de BAC 2 et BAC 3.

Le programme couvrait les hooks avancés de React (useMemo, useCallback, useRef), la gestion des performances avec React DevTools Profiler, et une introduction aux patterns de composition (Compound Components).`,
        apprentissages: `J'ai appris à identifier les re-rendus inutiles dans un composant React grâce à React DevTools Profiler, et à les éliminer avec useMemo et useCallback. C'est une compétence très concrète : dans mon projet EphécTrack, j'avais des lenteurs inexpliquées qui venaient précisément de composants qui se re-rendaient à chaque frappe clavier dans un formulaire parent.

Le workshop m'a aussi exposé au pattern "Compound Components", que je ne connaissais pas. C'est une façon d'organiser des composants complexes (menus déroulants, formulaires multi-étapes) qui offre beaucoup plus de flexibilité à l'utilisateur du composant tout en encapsulant la logique interne.`,
        analyse: `Ce qui m'a le plus apporté dans ce workshop, c'est l'aspect interactif : contrairement à une formation en ligne où l'on suit passivement, ici j'ai pu poser des questions en temps réel et observer l'animateur déboguer des problèmes de performance en direct. Voir quelqu'un d'expérimenté utiliser React DevTools Profiler avec aisance m'a montré à quel point cet outil est puissant — et à quel point je l'avais sous-utilisé.

J'ai également apprécié les échanges avec les autres étudiants. Certains avaient des questions que je n'aurais pas pensé à poser, et les réponses m'ont appris des choses que je n'avais pas anticipées. C'est une richesse du format présentiel que les formations en ligne ne peuvent pas reproduire.

Un point qui m'a particulièrement frappé : l'animateur a insisté sur le fait qu'il ne faut pas "optimiser prématurément". useMemo et useCallback ont un coût — celui de la mémoïsation elle-même — et ne sont utiles que si le calcul mémoïsé est effectivement coûteux. Ce conseil rejoint ma faiblesse identifiée de perfectionnisme : j'ai tendance à vouloir optimiser avant même de mesurer le problème. Cette session m'a donné des outils pour mesurer d'abord, puis optimiser.`,
        lienObjectif:
          "La maîtrise des performances React est ce qui distingue un développeur junior d'un développeur medior. Cette compétence renforce directement mon positionnement professionnel.",
        preuve:
          "Attestation de participation signée par l'EPHEC Tech Club — présence confirmée sur la liste nominative.",
      },
    ],
  },

  // ─── THÈME 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'cybersecurite',
    titre: 'Cybersécurité & Protection des Données',
    icone: 'Shield',
    couleur: 'red',
    heuresTotal: 7,
    nbActivites: 2,
    lienForce: "Faiblesse identifiée — combler le manque de sensibilité sécurité dans mes développements",
    resume:
      'Sensibilisation à la cybersécurité via une conférence professionnelle à l\'EPHEC et une pratique active sur la plateforme TryHackMe.',
    activites: [
      {
        id: 'conf-cybersec',
        titre: 'Conférence — Cybersécurité en Entreprise : Menaces & Bonnes Pratiques',
        type: 'Conférence en présentiel',
        typeBadge: 'conférence',
        date: 'Octobre 2025',
        heuresComptees: 3,
        contexte: `Cette conférence était organisée dans le cadre des "EPHEC Tech Talks", une série de conférences ouvertes aux étudiants TI et organisées en partenariat avec des entreprises du secteur. L'intervenant était un consultant en cybersécurité chez Proximus ADA, avec plus de 12 ans d'expérience dans le domaine, ayant travaillé sur des incidents majeurs pour des clients bancaires et gouvernementaux belges.

La conférence abordait le panorama des menaces actuelles (ransomwares, phishing, attaques de supply chain), les bonnes pratiques de développement sécurisé (OWASP Top 10), et le cadre légal européen (RGPD, NIS2).`,
        apprentissages: `J'ai appris que la majorité des incidents de sécurité en entreprise ne viennent pas d'attaques sophistiquées mais de vulnérabilités basiques : injections SQL, mots de passe faibles, endpoints non authentifiés. Le conférencier a cité des chiffres troublants : selon une étude récente, 74% des entreprises belges PME ont subi un incident de sécurité en 2024, et 60% n'avaient aucun plan de réponse aux incidents.

J'ai également découvert l'importance croissante du cadre NIS2, qui depuis octobre 2024 s'applique à un nombre bien plus large d'entreprises en Belgique, avec des obligations concrètes de signalement des incidents et de mise en œuvre de mesures de sécurité.`,
        analyse: `Cette conférence a changé ma façon de penser le développement. Avant, je considérais la sécurité comme une couche qu'on ajoute "à la fin", une fois que l'application fonctionne. Après avoir écouté cet expert décrire comment des applications mal conçues ont causé des fuites de données massives, j'ai compris que cette approche est fondamentalement erronée.

Ce qui m'a le plus marqué, c'est la démonstration live d'une injection SQL sur une application de démonstration. En quelques secondes, le conférencier a extrait tous les identifiants de la base. Me demander si mes propres projets contiennent de telles failles a été un choc salutaire.

J'ai immédiatement revu mon projet EphécTrack après la conférence. J'ai trouvé deux endroits où j'utilisais des requêtes SQL concaténées avec des paramètres utilisateur, exactement le type de vulnérabilité présentée. Je les ai remplacées par des requêtes paramétrées le soir même. Ce passage de la théorie à l'action concrète en moins de 24 heures est ce dont je suis le plus fier dans toute cette expérience.

En lien avec mon projet professionnel : la cybersécurité n'est pas un métier que je veux exercer à temps plein, mais c'est une compétence transversale indispensable. Les employeurs attendent de plus en plus que les développeurs Full-Stack comprennent les enjeux sécurité — pas au niveau d'un pentesteur, mais suffisamment pour écrire du code qui ne met pas en danger leurs utilisateurs.`,
        lienObjectif:
          "La sécurité by design est une attente croissante des employeurs pour les postes de développeur Full-Stack. Cette conférence m'a donné le cadre conceptuel et la motivation pour intégrer cette dimension dans ma pratique quotidienne.",
        preuve:
          "Ticket d'entrée numérique EPHEC Tech Talks — badge nominatif scanné à l'entrée de l'événement.",
      },
      {
        id: 'tryhackme',
        titre: "Plateforme TryHackMe — Parcours 'Pre-Security' & 'Web Fundamentals'",
        type: 'Autoformation pratique',
        typeBadge: 'projet',
        date: 'Novembre – Décembre 2025',
        heuresComptees: 4,
        contexte: `TryHackMe est une plateforme d'apprentissage de la cybersécurité par la pratique, utilisée par plus de 3 millions d'utilisateurs à travers le monde. Elle propose des "rooms" — des environnements virtuels gamifiés où l'on apprend des concepts de sécurité en les pratiquant directement dans un navigateur.

J'ai suivi les parcours "Pre-Security" (bases des réseaux, du web et des systèmes du point de vue sécurité) et "Web Fundamentals" (HTTP, sessions, authentification, vulnérabilités web). Ces parcours couvrent des concepts fondamentaux accessibles mais rigoureux.`,
        apprentissages: `J'ai appris à identifier et comprendre des vulnérabilités web classiques dans un environnement contrôlé : XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), et injection de commandes. Le fait de les exploiter moi-même — dans un contexte d'apprentissage — m'a donné une compréhension bien plus profonde que n'importe quelle lecture théorique.

J'ai également appris le fonctionnement de HTTP en profondeur : headers, cookies, sessions, mécanismes d'authentification (Basic, Bearer, JWT). Des notions que j'utilisais comme une boîte noire avant, et que je comprends maintenant de l'intérieur.`,
        analyse: `Ce que j'ai apprécié particulièrement dans TryHackMe, c'est l'approche "learn by doing" : on n'est pas en mode lecture passive, on est immédiatement confronté à un problème à résoudre. Ce format correspond parfaitement à ma façon d'apprendre — j'ai besoin de toucher les choses pour les comprendre vraiment.

La room sur le XSS m'a particulièrement secoué. J'ai injecté un script dans un champ de commentaires d'une application de démonstration et j'ai vu une alerte s'afficher sur le profil d'un autre utilisateur simulé. Comprendre qu'on peut contrôler le navigateur de quelqu'un via un simple champ texte mal sanitizé — et que j'ai probablement écrit du code vulnérable de ce type dans le passé — a été un électrochoc.

Depuis cette expérience, j'applique systématiquement la sanitization des inputs et l'encodage des outputs dans mes projets. Ce n'est plus une option facultative mais un réflexe de développement. Je prévois de continuer ce parcours sur TryHackMe, notamment les rooms dédiées aux CTF (Capture the Flag), qui offrent des défis de niveau croissant.`,
        lienObjectif:
          "Cette pratique active renforce ma capacité à développer des applications sécurisées, compétence de plus en plus exigée dans les fiches de poste de développeur Full-Stack.",
        preuve:
          "Profil TryHackMe avec historique des rooms complétées et badges obtenus — accessible publiquement sur la plateforme.",
      },
    ],
  },

  // ─── THÈME 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'cloud-devops',
    titre: 'Cloud Computing & DevOps',
    icone: 'Cloud',
    couleur: 'blue',
    heuresTotal: 9,
    nbActivites: 2,
    lienForce: "Faiblesse à transformer en compétence différenciante — le cloud est incontournable en production",
    resume:
      'Formation AWS officielle via AWS Skill Builder et mise en pratique d\'un pipeline CI/CD complet sur un projet personnel hébergé sur Hetzner.',
    activites: [
      {
        id: 'aws-formation',
        titre: 'AWS Cloud Practitioner Essentials — Formation Officielle AWS Skill Builder',
        type: 'Formation en distanciel',
        typeBadge: 'distanciel',
        date: 'Septembre – Octobre 2025',
        heuresComptees: 6,
        contexte: `AWS Cloud Practitioner Essentials est le cours d'introduction officiel d'Amazon Web Services, disponible gratuitement via AWS Skill Builder. Il couvre les concepts fondamentaux du cloud (IaaS, PaaS, SaaS), les services AWS principaux (EC2, S3, RDS, Lambda, VPC), les modèles de tarification, et les bases de la sécurité cloud.

J'ai suivi ce cours dans la perspective de préparer la certification AWS Cloud Practitioner (CLF-C02), qui est l'entrée en matière pour toute spécialisation cloud. Le cours est structuré en modules avec des quiz intermédiaires et une évaluation finale.`,
        apprentissages: `J'ai appris à distinguer les modèles de responsabilité partagée d'AWS (ce qu'AWS gère, ce que le client gère), ce qui est fondamental pour comprendre les enjeux sécurité du cloud. J'ai également compris les différents types d'instances EC2, les stratégies de haute disponibilité (multi-AZ, Auto Scaling), et les principes du stockage cloud (S3, EBS, EFS).

La section sur AWS Lambda et le modèle serverless a été une révélation : l'idée de payer uniquement pour les millisecondes d'exécution, sans gérer de serveur, change radicalement l'économie du déploiement pour les petits projets et les startups.`,
        analyse: `Ce cours m'a donné un vocabulaire et un cadre conceptuel qui me manquaient pour parler du cloud de façon précise. Avant, je savais qu'EC2 était "des serveurs dans le cloud" et S3 "du stockage" — mais je n'aurais pas su expliquer la différence entre une région et une zone de disponibilité, ni pourquoi la réplication multi-AZ est importante pour la résilience.

Ce que j'ai trouvé particulièrement bien conçu dans ce cours, c'est la façon dont il explique la valeur business du cloud au-delà de l'aspect technique : l'élasticité (payer ce qu'on utilise), la résilience (disponibilité garantie par contrat), et la vitesse de mise sur le marché (pas besoin d'attendre l'achat et la livraison de serveurs physiques). Ces arguments me permettent maintenant d'expliquer à un non-technicien pourquoi une architecture cloud est pertinente.

Un point critique que j'ai appris et que je n'aurais pas anticipé : la sécurité cloud ne s'improvise pas. Des erreurs courantes — laisser un bucket S3 en accès public ou hardcoder des credentials AWS dans le code — ont causé des incidents majeurs dans des entreprises de toutes tailles. Cette formation m'a sensibilisé à ces pièges avant même d'utiliser AWS en production.

En lien avec mon projet professionnel : la certification AWS Cloud Practitioner est souvent citée comme "must have" dans les offres d'emploi de développeur Full-Stack. Avoir suivi ce cours est la première étape vers la certification que je compte obtenir avant la fin de mon stage.`,
        lienObjectif:
          "Le cloud est devenu incontournable dans les infrastructures modernes. Cette formation m'équipe pour avoir des conversations pertinentes avec les équipes DevOps et pour comprendre l'environnement dans lequel mon code s'exécutera.",
        preuve:
          "Badge de complétion AWS Skill Builder — attestation numérique disponible sur le profil AWS (accessible sur demande).",
      },
      {
        id: 'cicd-github',
        titre: 'Projet Personnel — Pipeline CI/CD Complet avec GitHub Actions',
        type: 'Projet pratique',
        typeBadge: 'projet',
        date: 'Décembre 2025',
        heuresComptees: 3,
        contexte: `Dans le cadre de mon projet personnel EphécTrack, j'ai décidé de mettre en place un pipeline d'intégration continue et de déploiement continu (CI/CD) complet avec GitHub Actions. L'objectif était de passer d'un déploiement manuel via SFTP à un déploiement automatisé déclenché par chaque push sur la branche main.

Le pipeline comprend : exécution des tests automatisés (Jest), analyse statique du code (ESLint), build de l'application, et déploiement sur un VPS chez Hetzner via SSH avec clés chiffrées.`,
        apprentissages: `J'ai appris à écrire des fichiers de workflow YAML pour GitHub Actions, à gérer les secrets dans GitHub (variables d'environnement sécurisées pour les credentials SSH et les clés d'API), et à structurer un pipeline en jobs dépendants — les tests doivent passer avant que le déploiement ne soit déclenché.

J'ai également découvert les GitHub Actions marketplace : des actions pré-construites pour des tâches courantes (checkout du code, setup de Node.js, cache des dépendances). Réutiliser ces actions plutôt que de tout coder from scratch m'a appris l'importance de ne pas réinventer la roue en DevOps.`,
        analyse: `Cette expérience pratique a consolidé de façon spectaculaire ce que j'avais appris dans la formation AWS. Voir un pipeline s'exécuter en temps réel — les logs s'affichant étape par étape dans l'interface GitHub — et recevoir une notification quand le déploiement est terminé, c'est une satisfaction immédiate qui rend l'apprentissage très concret.

Ce qui m'a surpris, c'est la quantité de problèmes imprévus que j'ai rencontrés : permissions SSH incorrectes, variables d'environnement non accessibles dans certaines étapes, déploiement qui échoue silencieusement. Résoudre ces problèmes un par un, en lisant la documentation et les logs, m'a appris plus sur CI/CD que n'importe quelle vidéo théorique.

J'ai également réalisé l'importance des tests automatisés dans ce contexte. Sans tests, un pipeline CI/CD n'est qu'un déploiement automatisé — potentiellement en production avec des bugs. Avec des tests, c'est un filet de sécurité qui permet de déployer avec confiance. Cette conviction a changé ma façon d'écrire du code : je pense maintenant à la testabilité dès la conception.

En termes de compétences acquises, je suis passé d'une vision floue du CI/CD ("c'est ce que fait l'équipe DevOps") à une compréhension concrète de son fonctionnement et de sa valeur. Je peux maintenant, dans un contexte professionnel, participer à la discussion sur l'architecture d'un pipeline et contribuer à sa maintenance.`,
        lienObjectif:
          "Le CI/CD est une compétence attendue dans les équipes de développement modernes. Cette maîtrise pratique me distingue des candidats qui n'ont qu'une connaissance théorique du sujet.",
        preuve:
          "Repository GitHub public avec le fichier .github/workflows/deploy.yml visible — lien disponible dans la section Projets du CV.",
      },
    ],
  },

  // ─── THÈME 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'intelligence-artificielle',
    titre: "Intelligence Artificielle & Innovation",
    icone: 'Brain',
    couleur: 'purple',
    heuresTotal: 8,
    nbActivites: 1,
    lienForce: "Curiosité pour les technologies émergentes — l'IA s'intègre de plus en plus dans le développement standard",
    resume:
      "Participation active au hackathon IA de l'EPHEC (8h) : conception et développement d'un prototype de présélection RH basé sur GPT-4, classé 2ème sur 20 équipes.",
    activites: [
      {
        id: 'hackathon-ia',
        titre: 'Hackathon IA — EPHEC Challenge Tech 2025',
        type: 'Hackathon en présentiel',
        typeBadge: 'hackathon',
        date: 'Novembre 2025',
        heuresComptees: 8,
        contexte: `L'EPHEC Challenge Tech est un hackathon annuel organisé par l'école en partenariat avec des entreprises tech belges. L'édition 2025 était centrée sur l'intelligence artificielle et ses applications pratiques dans le monde professionnel. Environ 80 étudiants, répartis en équipes de 4, avaient 8 heures pour concevoir et prototyper une solution innovante à un problème réel proposé par les sponsors.

Notre équipe de 4 personnes (2 BAC 3 TI et 2 BAC 3 Gestion) a choisi le défi proposé par une PME bruxelloise : développer un outil d'analyse automatique de candidatures pour aider les RH à présélectionner les CV selon des critères objectifs définis par le client, via l'API OpenAI (GPT-4).`,
        apprentissages: `J'ai appris à utiliser l'API OpenAI de façon pragmatique : prompt engineering, gestion des tokens, parsing des réponses JSON structurées. J'ai aussi découvert les limites et les risques de ces systèmes — notre prototype avait des biais liés aux données d'entraînement qu'on n'avait pas anticipés, ce qui a ouvert un débat riche lors de la présentation finale.

Sur le plan technique, j'ai acquis de l'expérience en développement rapide sous pression : en 8 heures, on ne peut pas faire quelque chose de parfait, mais on peut faire quelque chose qui fonctionne et qui démontre la valeur du concept. J'ai appris à prioriser brutalement les fonctionnalités selon leur impact sur la démonstration finale.`,
        analyse: `Ce hackathon a été une des expériences les plus formatrices de mon année. Non pas parce que nous avons gagné (nous avons terminé 2ème), mais parce qu'il m'a confronté à des dynamiques de travail que je ne rencontre pas en cours : pression temporelle extrême, décisions rapides, collaboration intense avec des profils différents.

Ce qui m'a le plus appris, c'est la négociation des fonctionnalités en temps réel. À 14h, avec 4 heures restantes, il fallait décider ce qu'on allait couper pour s'assurer que le prototype fonctionnerait. J'ai proposé de supprimer une fonctionnalité d'export PDF sur laquelle j'avais travaillé 2 heures — une décision difficile mais qui s'est avérée juste. Apprendre à abandonner une création pour servir le projet, c'est une maturité professionnelle qu'on acquiert rarement en cours.

La présentation finale a aussi été révélatrice : le jury (des professionnels RH et des développeurs IA) a immédiatement pointé les biais potentiels de notre système. Cette critique constructive m'a appris à penser aux implications éthiques d'un système IA dès sa conception, pas comme une réflexion a posteriori.

En lien avec mon projet professionnel : comprendre comment intégrer des APIs d'IA dans des applications web est devenu une compétence de base pour tout développeur Full-Stack. Ce hackathon m'a donné cette maîtrise pratique, tout en me rappelant les responsabilités qui l'accompagnent.`,
        lienObjectif:
          "L'IA générative s'intègre de plus en plus dans les applications web standard. Avoir une expérience pratique de développement avec ces APIs me positionne favorablement sur le marché du travail.",
        preuve:
          "Photo de l'équipe lors de la remise des prix — badge nominatif de participant — classement officiel (2ème place sur 20 équipes) disponible sur le site de l'EPHEC.",
      },
    ],
  },

  // ─── THÈME 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'gestion-projet',
    titre: 'Gestion de Projet & Méthodes Agiles',
    icone: 'Layout',
    couleur: 'green',
    heuresTotal: 6,
    nbActivites: 2,
    lienForce: "Compétence transversale essentielle pour travailler efficacement en équipe de développement",
    resume:
      "Certification Scrum Fundamentals Certified (SFC) en distanciel et visite d'entreprise chez Accenture Belgique sur l'Agile@Scale (SAFe).",
    activites: [
      {
        id: 'scrum-certification',
        titre: 'Certification Scrum Fundamentals Certified (SFC) — SCRUMstudy',
        type: 'Certification individuelle',
        typeBadge: 'certification',
        date: 'Octobre 2025',
        heuresComptees: 4,
        contexte: `SCRUMstudy propose la certification Scrum Fundamentals Certified (SFC), une certification reconnue destinée à valider les connaissances de base sur le framework Scrum. Elle couvre les rôles (Product Owner, Scrum Master, Équipe de développement), les événements (Sprint, Daily Scrum, Sprint Review, Sprint Retrospective) et les artefacts (Product Backlog, Sprint Backlog, Increment).

J'ai préparé cette certification en 3 heures d'étude du SBOK Guide (Scrum Body of Knowledge), puis passé l'examen en ligne : 50 questions en 60 minutes. Score obtenu : 82%.`,
        apprentissages: `J'ai appris les subtilités du framework Scrum qui m'échappaient malgré une utilisation partielle en projets de groupe : la différence précise entre un Product Backlog et un Sprint Backlog, le rôle exact du Scrum Master (facilitateur, pas manager), et l'importance de la Definition of Done comme outil de qualité collective.

J'ai également compris pourquoi Scrum échoue souvent en pratique : non pas parce que le framework est défaillant, mais parce qu'il est mal compris ou appliqué de façon superficielle — on fait du "Scrum But" : du Scrum sans les cérémonies, sans le Product Owner réel, sans la transparence.`,
        analyse: `Cette certification m'a donné un cadre de référence précis pour les méthodes Agile, que j'utilisais de façon intuitive en cours sans en comprendre les fondements théoriques. Avoir ce bagage théorique me permet maintenant de m'adapter plus rapidement quand j'intègre une équipe Scrum : je comprends le vocabulaire, je sais ce qu'on attend de moi lors d'un Daily Scrum, et je comprends pourquoi la Sprint Review est ouverte aux parties prenantes.

Ce que j'ai trouvé le plus utile dans cette préparation, c'est la documentation des anti-patterns Scrum — les façons de mal faire que le guide décrit explicitement. Dans mes projets de groupe à l'EPHEC, je reconnais maintenant des erreurs classiques que nous commettions : des sprints qui "durent indéfiniment", un Product Backlog jamais réellement priorisé, des rétrospectives expédiées en 5 minutes.

En lien avec mon projet professionnel : pratiquement toutes les offres d'emploi de développeur Full-Stack mentionnent Agile/Scrum. Avoir une certification et une compréhension profonde du framework — pas juste avoir "entendu parler de Scrum" — est un avantage tangible lors d'un entretien technique.`,
        lienObjectif:
          "Scrum est le standard de facto dans la majorité des équipes de développement logiciel. Cette certification valide ma compréhension et facilite mon intégration dans une équipe professionnelle dès le premier jour.",
        preuve:
          "Certificat SFC numérique signé par SCRUMstudy — numéro de certification vérifiable sur le site officiel SCRUMstudy.",
      },
      {
        id: 'visite-accenture',
        titre: "Visite d'Entreprise — Accenture Belgique : Agile@Scale en Pratique",
        type: "Visite d'entreprise",
        typeBadge: 'visite',
        date: 'Septembre 2025',
        heuresComptees: 2,
        contexte: `Dans le cadre du partenariat de l'EPHEC avec des entreprises tech, un groupe d'une quinzaine d'étudiants BAC 3 a visité les bureaux d'Accenture à Bruxelles. La visite incluait une présentation des activités technologiques d'Accenture en Belgique, une session Q&A avec des développeurs et des project managers, et une démonstration de leur approche Agile@Scale — le framework SAFe (Scaled Agile Framework) pour des projets impliquant des centaines de personnes.`,
        apprentissages: `J'ai appris que le Scrum classique fonctionne bien pour une équipe de 5-10 personnes, mais qu'il faut des frameworks spécifiques (SAFe, LeSS) quand on coordonne 50+ équipes sur un même produit. Cette dimension de "scalabilité" de l'Agile m'était totalement inconnue auparavant.

J'ai également eu une conversation avec un développeur senior qui m'a expliqué son quotidien : les outils utilisés (Jira, Confluence, Azure DevOps), les types de réunions, la façon dont les décisions techniques remontent dans la hiérarchie. Cette vision du "vrai quotidien" d'un développeur en grande entreprise est précieuse pour calibrer mes attentes.`,
        analyse: `Cette visite a été une mise en perspective importante : les pratiques qu'on apprend en cours — et même ce que je viens de certifier avec Scrum — sont des versions simplifiées de ce qui se passe réellement dans les grandes organisations. SAFe est un monde en soi, avec sa propre terminologie et ses propres cérémonies.

Ce qui m'a le plus frappé, c'est le gap entre l'idéal Agile (auto-organisation, rapidité, simplicité) et la réalité d'une grande entreprise (processus imposés, contraintes légales, stakeholders multiples). Cela ne signifie pas que l'Agile échoue en grande structure, mais qu'il faut l'adapter intelligemment au contexte. Un développeur qui comprend cette nuance sera plus efficace qu'un puriste qui applique le framework à la lettre.

Cette expérience a aussi confirmé que je préfère, à court terme, travailler dans une structure plus petite où l'Agile est plus pur et où l'impact individuel est plus direct. Les grandes entreprises comme Accenture offrent des opportunités de formation et de mobilité internationale — des éléments à reconsidérer dans ma trajectoire à moyen terme.`,
        lienObjectif:
          "Comprendre les dynamiques Agile en entreprise réelle — pas juste en théorie — me rend plus crédible lors des entretiens et plus efficace dès le premier jour de mon stage.",
        preuve:
          "Confirmation de participation signée par le responsable des partenariats EPHEC — photo de groupe lors de la visite.",
      },
    ],
  },

  // ─── THÈME 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'reseaux-systemes',
    titre: 'Réseaux & Administration Système',
    icone: 'Network',
    couleur: 'orange',
    heuresTotal: 7,
    nbActivites: 2,
    lienForce: "Compétence fondamentale — comprendre l'infrastructure pour mieux développer et déployer",
    resume:
      "Mise en place d'un laboratoire réseau personnel avec pfSense et VLANs, et participation au Job Day EPHEC pour rencontrer des professionnels IT.",
    activites: [
      {
        id: 'pfsense-lab',
        titre: 'Projet Personnel — Lab Réseau avec pfSense, VLANs & WireGuard',
        type: 'Projet pratique',
        typeBadge: 'projet',
        date: 'Novembre – Décembre 2025',
        heuresComptees: 4,
        contexte: `J'ai monté un laboratoire réseau sur du matériel récupéré — un vieux PC reconverti en firewall pfSense et un switch manageable 8 ports — pour apprendre les concepts réseau de façon pratique. L'objectif était de segmenter mon réseau domestique en VLANs distincts : un VLAN pour mes machines de développement, un VLAN pour les appareils IoT, et un VLAN invité, chacun avec des règles de firewall spécifiques.

pfSense est un firewall/routeur open-source basé sur FreeBSD, très utilisé dans les PME et apprécié pour sa documentation complète et ses fonctionnalités avancées.`,
        apprentissages: `J'ai appris à configurer des VLANs sur un switch manageable (protocole 802.1Q), à créer des règles de firewall dans pfSense pour contrôler le trafic inter-VLAN, et à mettre en place un serveur DHCP par VLAN avec des plages d'adresses distinctes.

J'ai également configuré un tunnel WireGuard pour accéder à mon réseau domestique depuis l'extérieur de façon sécurisée, sans exposer de ports directement sur internet. Cette compétence est directement applicable dans un contexte professionnel.`,
        analyse: `Ce projet m'a appris quelque chose que les cours de réseaux ont du mal à transmettre : la différence entre comprendre la théorie et vraiment maîtriser la pratique. J'ai passé une heure à déboguer pourquoi mes appareils IoT n'avaient pas accès à internet malgré une règle de firewall qui semblait correcte — la solution était une subtilité dans l'ordre des règles pfSense que je n'avais pas anticipée.

Ce type de débogage réseau — lire des logs de firewall, utiliser tcpdump pour capturer du trafic, comprendre pourquoi un paquet est droppé — m'a développé une capacité d'analyse que je n'avais pas avant. Je vois maintenant les applications web différemment : chaque requête HTTP que mon code envoie traverse une infrastructure réseau complexe, et comprendre cette infrastructure me rend meilleur développeur.

Un apprentissage inattendu : j'ai réalisé à quel point la sécurité réseau et la sécurité applicative sont liées. Un firewall bien configuré ne compense pas une application vulnérable, et vice versa. La sécurité est un système, pas une couche isolée — cette vision systémique est précieuse dans mon projet professionnel.

En lien avec mon projet professionnel : même si je ne veux pas devenir administrateur réseau, avoir des bases solides me permet de collaborer efficacement avec les équipes infrastructure, de comprendre les contraintes de déploiement, et de diagnostiquer des problèmes à la frontière de l'applicatif et du réseau.`,
        lienObjectif:
          "Les bases réseau sont indispensables pour un développeur Full-Stack qui déploie ses applications dans des environnements cloud complexes. Ce projet pratique renforce ma crédibilité technique au-delà du seul code applicatif.",
        preuve:
          "Capture d'écran de l'interface pfSense avec la configuration VLAN et les règles de firewall — diagramme réseau du lab disponible sur demande.",
      },
      {
        id: 'job-day',
        titre: 'Job Day EPHEC — Rencontres Professionnelles IT',
        type: 'Job Day',
        typeBadge: 'événement',
        date: 'Octobre 2025',
        heuresComptees: 3,
        contexte: `Le Job Day de l'EPHEC est un événement annuel où des entreprises partenaires viennent rencontrer les étudiants, présenter leurs activités et proposer des stages ou emplois. L'édition 2025 réunissait une vingtaine d'entreprises dans les secteurs IT, conseil et services — dont Proximus, Sopra Steria, BNP Paribas, Odoo et plusieurs PME bruxelloises.

J'ai préparé une version à jour de mon CV et une présentation de 2 minutes de mon profil avant l'événement. J'ai rencontré des représentants de 7 entreprises différentes et collecté des informations précieuses sur le marché du travail belge.`,
        apprentissages: `J'ai appris à pitcher mon profil de façon concise et pertinente selon l'interlocuteur. Avec un recruteur RH, j'insistais sur mes soft skills et ma progression académique. Avec un développeur technique, je parlais des technologies maîtrisées et des projets concrets réalisés. Adapter son discours à son audience est une compétence qui s'apprend dans la pratique.

J'ai également obtenu des informations très concrètes sur le marché du travail belge : les salaires de début de carrière pour un développeur junior (fourchette 2.800 – 3.500€ brut), les compétences les plus demandées (TypeScript, cloud, tests automatisés), et les pratiques de recrutement (tests techniques, entretiens comportementaux).`,
        analyse: `Ce Job Day a été une confrontation salutaire avec la réalité du marché du travail. Certaines conversations m'ont donné confiance : les recruteurs étaient intéressés par mon profil, notamment la combinaison développement web + cloud. D'autres m'ont clairement montré mes lacunes : plusieurs entreprises cherchaient des profils avec une expérience significative en TypeScript que je n'ai pas encore.

Ce qui m'a le plus frappé, c'est la différence entre les critères de sélection des grandes entreprises et des PME. Les grandes ont des processus formalisés avec plusieurs étapes et des critères très précis. Les PME sont plus flexibles, valorisent la personnalité et la motivation, et sont prêtes à investir dans la formation.

Cette observation confirme mon plan : cibler pour mon stage de fin d'études une PME tech ou une scale-up où je pourrai apprendre rapidement dans un environnement agile, plutôt qu'une grande entreprise où les premiers mois seraient plus administratifs.

En lien avec mon projet professionnel : ce Job Day m'a donné une vision réaliste du marché. Je sais maintenant ce que les employeurs attendent, ce que je dois encore développer, et comment me présenter de façon convaincante.`,
        lienObjectif:
          "Cette expérience directe avec le marché du travail affine mon projet professionnel et me prépare concrètement aux entretiens de stage et d'embauche.",
        preuve:
          "Badge nominatif du Job Day EPHEC — liste de présence nominative — cartes de visite des recruteurs rencontrés.",
      },
    ],
  },

  // ─── THÈME 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'communication',
    titre: 'Communication & Développement Personnel',
    icone: 'Users',
    couleur: 'yellow',
    heuresTotal: 5,
    nbActivites: 2,
    lienForce: "Faiblesse identifiée — améliorer ma communication orale et ma présence professionnelle",
    resume:
      "Participation au salon de l'emploi BeJobs Bruxelles 2025 et à une conférence EPHEC sur la communication assertive en équipe technique.",
    activites: [
      {
        id: 'bejobs',
        titre: 'Salon de l\'Emploi BeJobs — Bruxelles 2025',
        type: 'Salon professionnel',
        typeBadge: 'salon',
        date: 'Novembre 2025',
        heuresComptees: 3,
        contexte: `BeJobs est le principal salon de l'emploi de Bruxelles, réunissant chaque année plus de 200 entreprises et attirant des milliers de visiteurs. L'édition 2025 comportait un espace dédié aux profils IT et tech, avec des stands d'entreprises comme Google Belgium, Microsoft, Deloitte Digital et de nombreuses startups bruxelloises.

J'y suis allé avec l'objectif précis de rencontrer des entreprises qui recrutent des développeurs Full-Stack juniors ou des stagiaires, et de récupérer des informations sur les processus de recrutement et les compétences recherchées en 2025-2026.`,
        apprentissages: `J'ai appris à gérer mon énergie lors d'un salon : après 2 heures de conversations intenses, la fatigue s'installe et la qualité des échanges diminue. J'ai réalisé l'importance de prioriser les stands les plus pertinents en premier, quand on est encore frais et concentré.

J'ai aussi appris que le réseautage lors d'un salon n'est pas linéaire : certaines des conversations les plus utiles ont été spontanées, avec des personnes rencontrées dans les allées plutôt qu'aux stands. L'ouverture et la curiosité sincère pour l'interlocuteur ouvrent des portes inattendues.`,
        analyse: `Ce salon m'a permis de confronter mon image de moi-même à la perception extérieure. Quand je présentais mon parcours, les réactions variaient : certains recruteurs s'animaient sur mes projets personnels, d'autres étaient plus intéressés par mon stage précédent. Ces variations m'ont appris à lire rapidement ce qui intéresse mon interlocuteur et à adapter ma présentation en temps réel.

Un moment particulièrement formateur : j'ai rencontré une développeuse senior qui m'a posé une question technique difficile lors d'une conversation informelle. Je n'ai pas su répondre parfaitement, mais j'ai su reconnaître ma limite et expliquer comment je chercherais la réponse. Elle m'a dit que cette honnêteté était plus appréciée que d'essayer de bluffer. Cela m'a appris comment les professionnels expérimentés évaluent les juniors : pas sur ce qu'ils savent déjà, mais sur comment ils apprennent et réagissent à l'inconnu.

Ce salon m'a aussi montré l'importance du réseautage professionnel actif — pas juste envoyer des CV en ligne, mais se montrer, parler aux gens, créer des connexions humaines. J'ai ajouté plusieurs personnes rencontrées sur LinkedIn le jour même.`,
        lienObjectif:
          "Le réseautage professionnel est une compétence clé pour trouver des opportunités de stage et d'emploi. Cette expérience pratique m'a appris à me présenter et à créer des connexions dans un contexte professionnel réel.",
        preuve:
          "Badge d'entrée nominatif BeJobs 2025 — confirmation d'inscription numérique par email.",
      },
      {
        id: 'conf-communication',
        titre: "Conférence EPHEC — Communication Assertive en Équipe Technique",
        type: 'Conférence en présentiel',
        typeBadge: 'conférence',
        date: 'Décembre 2025',
        heuresComptees: 2,
        contexte: `Cette conférence était organisée dans le cadre du programme "Soft Skills" de l'EPHEC, en partenariat avec un cabinet de coaching spécialisé en communication professionnelle. L'intervenante, coach certifiée avec 15 ans d'expérience dans des équipes tech, abordait un sujet tabou : comment communiquer de façon constructive — signaler un bug introduit par un collègue, dire non à une demande irréaliste, exprimer un désaccord technique sans créer de conflit.`,
        apprentissages: `J'ai appris le modèle de communication assertive en 4 étapes adapté au contexte tech : décrire les faits objectifs, exprimer l'impact observé, formuler un besoin, proposer une demande concrète. Ce cadre est directement applicable dans des code reviews, des réunions de sprint ou des discussions d'architecture.

J'ai également appris l'importance de séparer la critique du code de la critique de la personne — ce qui semble évident dit ainsi, mais qui est difficile à mettre en pratique quand on est fatigué ou sous pression.`,
        analyse: `Cette conférence a répondu à un besoin que j'avais identifié dans mon auto-analyse : je suis à l'aise avec la communication écrite et les discussions techniques en petit groupe, mais je me retrouve parfois coincé dans des situations de désaccord professionnel. Je préfère éviter le conflit plutôt que de l'affronter de façon constructive — un pattern qui peut être problématique dans un contexte de travail d'équipe.

Ce qui m'a le plus frappé, c'est la distinction entre agressivité, passivité et assertivité. J'ai réalisé que je tombe souvent dans la passivité : j'accepte des décisions avec lesquelles je ne suis pas d'accord pour éviter le conflit, puis je me retrouve frustré. L'assertivité — exprimer clairement mon point de vue tout en respectant celui de l'autre — est la voie du milieu que je dois apprendre à emprunter.

L'intervenante a proposé des exercices pratiques en sous-groupes qui m'ont mis en situation : jouer le rôle de quelqu'un qui dit non à une demande irréaliste, ou qui signale poliment mais fermement un problème de qualité de code. Ces simulations sont inconfortables mais précieuses. Elles m'ont donné des scripts mentaux que je pourrai réutiliser dans de vraies situations professionnelles.

En lien avec mon projet professionnel : la communication est la compétence qui fait souvent la différence entre un bon développeur et un grand développeur. Les compétences techniques s'apprennent relativement vite ; la capacité à communiquer efficacement, à gérer les conflits de façon constructive — c'est ce qui permet d'évoluer vers des rôles de Tech Lead.`,
        lienObjectif:
          "La communication efficace est une compétence transversale indispensable pour évoluer dans ma carrière. Travailler cette faiblesse identifiée est un investissement direct dans mon projet professionnel long terme.",
        preuve:
          "Attestation de participation signée par l'EPHEC — présence sur la liste nominative du programme Soft Skills.",
      },
    ],
  },
]
