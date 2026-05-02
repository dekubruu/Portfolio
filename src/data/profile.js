// ─── À PERSONNALISER ────────────────────────────────────────────────────────
// Remplacez toutes les valeurs par vos informations réelles.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  prenom: 'Khasan',
  nom: 'Aktamirov',
  titre: "Third year bachelor student — Computer Science",
  ecole: 'EPHEC Louvain-la-Neuve',
  email: 'he202425@students.ephec.be',
  localisation: 'Louvain-la-Neuve, Belgique',
  github: 'https://github.com/dekubruu',
  linkedin: 'https://www.linkedin.com/in/khasan-aktamirov-b86788299/',

  objectifProfessionnel: 'Full stack developer | Network Security | Web/App Scraping & OSINT',

  accroche:
    "Tech enthusiast specialized in full stack development. Seeking to join a team that values intelligent automation and technical innovation.",

  formation: [
    {
      diplome: "Bachelor in Computer Science",
      ecole: 'EPHEC',
      lieu: 'Louvain-la-Neuve',
      periode: '2023 – 2026',
      statut: 'On going — expected graduation June 2026',
      description:
        "Training in web development, mobile applications, networking, databases, IT project management, cybersecurity, and hardware.",
    },
  ],

  competencesTechniques: [
    { categorie: 'Langages', items: ['JavaScript', 'HTML5 / CSS3', 'TypeScript', 'Python', 'SQL', 'Bash'] },
    { categorie: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3'] },
    { categorie: 'Backend', items: ['Node.js', 'Express'] },
    { categorie: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    {
      categorie: 'System & DevOps',
      items: ['Docker', 'System & Network Administration', 'Web Hosting'],
    },
    { categorie: 'Outils', items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'] },
    {categorie: 'Data', items: ['Automated data extraction / scraping (web/app)'] },
  ],

 softSkills: [
    {
      nom: 'Teamwork',
      description: 'Experienced in collaborating using Agile/Scrum methodologies on multidisciplinary projects.',
    },
    {
      nom: 'Problem-solving',
      description: 'Analytical and structured approach to complex technical challenges.',
    },
    {
      nom: 'Adaptability',
      description: 'Ability to quickly gain proficiency in new technologies.',
    },
    {
      nom: 'Communication',
      description: "Skilled at explaining technical concepts to non-specialist audiences.",
    },
    {
      nom: 'Autonomy',
      description: "Ability to organize my work independently and take initiative.",
    },
    {
      nom: 'Intellectual curiosity',
      description: 'Active technology watch and continuous learning beyond formal curriculum.',
    },
  ],

  langues: [
    { langue: 'English', niveau: 'Advanced', code: 'C1' },
    { langue: 'French', niveau: 'Native', code: 'C2' },
    { langue: 'Russian', niveau: 'Native', code: 'C2' },
  ],

  experiences: [
        {
      poste: 'Content Protection Intern',
      entreprise: 'Motion Picture Association (MPA)',
      lieu: 'Brussels, Belgium',
      periode: 'February 2026 – May 2026',
      type: 'Internship',
      description:
        "Cybersecurity internship covering: API/Web security (Token/MSAL), Hardware Hacking & Reverse Engineering (firmware dumps, UART/JTAG, root access), Android RE (Frida, Burp Suite), data extraction automation, electronics manipulation (soldering, chip readers), and Technical OSINT fundamentals.", 
    },
    {
      poste: 'Frontend & BackendDeveloper',
      entreprise: 'Seneca Polytechnic',
      lieu: 'Toronto, Canada',
      periode: 'June 2025',
      type: 'Summer School',
      description:
        "Intensive program focused on mobile development with React Native, including the design and implementation of a crossplatform application.",
    },  
  ],

  projets: [
    {
      nom: 'EarthHealth',
      description:
        "EarthHealth is a mobileapplication designed for hearing health awareness and prevention. It allows users to take a high-frequency hearing test, receive personalized results, measure real-time ambient noise levels, and learn through a gamified educational quiz.",
      technologies: ['React Native', 'Node.js'],
      lien: 'https://github.com/dekubruu/Application-Mobile-de-Pr-vention-Auditive',
    },
    {
      nom: 'Boite-Alerte',
      description:
        "Boite-Alerte is an intelligent mailbox designed to modernize mail reception. The system detects mail arrival in real time, sends instant notifications to the user, and displays custom messages for the mail carrier when the user is unavailable.",
      technologies: ['ESP32', 'Node.js', 'React', 'MySQL'],
      lien: 'https://github.com/rayleiighh/Boite-alerte',
    },
        {
      nom: 'PowerTrack',
      description:
        "Web application to monitor in real time the power consumption of devices connected through smart power strips.",
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      lien: 'https://github.com/rayleiighh/Dev-Web-2024',
    },
  ],
}
