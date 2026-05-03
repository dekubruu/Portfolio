export const syntheseGlobale = `Throughout this academic year, I organized my personal development around seven complementary themes covering both my identified strengths and the gaps I wanted to fill. These activities allowed me to step beyond the purely academic framework and test my skills in real-world contexts: hackathons, professional training, company visits, job fairs, and personal projects.

The selection of these themes was not accidental. It follows a clear logic: strengthening my technical foundations in web development and cloud, developing a security mindset essential in any software project, understanding project management dynamics in professional settings, and working on my transversal skills in communication and personal development.

In total, I completed 13 distinct activities across 7 themes, representing 50 hours of effective learning. Each activity was the subject of an honest reflective analysis in which I sought to identify not only what I learned, but more importantly how that experience changes the way I work and envision my professional future.`

export const themes = [
  // ─── THEME 1 ──────────────────────────────────────────────────────────────────
  {
    id: 'developpement-web',
    titre: 'Modern Web Development',
    icone: 'Code2',
    couleur: 'cyan',
    heuresTotal: 8,
    nbActivites: 2,
    lienForce: "Technical web development skill — my primary identified strength",
    resume:
      'In-depth exploration of React and Next.js frameworks through an online Udemy course and an in-person workshop organized by the EPHEC Tech Club.',
    activites: [
      {
        id: 'udemy-nextjs',
        titre: 'Udemy Course — React & Next.js 14 (Complete)',
        type: 'Online Training',
        typeBadge: 'online',
        date: 'October – November 2025',
        heuresComptees: 5,
        contexte: `Udemy offers one of the most comprehensive courses on React and Next.js 14. I followed the modules on the Next.js App Router, Server Components, and Tailwind CSS integration in a modern project. The course is taught by a professional instructor with over 15 years of web development experience and has more than 200,000 enrolled students.

I chose this course because the transition from the Pages Router to the App Router in Next.js represented a concrete gap in my skills. My internship project and personal projects rely on this technology, and I wanted to master current conventions rather than work with outdated patterns.`,
        apprentissages: `I learned how to structure a Next.js application using the App Router, how to distinguish Server Components from Client Components, and how to make informed choices between the two based on performance and interactivity needs. I also gained a deep understanding of Next.js caching mechanisms, which work fundamentally differently from classic React applications.

The modules on data management (fetch, cache, revalidation) were particularly valuable: I now understand why architectures like Vercel's can serve near-static pages with always-fresh data — a precise, well-documented mechanism.`,
        analyse: `This course confirmed an intuition I had: the boundary between frontend and backend is becoming increasingly blurred in modern applications. React/Next.js Server Components allow you to write code that runs server-side while remaining within the React paradigm. This is a major evolution I had not fully grasped before this course.

What struck me most was how these abstractions radically change the development experience. Before, to fetch data I would systematically write a useEffect with a fetch — a functional approach but one that generates complex loading states. With Server Components, that complexity disappears: the component receives its data directly, with the full power of React.

I realized, while taking this course, that I had previously used Next.js "on the surface" without truly exploiting its capabilities. This realization changed how I approach application architecture. Since then, I structure my applications by first thinking about what needs to be interactive (Client Component) versus what is purely presentational (Server Component), rather than defaulting everything to the client side.

In connection with my professional project: the Belgian and European market strongly values Next.js/React skills. Mastering current patterns positions me competitively for my end-of-studies internship.`,
        lienObjectif:
          "This skill is central to my goal of becoming a Full-Stack developer. Next.js is today the reference framework for production React web development.",
        preuve: "Udemy completion certificate — sections 1 to 14 completed (certificate available on request via the Udemy profile).",
      },
      {
        id: 'workshop-react',
        titre: 'Advanced React Workshop — EPHEC Tech Club',
        type: 'In-Person Training',
        typeBadge: 'in-person',
        date: 'November 2025',
        heuresComptees: 3,
        contexte: `The EPHEC Tech Club, the school's student association, regularly organizes technical workshops led by final-year students or alumni. This advanced React workshop was facilitated by a former EPHEC student now working as a senior developer at a Brussels scale-up. The session brought together around twenty students, mainly from BAC 2 and BAC 3.

The program covered advanced React hooks (useMemo, useCallback, useRef), performance optimization with React DevTools Profiler, and an introduction to composition patterns (Compound Components).`,
        apprentissages: `I learned how to identify unnecessary re-renders in a React component using React DevTools Profiler, and how to eliminate them with useMemo and useCallback. This is a very practical skill: in my EphécTrack project, I had unexplained slowdowns caused precisely by components re-rendering on every keystroke in a parent form.

The workshop also introduced me to the Compound Components pattern, which I had not encountered before. It is a way to structure complex components (dropdown menus, multi-step forms) that offers far more flexibility to the consumer of the component while encapsulating internal logic.`,
        analyse: `What I found most valuable in this workshop was the interactive format: unlike an online course where one follows passively, here I could ask questions in real time and watch the presenter debug performance issues live. Seeing an experienced developer use React DevTools Profiler with ease showed me just how powerful that tool is — and how much I had been underusing it.

I also appreciated the exchanges with other students. Some had questions I would never have thought to ask, and the answers taught me things I had not anticipated. That richness of the in-person format is something online training cannot replicate.

One point that struck me particularly: the presenter insisted that one should not "optimize prematurely." useMemo and useCallback have a cost — that of memoization itself — and are only useful if the memoized computation is genuinely expensive. This advice directly connects to my identified weakness of perfectionism: I tend to want to optimize before even measuring the problem. This session gave me tools to measure first, then optimize.`,
        lienObjectif:
          "Mastering React performance is what distinguishes a junior developer from a mid-level one. This skill directly reinforces my professional positioning.",
        preuve:
          "Certificate of attendance signed by the EPHEC Tech Club — presence confirmed on the nominative attendance list.",
      },
    ],
  },

  // ─── THEME 2 ──────────────────────────────────────────────────────────────────
  {
    id: 'cybersecurite',
    titre: 'Cybersecurity & Data Protection',
    icone: 'Shield',
    couleur: 'red',
    heuresTotal: 7,
    nbActivites: 2,
    lienForce: "Identified weakness — bridging the security sensitivity gap in my development practice",
    resume:
      "Cybersecurity awareness through a professional conference at EPHEC and hands-on practice on the TryHackMe platform.",
    activites: [
      {
        id: 'conf-cybersec',
        titre: 'Conference — Corporate Cybersecurity: Threats & Best Practices',
        type: 'In-Person Conference',
        typeBadge: 'conference',
        date: 'October 2025',
        heuresComptees: 3,
        contexte: `This conference was organized as part of the "EPHEC Tech Talks" series, open to IT students and organized in partnership with industry companies. The speaker was a cybersecurity consultant at Proximus ADA with over 12 years of experience, having worked on major incidents for Belgian banking and government clients.

The conference covered the current threat landscape (ransomware, phishing, supply chain attacks), secure development best practices (OWASP Top 10), and the European legal framework (GDPR, NIS2).`,
        apprentissages: `I learned that the majority of corporate security incidents do not come from sophisticated attacks but from basic vulnerabilities: SQL injections, weak passwords, unauthenticated endpoints. The speaker cited troubling figures: according to a recent study, 74% of Belgian SMEs experienced a security incident in 2024, and 60% had no incident response plan.

I also discovered the growing importance of the NIS2 framework, which since October 2024 applies to a much larger number of companies in Belgium, with concrete obligations for incident reporting and security measure implementation.`,
        analyse: `This conference changed the way I think about development. Before, I considered security as a layer added "at the end," once the application was working. After listening to this expert describe how poorly designed applications caused massive data breaches, I understood that this approach is fundamentally wrong.

What struck me most was the live demonstration of a SQL injection on a demo application. In a matter of seconds, the speaker extracted all credentials from the database. Asking myself whether my own projects contained such vulnerabilities was a sobering moment.

I immediately reviewed my EphécTrack project after the conference. I found two places where I was using SQL queries concatenated with user-supplied parameters — exactly the type of vulnerability demonstrated. I replaced them with parameterized queries that same evening. This passage from theory to concrete action in under 24 hours is what I am most proud of in this entire experience.

In connection with my professional project: cybersecurity is not a field I want to work in full time, but it is an essential transversal skill. Employers increasingly expect Full-Stack developers to understand security concerns — not at the level of a penetration tester, but enough to write code that does not put their users at risk.`,
        lienObjectif:
          "Security by design is a growing expectation from employers for Full-Stack developer positions. This conference gave me the conceptual framework and motivation to integrate this dimension into my daily practice.",
        preuve:
          "Digital EPHEC Tech Talks entry ticket — nominative badge scanned at the event entrance.",
      },
      {
        id: 'tryhackme',
        titre: "TryHackMe Platform — 'Pre-Security' & 'Web Fundamentals' Paths",
        type: 'Self-Directed Practice',
        typeBadge: 'project',
        date: 'November – December 2025',
        heuresComptees: 4,
        contexte: `TryHackMe is a cybersecurity learning platform based on hands-on practice, used by over 3 million users worldwide. It offers "rooms" — gamified virtual environments where security concepts are learned by applying them directly in a browser.

I followed the "Pre-Security" path (networking, web, and system fundamentals from a security perspective) and "Web Fundamentals" (HTTP, sessions, authentication, web vulnerabilities). These paths cover fundamental concepts that are accessible yet rigorous.`,
        apprentissages: `I learned to identify and understand classic web vulnerabilities in a controlled environment: XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), and command injection. Exploiting them myself — in a learning context — gave me a far deeper understanding than any theoretical reading could provide.

I also learned how HTTP works in depth: headers, cookies, sessions, authentication mechanisms (Basic, Bearer, JWT). Concepts I previously used as a black box, which I now understand from the inside.`,
        analyse: `What I particularly appreciated about TryHackMe is the "learn by doing" approach: you are not in passive reading mode — you are immediately faced with a problem to solve. This format matches perfectly how I learn — I need to touch things to truly understand them.

The XSS room shook me. I injected a script into a comment field of a demo application and watched an alert appear on a simulated user's profile. Understanding that you can control someone's browser through a simple unsanitized text field — and that I have likely written vulnerable code of that type in the past — was a wake-up call.

Since this experience, I systematically apply input sanitization and output encoding in my projects. It is no longer an optional step but a development reflex. I plan to continue this path on TryHackMe, particularly the rooms dedicated to CTF (Capture the Flag) challenges, which offer progressively harder levels.`,
        lienObjectif:
          "This hands-on practice strengthens my ability to build secure applications, an increasingly demanded skill in Full-Stack developer job descriptions.",
        preuve:
          "TryHackMe profile with history of completed rooms and earned badges — publicly accessible on the platform.",
      },
    ],
  },

  // ─── THEME 3 ──────────────────────────────────────────────────────────────────
  {
    id: 'cloud-devops',
    titre: 'Cloud Computing & DevOps',
    icone: 'Cloud',
    couleur: 'blue',
    heuresTotal: 9,
    nbActivites: 2,
    lienForce: "Weakness to turn into a differentiating skill — cloud is unavoidable in production",
    resume:
      "Official AWS training via AWS Skill Builder and hands-on implementation of a complete CI/CD pipeline for a personal project hosted on Hetzner.",
    activites: [
      {
        id: 'aws-formation',
        titre: 'AWS Cloud Practitioner Essentials — Official AWS Skill Builder Course',
        type: 'Online Training',
        typeBadge: 'online',
        date: 'September – October 2025',
        heuresComptees: 6,
        contexte: `AWS Cloud Practitioner Essentials is Amazon Web Services' official introductory course, available free on AWS Skill Builder. It covers fundamental cloud concepts (IaaS, PaaS, SaaS), key AWS services (EC2, S3, RDS, Lambda, VPC), pricing models, and cloud security basics.

I took this course with the aim of preparing for the AWS Cloud Practitioner certification (CLF-C02), which is the entry point for any cloud specialization. The course is structured into modules with intermediate quizzes and a final assessment.`,
        apprentissages: `I learned to distinguish AWS's shared responsibility model (what AWS manages versus what the customer manages), which is fundamental for understanding cloud security concerns. I also gained an understanding of the different EC2 instance types, high-availability strategies (multi-AZ, Auto Scaling), and cloud storage principles (S3, EBS, EFS).

The section on AWS Lambda and the serverless model was a revelation: the idea of paying only for milliseconds of execution time, without managing a server, radically changes the economics of deployment for small projects and startups.`,
        analyse: `This course gave me the vocabulary and conceptual framework I was missing to discuss cloud topics precisely. Before, I knew EC2 was "servers in the cloud" and S3 was "storage" — but I would not have been able to explain the difference between a region and an availability zone, or why multi-AZ replication matters for resilience.

What I found particularly well-designed in this course was how it explains the business value of cloud beyond the technical aspects: elasticity (pay for what you use), resilience (availability guaranteed by contract), and speed to market (no need to wait for the purchase and delivery of physical servers). These arguments now allow me to explain to a non-technical stakeholder why a cloud architecture is relevant.

A critical point I learned that I would not have anticipated: cloud security is not improvised. Common mistakes — leaving an S3 bucket publicly accessible or hardcoding AWS credentials in code — have caused major incidents at companies of all sizes. This training made me aware of these pitfalls before even using AWS in production.

In connection with my professional project: the AWS Cloud Practitioner certification is often listed as a "must have" in Full-Stack developer job postings. Having completed this course is the first step toward the certification I plan to obtain before the end of my internship.`,
        lienObjectif:
          "Cloud has become unavoidable in modern infrastructure. This training equips me to have relevant conversations with DevOps teams and to understand the environment in which my code will run.",
        preuve:
          "AWS Skill Builder completion badge — digital certificate available on the AWS profile (accessible on request).",
      },
      {
        id: 'cicd-github',
        titre: 'Personal Project — Complete CI/CD Pipeline with GitHub Actions',
        type: 'Hands-On Project',
        typeBadge: 'project',
        date: 'December 2025',
        heuresComptees: 3,
        contexte: `As part of my personal EphécTrack project, I decided to implement a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions. The goal was to move from manual SFTP deployment to automated deployment triggered by every push to the main branch.

The pipeline includes: automated test execution (Jest), static code analysis (ESLint), application build, and deployment to a Hetzner VPS via SSH with encrypted keys.`,
        apprentissages: `I learned to write YAML workflow files for GitHub Actions, manage secrets in GitHub (secure environment variables for SSH credentials and API keys), and structure a pipeline into dependent jobs — tests must pass before deployment is triggered.

I also discovered the GitHub Actions marketplace: pre-built actions for common tasks (code checkout, Node.js setup, dependency caching). Reusing these actions rather than coding everything from scratch taught me the importance of not reinventing the wheel in DevOps.`,
        analyse: `This hands-on experience spectacularly consolidated what I had learned in the AWS training. Watching a pipeline execute in real time — logs appearing step by step in the GitHub interface — and receiving a notification when deployment completed is an immediate satisfaction that makes the learning very concrete.

What surprised me was the volume of unexpected problems I encountered: incorrect SSH permissions, environment variables inaccessible in certain steps, a deployment failing silently. Resolving these issues one by one, by reading documentation and logs, taught me more about CI/CD than any theoretical video could.

I also realized the importance of automated tests in this context. Without tests, a CI/CD pipeline is merely automated deployment — potentially deploying to production with bugs. With tests, it is a safety net that enables confident deployment. This conviction changed how I write code: I now think about testability from the design stage.

In terms of skills gained, I went from a vague understanding of CI/CD ("that's what the DevOps team does") to a concrete grasp of how it works and why it matters. I can now, in a professional setting, participate in discussions about pipeline architecture and contribute to its maintenance.`,
        lienObjectif:
          "CI/CD is an expected skill in modern development teams. This practical mastery distinguishes me from candidates who only have theoretical knowledge of the subject.",
        preuve:
          "Public GitHub repository with the .github/workflows/deploy.yml file visible — link available in the Projects section of the CV.",
      },
    ],
  },

  // ─── THEME 4 ──────────────────────────────────────────────────────────────────
  {
    id: 'intelligence-artificielle',
    titre: 'Artificial Intelligence & Innovation',
    icone: 'Brain',
    couleur: 'purple',
    heuresTotal: 8,
    nbActivites: 1,
    lienForce: "Curiosity for emerging technologies — AI is increasingly integrated into standard development",
    resume:
      "Active participation in the EPHEC AI hackathon (8h): design and development of a GPT-4-based HR pre-screening prototype, ranked 2nd out of 20 teams.",
    activites: [
      {
        id: 'hackathon-ia',
        titre: 'AI Hackathon — EPHEC Challenge Tech 2025',
        type: 'In-Person Hackathon',
        typeBadge: 'hackathon',
        date: 'November 2025',
        heuresComptees: 8,
        contexte: `The EPHEC Challenge Tech is an annual hackathon organized by the school in partnership with Belgian tech companies. The 2025 edition focused on artificial intelligence and its practical applications in the professional world. Around 80 students, divided into teams of 4, had 8 hours to design and prototype an innovative solution to a real problem proposed by the sponsors.

Our team of 4 (2 BAC 3 IT and 2 BAC 3 Management) chose the challenge proposed by a Brussels SME: develop an automated application analysis tool to help HR staff pre-screen CVs based on objective criteria defined by the client, via the OpenAI API (GPT-4).`,
        apprentissages: `I learned to use the OpenAI API pragmatically: prompt engineering, token management, parsing structured JSON responses. I also discovered the limitations and risks of these systems — our prototype had biases related to training data that we had not anticipated, which sparked a rich debate during the final presentation.

On the technical side, I gained experience in rapid development under pressure: in 8 hours, you cannot build something perfect, but you can build something that works and demonstrates the concept's value. I learned to ruthlessly prioritize features based on their impact on the final demonstration.`,
        analyse: `This hackathon was one of the most formative experiences of my year. Not because we won (we finished 2nd), but because it confronted me with work dynamics I do not encounter in class: extreme time pressure, rapid decision-making, intense collaboration with different profiles.

What taught me the most was the real-time negotiation of features. At 2pm, with 4 hours remaining, we had to decide what to cut to ensure the prototype would work. I proposed dropping a PDF export feature I had spent 2 hours building — a difficult decision that proved to be the right one. Learning to let go of something you have built in order to serve the project is a professional maturity rarely developed in class.

The final presentation was also revealing: the jury (HR professionals and AI developers) immediately pointed to the potential biases in our system. This constructive criticism taught me to think about the ethical implications of an AI system from the design stage, not as an afterthought.

In connection with my professional project: understanding how to integrate AI APIs into web applications has become a baseline skill for any Full-Stack developer. This hackathon gave me that practical mastery, while reminding me of the responsibilities that come with it.`,
        lienObjectif:
          "Generative AI is increasingly integrated into standard web applications. Having practical experience developing with these APIs positions me favorably in the job market.",
        preuve:
          "Team photo at the award ceremony — nominative participant badge — official ranking (2nd place out of 20 teams) available on the EPHEC website.",
      },
    ],
  },

  // ─── THEME 5 ──────────────────────────────────────────────────────────────────
  {
    id: 'gestion-projet',
    titre: 'Project Management & Agile Methods',
    icone: 'Layout',
    couleur: 'green',
    heuresTotal: 6,
    nbActivites: 2,
    lienForce: "Essential transversal skill for working effectively in a development team",
    resume:
      "Scrum Fundamentals Certified (SFC) online certification and a company visit to Accenture Belgium on Agile@Scale (SAFe).",
    activites: [
      {
        id: 'scrum-certification',
        titre: 'Scrum Fundamentals Certified (SFC) — SCRUMstudy',
        type: 'Individual Certification',
        typeBadge: 'certification',
        date: 'October 2025',
        heuresComptees: 4,
        contexte: `SCRUMstudy offers the Scrum Fundamentals Certified (SFC) certification, a recognized credential designed to validate foundational knowledge of the Scrum framework. It covers roles (Product Owner, Scrum Master, Development Team), events (Sprint, Daily Scrum, Sprint Review, Sprint Retrospective), and artifacts (Product Backlog, Sprint Backlog, Increment).

I prepared for this certification through 3 hours of study of the SBOK Guide (Scrum Body of Knowledge), then took the online exam: 50 questions in 60 minutes. Score achieved: 82%.`,
        apprentissages: `I learned the subtleties of the Scrum framework that had eluded me despite partial use in group projects: the precise difference between a Product Backlog and a Sprint Backlog, the exact role of the Scrum Master (facilitator, not manager), and the importance of the Definition of Done as a collective quality tool.

I also understood why Scrum often fails in practice: not because the framework is flawed, but because it is misunderstood or applied superficially — "Scrum But" is practiced: Scrum without the ceremonies, without a real Product Owner, without transparency.`,
        analyse: `This certification gave me a precise reference framework for Agile methods, which I had been using intuitively in class without understanding the theoretical foundations. Having this theoretical grounding now allows me to adapt more quickly when joining a Scrum team: I understand the vocabulary, I know what is expected of me during a Daily Scrum, and I understand why the Sprint Review is open to stakeholders.

What I found most useful in this preparation was the documentation of Scrum anti-patterns — the ways of doing it wrong that the guide describes explicitly. In my group projects at EPHEC, I now recognize classic mistakes we were making: sprints that "lasted indefinitely," a Product Backlog never truly prioritized, retrospectives rushed through in 5 minutes.

In connection with my professional project: virtually every Full-Stack developer job posting mentions Agile/Scrum. Having a certification and a deep understanding of the framework — not just having "heard of Scrum" — is a tangible advantage in a technical interview.`,
        lienObjectif:
          "Scrum is the de facto standard in the majority of software development teams. This certification validates my understanding and facilitates my integration into a professional team from day one.",
        preuve:
          "Digital SFC certificate signed by SCRUMstudy — certification number verifiable on the official SCRUMstudy website.",
      },
      {
        id: 'visite-accenture',
        titre: "Company Visit — Accenture Belgium: Agile@Scale in Practice",
        type: "Company Visit",
        typeBadge: 'visit',
        date: 'September 2025',
        heuresComptees: 2,
        contexte: `As part of EPHEC's partnership with tech companies, a group of about fifteen BAC 3 students visited Accenture's Brussels offices. The visit included a presentation of Accenture's technology activities in Belgium, a Q&A session with developers and project managers, and a demonstration of their Agile@Scale approach — the SAFe (Scaled Agile Framework) for projects involving hundreds of people.`,
        apprentissages: `I learned that classic Scrum works well for a team of 5 to 10 people, but that specific frameworks (SAFe, LeSS) are needed when coordinating 50+ teams on the same product. This dimension of Agile "scalability" was completely unknown to me before.

I also had a conversation with a senior developer who explained his day-to-day work: the tools used (Jira, Confluence, Azure DevOps), the types of meetings, how technical decisions escalate through the hierarchy. This glimpse into the real daily life of a developer in a large company is invaluable for calibrating my expectations.`,
        analyse: `This visit was an important perspective shift: the practices learned in class — and even those I just certified with Scrum — are simplified versions of what actually happens in large organizations. SAFe is a world unto itself, with its own terminology and ceremonies.

What struck me most was the gap between the Agile ideal (self-organization, speed, simplicity) and the reality of a large company (imposed processes, legal constraints, multiple stakeholders). This does not mean Agile fails in large organizations, but that it must be intelligently adapted to context. A developer who understands this nuance will be more effective than a purist who applies the framework to the letter.

This experience also confirmed that I prefer, in the short term, to work in a smaller structure where Agile is more authentic and where individual impact is more direct. Large companies like Accenture offer training opportunities and international mobility — elements to reconsider in my medium-term trajectory.`,
        lienObjectif:
          "Understanding Agile dynamics in a real company — not just in theory — makes me more credible in interviews and more effective from my very first day at work.",
        preuve:
          "Participation confirmation signed by the EPHEC partnerships coordinator — group photo during the visit.",
      },
    ],
  },

  // ─── THEME 6 ──────────────────────────────────────────────────────────────────
  {
    id: 'reseaux-systemes',
    titre: 'Networking & System Administration',
    icone: 'Network',
    couleur: 'orange',
    heuresTotal: 7,
    nbActivites: 2,
    lienForce: "Fundamental skill — understanding infrastructure to develop and deploy more effectively",
    resume:
      "Setup of a personal network lab with pfSense and VLANs, and participation in the EPHEC Job Day to meet IT professionals.",
    activites: [
      {
        id: 'pfsense-lab',
        titre: 'Personal Project — Network Lab with pfSense, VLANs & WireGuard',
        type: 'Hands-On Project',
        typeBadge: 'project',
        date: 'November – December 2025',
        heuresComptees: 4,
        contexte: `I built a network lab on salvaged hardware — an old PC repurposed as a pfSense firewall and an 8-port managed switch — to learn networking concepts hands-on. The goal was to segment my home network into distinct VLANs: one VLAN for my development machines, one for IoT devices, and one for guests, each with specific firewall rules.

pfSense is an open-source firewall/router based on FreeBSD, widely used in SMEs and appreciated for its comprehensive documentation and advanced features.`,
        apprentissages: `I learned to configure VLANs on a managed switch (802.1Q protocol), create firewall rules in pfSense to control inter-VLAN traffic, and set up a DHCP server per VLAN with distinct address ranges.

I also configured a WireGuard tunnel to securely access my home network from outside without exposing ports directly to the internet. This skill is directly applicable in a professional context.`,
        analyse: `This project taught me something that networking courses struggle to convey: the difference between understanding theory and truly mastering practice. I spent an hour debugging why my IoT devices had no internet access despite a firewall rule that appeared correct — the solution was a subtlety in pfSense's rule ordering that I had not anticipated.

This kind of network debugging — reading firewall logs, using tcpdump to capture traffic, understanding why a packet is dropped — developed an analytical capacity I did not have before. I now see web applications differently: every HTTP request my code sends traverses a complex network infrastructure, and understanding that infrastructure makes me a better developer.

An unexpected insight: I realized how closely network security and application security are connected. A well-configured firewall does not compensate for a vulnerable application, and vice versa. Security is a system, not an isolated layer — this systemic vision is valuable in my professional project.

In connection with my professional project: even though I do not want to become a network administrator, having a solid foundation allows me to collaborate effectively with infrastructure teams, understand deployment constraints, and diagnose issues at the boundary of application and network.`,
        lienObjectif:
          "Networking fundamentals are essential for a Full-Stack developer deploying applications in complex cloud environments. This hands-on project reinforces my technical credibility beyond application code alone.",
        preuve:
          "Screenshot of the pfSense interface with VLAN configuration and firewall rules — network diagram of the lab available on request.",
      },
      {
        id: 'job-day',
        titre: 'EPHEC Job Day — IT Professional Networking',
        type: 'Job Fair',
        typeBadge: 'event',
        date: 'October 2025',
        heuresComptees: 3,
        contexte: `The EPHEC Job Day is an annual event where partner companies come to meet students, present their activities, and offer internships or jobs. The 2025 edition brought together around twenty companies in the IT, consulting, and services sectors — including Proximus, Sopra Steria, BNP Paribas, Odoo, and several Brussels SMEs.

I prepared an up-to-date version of my CV and a 2-minute pitch of my profile before the event. I met representatives from 7 different companies and gathered valuable information about the Belgian job market.`,
        apprentissages: `I learned to pitch my profile concisely and relevantly depending on the audience. With an HR recruiter, I emphasized soft skills and academic progression. With a technical developer, I spoke about mastered technologies and concrete projects completed. Adapting your message to your audience is a skill learned through practice.

I also obtained very concrete information about the Belgian job market: starting salaries for a junior developer (range 2,800 – 3,500€ gross), the most in-demand skills (TypeScript, cloud, automated testing), and recruitment practices (technical tests, behavioral interviews).`,
        analyse: `This Job Day was a healthy confrontation with job market realities. Some conversations gave me confidence: recruiters were interested in my profile, particularly the web development + cloud combination. Others clearly showed me my gaps: several companies were looking for profiles with significant TypeScript experience that I do not yet have.

What struck me most was the difference between the selection criteria of large companies and SMEs. Large firms have formalized multi-step processes with very precise criteria. SMEs are more flexible, value personality and motivation, and are willing to invest in training.

This observation reinforces my plan: to target for my final internship a tech SME or scale-up where I can learn quickly in an agile environment, rather than a large company where the first months would be more administrative.

In connection with my professional project: this Job Day gave me a realistic view of the market. I now know what employers expect, what I still need to develop, and how to present myself convincingly.`,
        lienObjectif:
          "This direct exposure to the job market sharpens my professional project and concretely prepares me for internship and job interviews.",
        preuve:
          "Nominative EPHEC Job Day badge — nominative attendance list — business cards of recruiters met.",
      },
    ],
  },

  // ─── THEME 7 ──────────────────────────────────────────────────────────────────
  {
    id: 'communication',
    titre: 'Communication & Personal Development',
    icone: 'Users',
    couleur: 'yellow',
    heuresTotal: 5,
    nbActivites: 2,
    lienForce: "Identified weakness — improving oral communication and professional presence",
    resume:
      "Participation in the BeJobs Brussels 2025 career fair and an EPHEC conference on assertive communication in technical teams.",
    activites: [
      {
        id: 'bejobs',
        titre: 'BeJobs Career Fair — Brussels 2025',
        type: 'Career Fair',
        typeBadge: 'career fair',
        date: 'November 2025',
        heuresComptees: 3,
        contexte: `BeJobs is Brussels' main job fair, bringing together more than 200 companies each year and attracting thousands of visitors. The 2025 edition featured a dedicated space for IT and tech profiles, with booths from companies such as Google Belgium, Microsoft, Deloitte Digital, and numerous Brussels startups.

I attended with the specific goal of meeting companies that recruit junior Full-Stack developers or interns, and gathering information about recruitment processes and the skills sought in 2025-2026.`,
        apprentissages: `I learned to manage my energy during a fair: after 2 hours of intensive conversations, fatigue sets in and the quality of exchanges drops. I realized the importance of prioritizing the most relevant booths first, while still fresh and focused.

I also learned that networking at a fair is not linear: some of the most useful conversations were spontaneous, with people encountered in the aisles rather than at booths. Openness and genuine curiosity about the person you are talking to open unexpected doors.`,
        analyse: `This fair allowed me to confront my self-image with external perception. When presenting my background, reactions varied: some recruiters became animated when hearing about my personal projects, others were more interested in my previous internship. These variations taught me to quickly read what interests the person I am talking to and adapt my pitch in real time.

A particularly formative moment: I met a senior developer who asked me a difficult technical question during an informal conversation. I could not answer perfectly, but I acknowledged my limit and explained how I would go about finding the answer. She told me that this honesty was more appreciated than trying to bluff. This taught me how experienced professionals evaluate juniors: not on what they already know, but on how they learn and react to the unknown.

This fair also showed me the importance of active professional networking — not just sending CVs online, but showing up, talking to people, building human connections. I added several people I met to LinkedIn that same day.`,
        lienObjectif:
          "Professional networking is a key skill for finding internship and job opportunities. This hands-on experience taught me how to present myself and build connections in a real professional context.",
        preuve:
          "Nominative BeJobs 2025 entry badge — digital registration confirmation by email.",
      },
      {
        id: 'conf-communication',
        titre: "EPHEC Conference — Assertive Communication in Technical Teams",
        type: 'In-Person Conference',
        typeBadge: 'conference',
        date: 'December 2025',
        heuresComptees: 2,
        contexte: `This conference was organized as part of EPHEC's "Soft Skills" program, in partnership with a coaching firm specializing in professional communication. The speaker, a certified coach with 15 years of experience in tech teams, addressed a topic often avoided: how to communicate constructively — flagging a bug introduced by a colleague, declining an unrealistic request, expressing technical disagreement without creating conflict.`,
        apprentissages: `I learned a 4-step assertive communication model adapted to a tech context: describe objective facts, express the observed impact, state a need, propose a concrete request. This framework is directly applicable in code reviews, sprint meetings, or architecture discussions.

I also learned the importance of separating a critique of the code from a critique of the person — which seems obvious when stated plainly, but is difficult to apply in practice when tired or under pressure.`,
        analyse: `This conference addressed a need I had identified in my self-analysis: I am comfortable with written communication and technical discussions in small groups, but I sometimes find myself stuck in situations of professional disagreement. I tend to avoid conflict rather than address it constructively — a pattern that can be problematic in a team work environment.

What struck me most was the distinction between aggressiveness, passivity, and assertiveness. I realized I often fall into passivity: I accept decisions I disagree with to avoid conflict, then end up frustrated. Assertiveness — clearly expressing my point of view while respecting the other person's — is the middle path I need to learn to take.

The speaker proposed practical exercises in sub-groups that put me in challenging situations: playing the role of someone declining an unrealistic request, or politely but firmly pointing out a code quality issue. These simulations are uncomfortable but invaluable. They gave me mental scripts I can reuse in real professional situations.

In connection with my professional project: communication is the skill that often makes the difference between a good developer and a great one. Technical skills are learned relatively quickly; the ability to communicate effectively and manage conflicts constructively — that is what enables growth toward Tech Lead roles.`,
        lienObjectif:
          "Effective communication is an essential transversal skill for career growth. Working on this identified weakness is a direct investment in my long-term professional project.",
        preuve:
          "Attendance certificate signed by EPHEC — presence on the nominative list of the Soft Skills program.",
      },
    ],
  },
]
