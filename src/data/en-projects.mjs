import { melodyMapScreenshots } from "./shared.mjs";

export const enProjects = [
  {
    id: "melodymap",
    title: "MelodyMap",
    meta: "Independent product build · Apr 2026 - Present",
    summary:
      "A practice management platform for therapists, built around schedule-driven preparation, reusable facility context, structured session planning, and mileage tracking.",
    tags: ["Healthtech SaaS", "Practice workflow", "AI planning"],
    imagePair: ["Files/MelodyMap.ai/Dashboard.png", "Files/MelodyMap.ai/PlanSutdio-Plan.png"],
    imagePairLabels: ["Operations dashboard", "Plan Studio output"],
    screenshots: melodyMapScreenshots,
    bullets: [
      "Defined MelodyMap as a workflow product for therapists rather than a generic chatbot or note-taking tool, centered on preparation, session delivery, and follow-up.",
      "Built the product around a calendar-native flow so imported schedules determine where the therapist is going, what location context to load, what to prepare, and what mileage to capture afterward.",
      "Architected the application as a layered system: Next.js 15 on the frontend, a FastAPI backend, async SQLAlchemy repositories, Alembic migrations, and PostgreSQL as the single system of record.",
      "Designed session-plan generation as structured, export-ready blocks and used PostgreSQL + pgvector to retrieve semantically similar past debriefs so plans improve over time at each location.",
      "Architected a hybrid AI system where a deterministic recommendation engine — vector similarity plus domain signals like population profiles, therapist repertoire, and prior session outcomes — is the source of truth, with the LLM composing explanations around it to prevent hallucinated clinical facts.",
      "Engineered a PHI-minimization pipeline that keeps protected health information out of all LLM calls, passing only sanitized context into the model and hashing prompts into audit logs instead of storing raw text.",
      "Built the entire product AI-first, directing AI coding agents as the execution engine with an independent AI reviewer gating changes through a 3-environment CI/CD pipeline (Dev, QA, Prod) with automated dependency and security scanning, including OWASP Top 10 audits.",
    ],
    links: [],
  },
  {
    id: "capstone",
    title: "MS-BA Capstone: Tennis Performance Analytics",
    meta: "Arizona State University · Jun 2024 - Dec 2024",
    summary:
      "A computer-vision project for extracting performance insights from tennis match footage using YOLOv8 and OpenCV.",
    tags: ["Machine learning", "Python", "YOLOv8", "OpenCV"],
    imagePair: ["Files/Project_Icons/Capstone_Title_Page.jpg", "Files/Project_Icons/Capstone_Agenda.jpg"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "Engineered a full-stack ML pipeline for extracting player insights from match videos using YOLOv8 and OpenCV.",
      "Tracked ball speed and racket movement and automated CSV-based output with Python and Jupyter.",
      "Reduced analysis time across a 20,000+ match corpus by roughly 90% with optimized video trimming and AI-assisted detection.",
    ],
    links: [
      {
        label: "Download presentation",
        url: "Files/Performance Analytics - Tennis Video Analysis (2024 Capstone).pptx",
        download: true,
      },
    ],
  },
  {
    id: "ksa",
    title: "ASU Korean Student Association Website",
    meta: "Arizona State University Korean Student Association · Sep 2020 - Mar 2021",
    summary:
      "A team-led website project for ASU's Korean Student Association with front-end ownership and contributor onboarding.",
    tags: ["HTML/CSS/JS", "Team lead", "GitHub"],
    imagePair: ["Files/Project_Icons/ksa_logo.jpg", "Files/Project_Icons/ASUforksa.png"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "Co-led a 7-person team to design and launch a custom website for ASU's Korean Student Association.",
      "Planned workload and milestones, assigned responsibilities, and kept the project moving toward launch.",
      "Led front-end development using HTML, CSS, and JavaScript while keeping the experience responsive and accessible.",
      "Mentored teammates in GitHub version control and modern web basics so the site could be maintained after launch.",
    ],
    links: [{ label: "View repository", url: "https://github.com/JisungWoo/ksa_website" }],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    meta: "Independent project · Jul 2024 - Present",
    summary:
      "A responsive personal portfolio with multiple deployed versions, AI-assisted iteration, and progressive visual refinement.",
    tags: ["HTML/CSS/JS", "GitHub Pages", "Portfolio design"],
    imagePair: ["Files/Project_Icons/Personal_Portfolio_V1_2.jpg", "Files/Project_Icons/Personal_Portfolio_V3.jpg"],
    containFirstImage: true,
    screenshots: [],
    bullets: [
      "Built a responsive personal portfolio and kept iterating on its information design, interaction design, and visual hierarchy.",
      "Used AI-assisted editing to refine copy, layout direction, and iteration speed without losing authorship of the work.",
      "Published multiple live versions through GitHub Pages to test and compare design changes in real deployment conditions.",
    ],
    links: [
      { label: "Version 1", url: "https://jisungwoo.github.io/jisung_website/" },
      { label: "Version 2", url: "https://jisungwoo.github.io/jisung_website_v2/" },
      { label: "Version 3", url: "https://jisungwoo.github.io/jisung_website_v3/" },
      { label: "Version 4", url: "https://jisungwoo.github.io/jisung_website_v4/" },
    ],
  },
  {
    id: "paypal",
    title: "PayPal Opportunity Hackathon - 1st Place",
    meta: "Hackathon project · Oct 2016",
    summary:
      "A donor communication tool built for a local nonprofit in a 3-person team, resulting in a first-place finish.",
    tags: ["Hackathon", "1st place", "HTML/CSS/JS"],
    imagePair: ["Files/Project_Icons/Paypal_Opportunity_Hackathon.jpg", "Files/Project_Icons/Paypal_Opportunity_Hackathon_2.jpg"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "Collaborated in a 3-person team to build a web-based donor communication tool for Matthew's Crossing.",
      "Created a custom HTML interface and automated email sender using HTML, CSS, and JavaScript.",
      "Reduced manual communication effort for staff and improved donor outreach workflows.",
      "Won first place at the PayPal Opportunity Hackathon with a fully functioning solution.",
    ],
    links: [{ label: "View on Devpost", url: "https://devpost.com/software/matthews-crossing-data-manager" }],
  },
];
