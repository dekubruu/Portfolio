export const syntheseGlobale = `This year I organized my skills development around six themes that reflect both my technical interests and the professional direction I am building toward. Rather than following a broad academic checklist, each activity was chosen because it filled a specific gap or confirmed a specific direction — systems and Linux, applied cybersecurity, professional discovery, cloud infrastructure, project management, and transversal safety skills.

These activities complemented my internship at the Motion Picture Association and my academic training at EPHEC. Together, they document a progression that is concrete, hands-on, and coherent with my goal of becoming a full-stack developer with a strong security dimension.`
export const themes = [
  // ─── THEME 1 ──────────────────────────────────────────────────────────────────
  {
    id: 'developpement-web',
    titre: 'Developepement Linux',
    icone: 'Code2',
    couleur: 'cyan',
    heuresTotal: 10,
    lienForce: "Technical web development skill — my primary identified strength",
    resume:
      'Hackathon Electro Upcycling Challenge 2025 : Retour vers le futur !',
    activites: [
      {
        id: 'Hackathon 2025 EPhec',
        titre: 'Hackathon Electro Upcycling Challenge 2025 : Retour vers le futur !',
        type: 'Hackathon',
        typeBadge: 'Ephec',
        date: '24 october 2025',
        heuresComptees: 10,
         contexte: `I participated in the Upscaling 2025 Hackathon organized by EPHEC and Wallonie Entreprendre in Louvain-la-Neuve. The objective was to modernize old electronic devices while preserving their original design. Our team worked on transforming a non-functional PlayStation 2 into a modern media server using a Raspberry Pi 2. This activity represented a hands-on learning opportunity in a multidisciplinary and time-constrained environment.`,

      apprentissages: `During this 48-hour project, I developed technical skills in Linux system installation and configuration using LibreELEC, as well as deploying a media server with Kodi. I improved my troubleshooting abilities by resolving boot issues, analyzing logs, and optimizing performance on limited hardware. I also worked on network configuration (WiFi and Ethernet).

      On the transversal side, I strengthened my teamwork and communication skills by collaborating with profiles from electronics and design. The final presentation improved my ability to explain technical concepts to a non-technical audience.`,

      analyse: `This experience required strong adaptability and problem-solving under time pressure. Working with constrained hardware like the Raspberry Pi 2 forced me to optimize resources and think critically about system performance.

      It also highlighted the importance of collaboration in multidisciplinary teams. Each member contributed different expertise to achieve a functional result.

      Finally, this project made me realize that innovation does not depend on new equipment. Technological upcycling combines creativity, technical skills, and sustainability. It changed how I approach projects by integrating both technical efficiency and resource awareness.`,

      lienObjectif:
        "This activity directly supports my goal of working in IT infrastructure and system administration. It gave me practical experience with Linux systems, troubleshooting, and performance optimization — key skills for technical support and system roles. It also aligns with my objective of building a homelab using recycled hardware.",

      preuve:
        "Functional media server demonstrated at the end of the hackathon (PS2 + Raspberry Pi 2 + Kodi), with live presentation.",
    },
    ],
  },

// ─── THEME 2 ──────────────────────────────────────────────────────────────────
{
  id: 'cybersecurite',
  titre: 'Cybersecurity',
  icone: 'Shield',
  couleur: 'orange',
  heuresTotal: 10,
  nbActivites: 1,
  lienForce: "Identified weakness — strengthening my security awareness in development practices",
  resume:
    "Participation in the Cybersecurity Challenge Belgium (twice), focusing on hands-on security problem solving.",

  activites: [
    {
      id: 'ccb-challenge',
      titre: 'Cybersecurity Challenge Belgium (2 participations)',
      type: 'Competition',
      typeBadge: 'challenge',
      date: '2025',
      heuresComptees: 10,

      contexte: `I participated twice in the Cybersecurity Challenge Belgium, a national competition designed to introduce students to real-world cybersecurity problems. The event is based on a Capture The Flag (CTF) format, where participants solve technical challenges in areas such as web security, cryptography, reverse engineering, and networking.

The objective was to gain hands-on experience in cybersecurity through practical exercises rather than theoretical learning.`,

      apprentissages: `Through these challenges, I learned to identify common vulnerabilities such as SQL injections, insecure authentication mechanisms, and misconfigured systems. I also practiced basic cryptography concepts, network analysis, and the use of tools to inspect and manipulate data.

More importantly, I developed a security-oriented mindset: understanding how an attacker thinks and how small mistakes in code or configuration can be exploited.`,

      analyse: `This experience highlighted a gap in my initial approach to development: I was primarily focused on functionality, often overlooking security aspects. The challenges forced me to think differently — not as a developer building features, but as someone trying to break them.

One key realization was how simple vulnerabilities can lead to major security breaches. In several exercises, small oversights (such as poor input validation) allowed complete system compromise.

Participating twice allowed me to see clear progress: during the second participation, I approached problems more methodically, used tools more efficiently, and understood faster where vulnerabilities could be located.

This hands-on approach was far more impactful than theoretical courses, as it required active problem solving and experimentation.`,

      lienObjectif:
        "Although I do not aim to become a cybersecurity specialist, this experience is essential for my goal as a Full-Stack developer. It helps me integrate security into my development process and avoid common vulnerabilities, which is increasingly expected in professional environments.",

      preuve:
        "Participation records in the Cybersecurity Challenge Belgium (two editions), with solved challenges on the platform.",
    },
  ],
},

// ─── THEME 3 ──────────────────────────────────────────────────────────────────
{
  id: 'cloud-devops',
  titre: 'Découverte professionnelle',
  icone: 'Cloud',
  couleur: 'blue',
  heuresTotal: 10,
  nbActivites: 2,
  lienForce: "Professional discovery — understanding how large-scale software companies and sector-specific IT ecosystems operate",
  resume:
    "Visits and presentations of Odoo (software company) and SETT Expo (Education Technology trade show in Namur).",

  activites: [
    {
      id: 'visite-odoo',
      titre: 'Company Visit — Odoo & LabOdoo Presentation',
      type: 'Company Visit',
      typeBadge: 'visit',
      date: '20 September 2025',
      heuresComptees: 4,

      contexte: `I attended a company visit and presentation at Odoo, a leading Belgian and international software company, at its headquarters in Louvain-la-Neuve. The session included an introduction to the company, its products, its development philosophy, and a presentation of LabOdoo, their innovation and experimentation space.

This visit provided insight into a real professional software engineering environment and how a large-scale tech company operates internally.`,

      apprentissages: `I learned how Odoo develops and maintains a global ERP system with a modular architecture, integrating multiple business applications such as CRM, accounting, HR, and e-commerce.

I discovered their engineering practices, including Python-based development, frequent release cycles, and a strong focus on scalability, maintainability, testing, and collaboration within large teams.`,

      analyse: `This visit gave me a concrete understanding of industrial-scale software development compared to academic projects. I observed how Odoo manages a unified codebase while continuously evolving its features, which requires strong organization and strict development standards.

I also understood that technical success is strongly linked to business understanding, as Odoo’s value lies in solving real-world business problems through integrated and user-friendly software.`,

      lienObjectif:
        "This experience supports my goal of becoming a Full-Stack developer by exposing me to real-world development practices, team organization, and the requirements of building scalable and production-ready applications.",

      preuve:
        "Participation in the Odoo company visit — attendance confirmed via official registration and presence at the event.",
    },

    {
      id: 'sett-expo-namur',
      titre: 'SETT Expo — Education Technology Trade Show (Namur)',
      type: 'Trade Show Visit',
      typeBadge: 'event',
      date: '29 January 2026',
      heuresComptees: 8,

      contexte: `I visited the SETT (Salon Education Tech) at Namur Expo, a professional trade show focused on educational technologies. The event gathers EdTech companies, teachers, IT managers from schools, and industry professionals.

The objective of my visit was to explore IT solutions applied to the education sector and to broaden my understanding of how technology is deployed in real-world environments outside traditional software development.`,

      apprentissages: `I discovered various EdTech solutions such as interactive whiteboards, AI-based educational tools, and digital learning platforms used in primary and secondary education.

I attended product demonstrations and discussed with both technical and commercial representatives, gaining insight into how educational IT systems are designed, deployed, and maintained in real environments.`,

      analyse: `This visit highlighted how IT solutions must be adapted to non-technical users and constrained environments. Unlike academic or enterprise systems, educational IT must prioritize usability, reliability, and ease of deployment across heterogeneous infrastructures.

It also showed me the importance of understanding end-users’ needs, especially in sectors where technology must be accessible to non-expert users such as teachers and students.`,

      lienObjectif:
        "This experience strengthens my infrastructure and IT engineering perspective by showing how systems are deployed in complex real-world environments. It also reinforces my interest in user-centered IT solutions and operational reliability.",

      preuve:
        "Participation in the SETT Expo visit at Namur Expo — attendance through on-site presence and engagement with exhibitors.",
    },
  ],
},

// ─── THEME 4 ──────────────────────────────────────────────────────────────────
{
  id: 'intelligence-artificielle',
  titre: 'Cloud computing',
  icone: 'Brain',
  couleur: 'purple',
  heuresTotal: 2,
  nbActivites: 1,
  lienForce: "Understanding cloud infrastructure — essential for modern IT environments",
  resume:
    "Conference on Microsoft 365 and Azure infrastructure presented by an IT professional from Axentys.",

  activites: [
    {
      id: 'conference-azure',
      titre: 'Conference — Cloud with M365 & Azure Infrastructure',
      type: 'In-Person Conference',
      typeBadge: 'conference',
      date: '3 November 2025',
      heuresComptees: 2,

      contexte: `I attended a conference on Microsoft 365 and Azure Infrastructure, given by Kevin Keurvels from Axentys, a company specialized in IT services and support for professionals. The session took place in an academic context and aimed to introduce students to real-world cloud environments used in companies.

The presentation focused on how organizations use Microsoft cloud solutions to manage infrastructure, users, and services.`,

      apprentissages: `I learned how Microsoft 365 and Azure are used together to build and manage enterprise IT infrastructures. This includes user management (Azure Active Directory), cloud services deployment, and integration between tools such as Outlook, Teams, and SharePoint.

I also gained a better understanding of how cloud infrastructure simplifies system administration, improves scalability, and supports remote work environments.`,

      analyse: `This conference helped me better understand how cloud solutions are concretely used in companies, beyond theoretical concepts. It showed me that tools like Azure are not only technical platforms but also central elements of business operations.

What stood out to me was the importance of identity and access management in cloud environments. Managing users, permissions, and security policies is a critical aspect of IT infrastructure.

I also realized that cloud computing is not optional anymore — it is a standard in most companies. Understanding these environments is therefore essential, even for developers.`,

      lienObjectif:
        "This experience supports my goal of working in IT infrastructure and development. It gives me insight into real-world cloud environments and helps me understand how applications are deployed, managed, and secured in professional contexts.",

      preuve:
        "Official attendance confirmation email for the conference — including speaker name, topic, date, and duration.",
    },
  ],
},

// ─── THEME 5 ──────────────────────────────────────────────────────────────────
{
  id: 'gestion-projet',
  titre: 'IT Education Event',
  icone: 'Layout',
  couleur: 'green',
  heuresTotal: 10,
  nbActivites: 1,
  lienForce: "Project-based learning — developing technical and teamwork skills in real conditions",
  resume:
    "Participation in the Upscaling 2025 Hackathon: transforming a PlayStation 2 into a modern media server.",

  activites: [
    {
      id: 'hackathon-upscaling',
      titre: 'Hackathon — Upscaling 2025 (EPHEC & Wallonie Entreprendre)',
      type: 'Hackathon',
      typeBadge: 'event',
      date: '24–26 October 2025',
      heuresComptees: 10,

      contexte: `I participated in the Upscaling 2025 Hackathon organized by EPHEC and Wallonie Entreprendre in Louvain-la-Neuve. The event brought together multidisciplinary teams with the objective of modernizing old electronic devices by adding new functionalities while preserving their retro design. Our team chose to transform a non-functional PlayStation 2 into a modern media server with RGB lighting.`,

      apprentissages: `During this 48-hour intensive project, I worked on installing and configuring a Linux-based system (LibreELEC) and deploying a media server using Kodi on a Raspberry Pi 2. I developed strong troubleshooting skills by resolving hardware compatibility issues, optimizing performance on limited resources, and configuring network connectivity (WiFi and Ethernet).

I also improved my ability to work in a multidisciplinary team and communicate effectively with different profiles such as electronics specialists and designers. The final presentation strengthened my ability to explain technical concepts clearly.`,

      analyse: `This experience required adaptability, efficiency, and problem-solving under time pressure. Working with constrained hardware forced me to optimize resources and think critically about system performance.

It also highlighted the importance of teamwork and organization in a project context. Each member contributed specific expertise, and decisions had to be made quickly to ensure a functional final result.

Additionally, the project showed that innovation does not require new or expensive equipment. Technological upcycling combines creativity, technical skills, and sustainability, which changed how I approach project design.`,

      lienObjectif:
        "This experience aligns with my goal of working in IT infrastructure and system administration. It provided hands-on experience with Linux systems, troubleshooting, and project management in real conditions, which are key skills for technical roles.",

      preuve:
        "Functional media server demonstrated at the end of the hackathon (PS2 + Raspberry Pi 2 + Kodi), with final team presentation.",
    },
  ],
},

// ─── THEME 6 ──────────────────────────────────────────────────────────────────
{
  id: 'reseaux-systemes',
  titre: 'First Aid Training',
  icone: 'Network',
  couleur: 'orange',
  heuresTotal: 10,
  nbActivites: 1,
  lienForce: "Transversal skill — ability to react effectively in emergency situations and ensure safety",
  resume:
    "European First Aid Certificate (BEPS) obtained after a 15-hour certified training.",

  activites: [
    {
      id: 'beps-certification',
      titre: 'European First Aid Certificate (BEPS)',
      type: 'Certified Training',
      typeBadge: 'Certification',
      date: '14 July 2025',
      heuresComptees: 15,

      contexte: `I completed a certified first aid training leading to the European First Aid Certificate (BEPS). The training lasted 15 hours and covered essential emergency response techniques. It aimed to prepare participants to react effectively in everyday emergency situations, whether in personal, academic, or professional environments.`,

      apprentissages: `During this training, I learned how to assess an emergency situation, secure the environment, and provide appropriate first aid. This included performing CPR, using an automated external defibrillator (AED), managing wounds, burns, and fractures, and reacting to situations such as choking or loss of consciousness.

      I also developed a structured approach to emergency response: analyzing the situation, prioritizing actions, and communicating clearly with emergency services.`,

      analyse: `This experience highlighted the importance of staying calm and acting methodically under pressure. Unlike technical projects, first aid requires immediate and precise action where mistakes can have serious consequences.

      I realized that these skills go beyond medical situations: they reinforce my ability to manage stress, make quick decisions, and take responsibility in critical moments.

      It also changed my perception of safety in daily environments. I am now more attentive to potential risks and better prepared to react if an incident occurs.`,

      lienObjectif:
        "Although not directly technical, this certification strengthens essential soft skills such as stress management, responsibility, and decision-making. These are critical in professional environments, especially in IT where incident response and problem management require similar composure and structured thinking.",

      preuve:
        "Official European First Aid Certificate (BEPS) delivered on July 14, 2025 after completing the 15-hour training.",
      },
    ],
  },
]
