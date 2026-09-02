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
            { label: "Delivery", value: "Offshore coordination" },
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
                "Executive-facing data delivery across requirements, greenfield modeling, offshore implementation, restricted-data validation, release readiness, and complex SQL diagnosis.",
              tags: ["Snowflake", "Data modeling", "Delivery leadership"],
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
                meta: "Founder / Full-Stack AI Product Engineer",
                body:
                  "An AI-assisted workflow platform for music therapists, built around calendar context, reusable location profiles, structured plans, debriefs, and mileage tracking.",
                tags: ["PostgreSQL", "FastAPI", "Gemini"],
                media: { src: "Files/MelodyMap.ai/PlanSutdio-Plan.png", alt: "MelodyMap Plan Studio screenshot" },
                actions: [{ label: "Open project details", kind: "modal", projectId: "melodymap" }],
              },
            ],
          },
          skillsTitle: "Senior Data Engineer Capabilities",
          capabilitiesSummary:
            "My strongest contribution is the connective layer between business meaning, data architecture, engineering execution, and trusted release outcomes.",
          capabilityGroups: [
            {
              title: "Warehouse + Modeling",
              items: ["Snowflake EDW", "SQL transformation logic", "Data modeling", "Data warehousing", "SQL Server"],
            },
            {
              title: "Delivery + Quality",
              items: ["ETL / ELT", "Restricted-data QA", "Data validation", "Release readiness", "Technical stories"],
            },
            {
              title: "Applied AI",
              items: ["Snowflake Cortex Agents", "Gemini integration", "Structured outputs", "Server-side model gateways", "AI-assisted development"],
            },
            {
              title: "Technical Leadership",
              items: ["Executive communication", "Requirements translation", "Solution architecture", "Offshore coordination", "Code-level guidance"],
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
        summary:
          "Lead data delivery for executive-facing analytics initiatives, partnering with directors, senior directors, and cross-functional teams to define metrics, resolve ambiguity, and translate leadership needs into Snowflake solutions.",
        bullets: [
          "Co-design greenfield data models and solution architecture for an Executive Cockpit with the enterprise data architect, defining source mappings, business logic, data grain, and acceptance criteria before development handoff.",
          "Build and iterate a Snowflake Cortex Agent for the Executive Cockpit, connecting governed EDW data so leaders can ask natural-language questions alongside dashboard analysis.",
          "Direct delivery across a distributed offshore engineering team by converting business requirements into technical stories, clarifying implementation logic, reviewing results, resolving blockers, and coordinating release readiness.",
          "Serve as the restricted-data validation authority for QA and production: execute workflows, validate outputs, diagnose duplicate or missing values in SQL definitions spanning thousands of lines, and provide code-level remediation guidance.",
          "Present solution direction, delivery status, risks, and data-quality findings to director- and VP-level stakeholders, aligning business expectations with architecture and engineering constraints.",
        ],
      },
      {
        id: "asuep",
        company: "ASU Enterprise Partners",
        role: "Data Engineer I",
        period: "Mar 2022 - Jul 2024",
        location: "Tempe, AZ",
        summary:
          "Modernized ETL/ELT workflows across SQL Server, Azure, Salesforce, Workday, and Power BI.",
        bullets: [
          "Built and migrated workflows with SSIS and Azure Data Factory while integrating enterprise sources into the data warehouse.",
          "Developed stored procedures and data-quality routines that automated Power BI refreshes, resolved duplicate records, and reduced complex DAX dependencies.",
        ],
      },
      {
        id: "oracle-cerner",
        company: "Oracle Cerner",
        role: "Technical Solution Analyst",
        period: "Feb 2021 - Mar 2022",
        location: "Kansas City, MO",
        summary:
          "Resolved production data and application issues in SLA-driven, 24/7 healthcare environments.",
        bullets: [
          "Investigated high-volume issues using Oracle SQL, logs, and monitoring while sustaining 90%+ client satisfaction.",
          "Partnered with clients and engineering teams to resolve data-integrity failures, perform safe SQL updates, and stabilize data flows.",
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
