import { dataResumeHref, githubHref, linkedinHref } from "./shared.mjs";

export const enSite = {
  languageCode: "en",
  pagePath: "index.html",
  title: "Jisung Woo | Senior Data Engineer",
  description:
    "Senior Data Engineer translating executive and business priorities into governed Snowflake solutions, distributed delivery, and trusted data products.",
  localeSwitch: { label: "한국어", text: "Korean", href: "index_kr.html" },
  hero: {
    name: "Jisung Woo",
    photoAlt: "Jisung Woo in graduation regalia at Arizona State University.",
    logoLabel: "Experience across",
  },
  career: {
    tracks: [
      {
        id: "data-engineer",
        tone: "data",
        media: "Files/Profile_Pic_Graduation.jpg",
        mediaAlt: "Jisung Woo in graduation regalia at Arizona State University.",
        title: "Senior Data Engineer",
        subtitle: "Enterprise Data Delivery + Applied AI",
        proof: ["5+ years in data", "Snowflake EDW", "Distributed delivery"],
        profile: {
          eyebrow: "Senior Data Engineer",
          title: "From business ambiguity to trusted data delivery.",
          summary:
            "I translate executive and business priorities into governed Snowflake solutions—shaping data models, directing distributed delivery, validating restricted data, and staying hands-on when complex SQL needs to be diagnosed.",
          resumeLabel: "Senior Data Engineer Resume",
          actions: [
            { label: "View Resume", href: dataResumeHref, newTab: true },
            { label: "Download Resume", href: dataResumeHref, download: true },
          ],
          proof: [
            { label: "Current platform", value: "Snowflake EDW" },
            { label: "Leadership scope", value: "Director + VP-facing" },
            { label: "Delivery model", value: "Distributed engineering" },
          ],
          roleProof: [
            { label: "Business translation", value: "Executive requirements" },
            { label: "Architecture", value: "Greenfield data models" },
            { label: "Delivery", value: "Distributed delivery" },
            { label: "Quality gate", value: "Restricted-data QA" },
            { label: "Applied AI", value: "Cortex Agent" },
            { label: "Hands-on depth", value: "Complex SQL debugging" },
          ],
          highlights: [
            "Translate director- and VP-level priorities into metrics, technical stories, business logic, and acceptance criteria.",
            "Co-design data models and solution architecture, then guide distributed engineers through implementation and release readiness.",
            "Remain the validation and debugging authority for restricted QA and production data when results do not match business expectations.",
          ],
          methodTitle: "The operating model behind the work.",
          archiveEyebrow: "Earlier build proof",
          archiveTitle: "The projects that built my ownership mindset.",
          archiveSummary:
            "Student and early web projects remain part of the story. They show the same pattern at a smaller scale: organize the work, help people contribute, build the interface, and ship something real.",
          archiveProjectIds: ["ksa", "portfolio", "paypal"],
          projectsTitle: "Selected Data Engineering Work",
          projects: [
            {
              title: "Enterprise Snowflake Delivery",
              meta: "Honeywell Aerospace · Data Engineer II",
              body:
                "Executive-facing Snowflake delivery spanning greenfield architecture, distributed implementation, restricted-data QA, and performance tuning—including an 83% full-load runtime reduction.",
              tags: ["Snowflake", "Performance tuning", "Delivery leadership"],
            },
            {
              title: "Enterprise ETL Modernization",
              meta: "ASU Enterprise Partners · Data Engineer I",
              body:
                "SSIS and Azure Data Factory workflows, SQL Server procedures, Power BI refresh automation, and warehouse integrations across Salesforce, Workday, and Azure Blob Storage.",
              tags: ["ADF", "SSIS", "SQL Server"],
            },
            {
              title: "Tennis Performance Analytics",
              meta: "M.S. Business Analytics capstone",
              body:
                "A YOLOv8 and OpenCV pipeline that extracted player performance metrics from match footage and automated analysis output.",
              tags: ["Python", "YOLOv8", "OpenCV"],
              actions: [{ label: "Open project details", kind: "modal", projectId: "capstone" }],
            },
          ],
          aiWork: {
            eyebrow: "Founder Work",
            title: "One product that shows end-to-end technical ownership.",
            summary:
              "MelodyMap.ai is separate from my enterprise work. It demonstrates how I think about architecture, privacy boundaries, structured data, AI integration, and complete workflow ownership.",
            projects: [
              {
                title: "MelodyMap.ai",
                meta: "Founder · Apr 2026 - Present",
                body:
                  "Designing an AI-assisted workflow platform that reduces planning and documentation work for music therapists through calendar context, reusable location profiles, structured session plans, debriefs, and mileage tracking.",
                tags: ["PostgreSQL", "FastAPI", "Gemini"],
                media: { src: "Files/MelodyMap.ai/PlanSutdio-Plan.png", alt: "MelodyMap Plan Studio screenshot" },
                actions: [
                  { label: "Open project details", kind: "modal", projectId: "melodymap" },
                  { label: "Open QA preview", href: "https://qa.melodymap.ai/", newTab: true },
                ],
              },
            ],
          },
          skillsTitle: "Senior Data Engineer Capabilities",
          capabilitiesSummary:
            "My strongest contribution is the connective layer between business meaning, data architecture, engineering execution, and trusted release outcomes.",
          capabilityGroups: [
            {
              title: "Data",
              items: [
                "Snowflake",
                "SQL",
                "Data Modeling",
                "ETL/ELT",
                "Data Warehousing",
                "SQL Server",
                "Informatica",
                "Control-M",
                "Azure Data Factory",
                "SSIS",
                "Power BI",
              ],
            },
            {
              title: "Engineering Practices",
              items: ["SQL Performance Tuning", "Data Quality", "Source-to-Target Mapping", "Data Lineage", "Git"],
            },
            {
              title: "Applied AI",
              items: ["Snowflake Cortex Agents", "Gemini", "AI-Assisted Product Development"],
            },
            {
              title: "Leadership",
              items: [
                "Solution Architecture",
                "Executive Stakeholder Communication",
                "Distributed Delivery",
                "Requirements Translation",
                "QA and Data Validation",
              ],
            },
            {
              title: "Spoken Languages",
              items: ["English and Korean — Native/Bilingual Proficiency"],
            },
          ],
        },
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    intro:
      "I do my best work where business pressure is high, data access is controlled, and the solution still needs to remain understandable from requirement through release.",
    items: [
      {
        id: "honeywell",
        company: "Honeywell Aerospace",
        role: "Data Engineer II",
        period: "August 2024 – Current",
        location: "Phoenix, AZ",
        bullets: [
          "Reduced the full-load runtime of a multi-layer Snowflake pipeline supporting a 10M+ row, 200+ column data model from up to three hours to 30 minutes, an 83% runtime reduction, by replacing expensive nested-view dependencies, removing unnecessary joins and CTEs, and limiting transformations to required columns.",
          "Lead technical delivery for executive-facing analytics initiatives, partnering directly with directors, senior leaders, finance, supply chain, and EDW teams to translate ambiguous business priorities into governed Snowflake solutions.",
          "Co-design the greenfield EDW architecture and data model for Executive Cockpit with the enterprise data architect, defining source mappings, business logic, grain, acceptance criteria, and phased ingestion requirements.",
          "Coordinate delivery across global engineering workstreams, typically guiding 2–5 engineers per initiative through designated DE leads and supporting concurrent projects across a broader pool of approximately 12 engineers.",
          "Serve as a primary restricted-data QA validation partner for global engineers without environment access, executing workflows, diagnosing duplicates and missing values, and coordinating release readiness across 20+ enterprise data models, with deep ownership of three complex finance, purchasing, and operational models.",
          "Developed a Snowflake Cortex Agent prototype for technical metadata automation that generates business definitions and source-to-target lineage for hundreds of columns, achieving approximately 90% mapping accuracy in initial testing and reducing draft preparation time from 4+ hours to minutes.",
        ],
      },
      {
        id: "asuep",
        company: "ASU Enterprise Partners",
        role: "Data Engineer I",
        period: "Mar 2022 - Jul 2024",
        location: "Tempe, AZ",
        bullets: [
          "Modernized enterprise ETL/ELT pipelines across Salesforce, Workday, and Azure Blob Storage using SSIS, Azure Data Factory, and SQL Server, centralizing cross-system data for analytics and reporting.",
          "Developed SQL Server stored procedures and automated data-quality checks that resolved duplicate records, improved Power BI refresh reliability, and replaced complex report-level DAX with governed warehouse logic.",
        ],
      },
      {
        id: "oracle-cerner",
        company: "Oracle Cerner",
        role: "Technical Solution Analyst",
        period: "Feb 2021 - Mar 2022",
        location: "Kansas City, MO",
        bullets: [
          "Resolved high-volume production data and application issues using Oracle SQL, logs, and monitoring while sustaining 90%+ client satisfaction and meeting healthcare SLAs.",
          "Partnered with client and engineering teams to investigate data-integrity failures, perform safe SQL updates, and stabilize data flows in 24/7 healthcare environments.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Degrees and the discipline behind them.",
    body:
      "The academic record matters. The operating change behind it—turning careful documentation and structured thinking into professional strengths—matters even more.",
    items: [
      {
        label: "Master's Degree",
        degree: "M.S. in Business Analytics",
        school: "W. P. Carey School of Business, Arizona State University",
        period: "Aug 2023 - Dec 2024",
        detail: "GPA 4.0 · Graduated with distinction",
        image: "Files/2024_MS-BA_diploma.png",
        imageAlt: "Master of Science diploma",
        href: "Files/2024_MS-BA Diploma.pdf",
      },
      {
        label: "Bachelor's Degree",
        degree: "B.S. in Computer Information Systems",
        school: "W. P. Carey School of Business, Arizona State University",
        period: "Aug 2016 - Dec 2020",
        detail: "GPA 2.73",
        image: "Files/2020_CIS_diploma.png",
        imageAlt: "Bachelor of Science diploma",
        href: "Files/2020_CIS_Diploma.pdf",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    email: "jisungwoo9@gmail.com",
    copyLabel: "Copy email",
    copySuccess: "Copied to clipboard",
    actions: [
      { label: "LinkedIn", href: linkedinHref },
      { label: "GitHub", href: githubHref },
      { label: "Resume", href: dataResumeHref, download: true },
    ],
  },
  footer: "A bilingual Senior Data Engineer portfolio built around clear ownership, trusted delivery, and intentional design.",
  ui: {
    menu: "Open menu",
    close: "Close",
    openDetails: "Open details",
    viewCredential: "View credential",
    closeDetails: "Close details",
    viewScreenshots: "View screenshots",
    previousImage: "Previous image",
    nextImage: "Next image",
    screenshot: "Screenshot",
    zoomImage: "Zoom image",
    fitImage: "Fit image to screen",
    primaryNav: "Primary navigation",
    themeGroup: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
  },
};
