import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { portfolioSite } from "../src/data/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ensureDir = (target) => mkdirSync(target, { recursive: true });
const out = (...parts) => path.join(root, ...parts);
const safeJson = (value) =>
  JSON.stringify(value).replace(/</g, "\\u003C").replace(/>/g, "\\u003E").replace(/&/g, "\\u0026");
const normalizeHtml = (value) => value.replace(/[ \t]+$/gm, "");
const escapeAttr = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const iconSvg = (name) => {
  switch (name) {
    case "linkedin":
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 8.5V21H2.78V8.5h4.16ZM4.86 2C6.3 2 7.2 2.96 7.2 4.22c0 1.23-.88 2.22-2.3 2.22h-.03C3.49 6.44 2.6 5.45 2.6 4.22 2.6 2.96 3.52 2 4.86 2ZM21.4 13.3V21h-4.15v-7.21c0-1.81-.65-3.04-2.27-3.04-1.24 0-1.98.83-2.3 1.63-.12.29-.15.69-.15 1.09V21H8.38s.06-11.3 0-12.5h4.15v1.77c.55-.84 1.54-2.04 3.75-2.04 2.74 0 4.8 1.79 4.8 5.63Z"/></svg>`;
    case "github":
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.7.5 12.12c0 5.13 3.3 9.48 7.9 11.01.58.11.79-.25.79-.57 0-.28-.01-1.03-.02-2.02-3.21.7-3.89-1.56-3.89-1.56-.52-1.35-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.21 1.77 1.21 1.03 1.78 2.71 1.27 3.37.97.1-.76.4-1.27.73-1.57-2.56-.3-5.25-1.3-5.25-5.77 0-1.27.45-2.3 1.18-3.12-.12-.3-.51-1.53.11-3.18 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.17-1.2 3.17-1.2.63 1.66.24 2.9.12 3.19.74.82 1.18 1.85 1.18 3.12 0 4.48-2.7 5.46-5.28 5.76.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .32.21.69.8.57 4.6-1.53 7.89-5.88 7.89-11.01C23.5 5.7 18.35.5 12 .5Z"/></svg>`;
    case "resume":
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h8l4 4v16H6V2Zm8 1.5V7h3.5L14 3.5ZM8.5 10h7v1.5h-7V10Zm0 3h7v1.5h-7V13Zm0 3h5v1.5h-5V16Z"/></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".18"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`;
  }
};

const inferActionIcon = (action) => {
  const label = `${action.label ?? ""} ${action.href ?? action.url ?? ""}`.toLowerCase();
  if (label.includes("linkedin")) return "linkedin";
  if (label.includes("github")) return "github";
  if (label.includes("resume") || action.download) return "resume";
  return "dot";
};

const renderSocialLinks = (actions = [], { className = "social-chip", iconOnly = false } = {}) =>
  actions
    .map((action) => {
      const iconName = inferActionIcon(action);
      const label = action.label ?? "";
      const content = iconOnly
        ? `${iconSvg(iconName)}<span class="sr-only">${label}</span>`
        : `${iconSvg(iconName)}<span>${label}</span>`;

      if (action.kind === "modal") {
        return `<button ${actionAttrs(action, className)} aria-label="${label}" title="${label}">${content}</button>`;
      }

      return `<a ${actionAttrs(action, className)} aria-label="${label}" title="${label}">${content}</a>`;
    })
    .join("");

const actionAttrs = (action, className = "link-chip") => {
  if (action.kind === "modal") {
    return `type="button" class="${className}" data-open-project="${action.projectId}"`;
  }

  const external = /^https?:/i.test(action.href);
  const target = external || action.newTab ? ' target="_blank" rel="noreferrer"' : "";
  const download = action.download ? " download" : "";
  const roleNav = action.roleNav ? ' data-role-nav="true"' : "";
  return `href="${action.href}" class="${className}"${target}${download}${roleNav}`;
};

const renderActions = (actions = [], className = "link-chip") =>
  actions
    .map((action) =>
      action.kind === "modal"
        ? `<button ${actionAttrs(action, className)}>${action.label}</button>`
        : `<a ${actionAttrs(action, className)}>${action.label}</a>`
    )
    .join("");

const renderPanelActions = (actions = []) =>
  actions
    .map((action, index) => {
      const className = `panel-cta ${index === 0 ? "is-primary" : "is-secondary"}`;
      return action.kind === "modal"
        ? `<button ${actionAttrs(action, className)}>${action.label}</button>`
        : `<a ${actionAttrs(action, className)}>${action.label}</a>`;
    })
    .join("");

const roleText = (site, role) => {
  const isKo = site.languageCode === "ko";
  const isProduct = role.id === "product-manager";
  const featurePoints = isKo
    ? ["Snowflake GET_LINEAGE 기반 추적", "LLM 기반 의미 보강", "최종 결과를 Snowflake 테이블로 게시"]
    : ["Snowflake lineage traversal", "LLM-assisted semantic enrichment", "Published lineage outputs back into Snowflake"];

  return {
    back: isKo ? "역할 선택으로 돌아가기" : "Back to role selector",
    path: isKo ? "선택한 프로필" : "Selected profile",
    proof: isKo ? "역할별 증거" : "Role proof",
    selectedWork: isKo ? "선별된 작업" : "Selected work",
    method: isKo ? "작업 방식" : "How I work",
    capability: isKo ? "기술 스택" : "Capability map",
    experience: isKo ? "경력 흐름" : "Experience thread",
    resume: isKo ? "이력서" : "Resume",
    featureLabel: isKo ? "데이터 사례" : "Data case",
    featureTitle: isKo ? "Snowflake 컬럼 계보 자동화" : "Snowflake Column Lineage",
    featureBody: isKo
      ? "9,000개 이상 Snowflake 객체를 대상으로 컬럼 단위 계보를 자동화하고, 사람이 검토할 수 있는 문서화 흐름으로 바꾼 작업입니다."
      : "A lineage automation effort across 9,000+ Snowflake objects, turning warehouse complexity into reviewable documentation and operating proof.",
    featurePoints,
    heroNote: isProduct
      ? isKo
        ? "모호한 문제를 팀이 범위화하고, 만들고, 검증하고, 출시할 수 있는 기술 제품 작업으로 바꿉니다."
        : "I turn ambiguity into technical product work teams can scope, build, QA, and ship."
      : isKo
        ? "엔터프라이즈 데이터 시스템을 운영하고, 설명하고, 이어받을 수 있는 신뢰 가능한 구조로 만듭니다."
        : "I make enterprise data systems reliable enough to run, explain, and hand off.",
  };
};

const roleSkillRibbon = (role) => {
  const groups = role.profile.capabilityGroups ?? role.profile.skills;
  const skills = groups.flatMap((group) => group.items);
  return [...role.proof, ...skills].slice(0, 14);
};

const renderSkillRibbon = (items, label) => {
  const loopItems = [...items, ...items];
  const content = loopItems.map((item) => `<span>${item}</span>`).join("");

  return `
      <section class="skill-ribbon" aria-label="${label}">
        <div class="skill-ribbon-track">
          <div class="skill-ribbon-group">${content}</div>
          <div class="skill-ribbon-group" aria-hidden="true">${content}</div>
        </div>
      </section>`;
};

const roleProjectMedia = (role, index) => {
  if (role.id === "product-manager") {
    return [
      { src: "Files/MelodyMap.ai/Dashboard.png", alt: "MelodyMap dashboard screenshot" },
      { src: "Files/AI_Project_Screenshot/20260325_Overview.jpg", alt: "AI Agent Orchestration Platform overview screenshot" },
      { src: "Files/Honeywell.png", alt: "Honeywell logo", contain: true },
    ][index];
  }

  return [
    { src: "Files/Honeywell.png", alt: "Honeywell logo", contain: true },
    { src: "Files/ASUEP.png", alt: "ASU Enterprise Partners logo", contain: true },
    { src: "Files/Project_Icons/Capstone_Title_Page.jpg", alt: "Tennis analytics capstone title slide" },
  ][index];
};

const renderRoleActions = (actions = []) => `<div class="editorial-actions">${renderActions(actions, "editorial-button")}</div>`;

const renderLineageVisual = (site) => {
  const isKo = site.languageCode === "ko";
  const rows = isKo
    ? [
        ["Source", "SAP 원천 필드"],
        ["Transform", "SQL 변환 로직"],
        ["Classify", "LLM 의미 분류"],
        ["Publish", "Snowflake 결과 테이블"],
      ]
    : [
        ["Source", "SAP source fields"],
        ["Transform", "SQL transformation logic"],
        ["Classify", "LLM semantic mapping"],
        ["Publish", "Snowflake output tables"],
      ];

  return `
    <div class="lineage-visual" aria-label="${isKo ? "컬럼 계보 흐름" : "Column lineage flow"}">
      ${rows
        .map(
          ([label, value], index) => `
        <div class="lineage-node">
          <span>${String(index + 1).padStart(2, "0")} / ${label}</span>
          <strong>${value}</strong>
        </div>`
        )
        .join("")}
    </div>`;
};

const renderRoleHeroVisual = (site, role, copy) => {
  return `
    <figure class="role-portrait-proof">
      <img src="Files/Profile_Pic_Graduation.jpg" alt="${site.hero.photoAlt}" />
      <figcaption>
        <strong>${role.title}</strong>
      </figcaption>
    </figure>`;
};

const renderRoleFeatureVisual = (site) => renderLineageVisual(site);

const renderZoomableImage = ({ src, alt, caption, imgClass = "" }) => {
  const classAttr = imgClass ? ` class="${escapeAttr(imgClass)}"` : "";

  return `<button class="media-zoom-button" type="button" data-open-image="${escapeAttr(src)}" data-open-image-alt="${escapeAttr(alt)}" data-open-image-caption="${escapeAttr(caption ?? alt)}" aria-label="Open larger image: ${escapeAttr(caption ?? alt)}"><img${classAttr} src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" /><span class="sr-only">Open larger image</span></button>`;
};

const renderRoleProjectCard = (role, project, index) => {
  const media = project.media ?? roleProjectMedia(role, index);

  return `
    <article class="editorial-project-card reveal">
      ${
        media
          ? `<figure class="${media.contain ? "contain-media" : ""}">${renderZoomableImage({
              src: media.src,
              alt: media.alt ?? project.title,
              caption: project.title,
            })}</figure>`
          : ""
      }
      <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <h3>${project.title}</h3>
      <p class="project-meta">${project.meta}</p>
      <p>${project.body}</p>
      ${project.actions?.length ? `<div class="project-links">${renderActions(project.actions)}</div>` : ""}
    </article>`;
};

const renderRoleProjectSection = (role, { id = "", className = "", eyebrow, title, summary = "", projects = [], headingId }) => {
  const titleId = headingId ?? `${role.id}-${className || "work"}-title`.replace(/\s+/g, "-");
  const idAttr = id ? ` id="${id}"` : "";
  const classes = ["selected-work-section", className].filter(Boolean).join(" ");

  return `
      <section${idAttr} class="${classes}" aria-labelledby="${titleId}">
        <div class="section-head reveal">
          <p class="editorial-kicker">${eyebrow}</p>
          <h2 id="${titleId}">${title}</h2>
          ${summary ? `<p class="section-copy">${summary}</p>` : ""}
        </div>
        <div class="editorial-project-grid">
          ${projects.map((project, index) => renderRoleProjectCard(role, project, index)).join("")}
        </div>
      </section>`;
};

const modalProjectCard = (site, projectId, overrides = {}) => {
  const project = (site.modalProjects ?? []).find((item) => item.id === projectId);
  if (!project) return null;

  const mediaSrc = overrides.media?.src ?? project.imagePair?.[0] ?? null;
  const contain = overrides.media?.contain ?? project.containFirstImage ?? false;

  return {
    title: overrides.title ?? project.title,
    meta: overrides.meta ?? project.meta,
    body: overrides.body ?? project.summary,
    tags: overrides.tags ?? project.tags.slice(0, 3),
    media: mediaSrc
      ? {
          src: mediaSrc,
          alt: overrides.media?.alt ?? `${project.title} visual`,
          contain,
        }
      : null,
    actions: [{ label: overrides.actionLabel ?? site.ui.openDetails, kind: "modal", projectId }],
  };
};

const renderWorkedAtSection = (site, shared) => `
      <section class="profile-worked-section reveal" aria-label="${site.hero.logoLabel}">
        <p class="editorial-kicker">${site.hero.logoLabel}</p>
        <div class="profile-logo-track">
          ${shared.logos
            .map(
              (logo) => `
          <figure class="profile-logo-item">
            <img src="${logo.src}" alt="${logo.alt}" />
          </figure>`
            )
            .join("")}
        </div>
      </section>`;

const renderRoleCapabilitySection = (site, role, copy) => {
  const groups = role.profile.capabilityGroups ?? role.profile.skills;
  const summary = role.profile.capabilitiesSummary ?? site.capabilities.body;

  return `
      <section id="capabilities" class="role-method-section role-capability-section">
        <div class="method-copy reveal">
          <div>
            <p class="editorial-kicker">${copy.method}</p>
            <h2>${role.profile.methodTitle}</h2>
          </div>
          <div class="method-points">
            ${role.profile.highlights.map((item) => `<p>${item}</p>`).join("")}
            <p class="method-summary">${summary}</p>
          </div>
        </div>
        <div class="role-capability-grid reveal reveal-delay-1">
          ${groups
            .map(
              (group, index) => `
            <article>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${group.title}</h3>
              <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </article>`
            )
            .join("")}
        </div>
      </section>`;
};

const renderRoleExperienceSection = (site, role, copy, experienceItems) => `
      <section id="experience" class="experience-thread-section reveal">
        <div class="experience-section-head">
          <p class="editorial-kicker">${site.experience.eyebrow}</p>
          <h2>${copy.experience}</h2>
          <p>${site.experience.intro}</p>
        </div>
        ${experienceItems
          .map(
            (item) => `
          <article>
            <div>
              <span>${item.period}</span>
              <h3>${item.company}</h3>
              <strong>${item.role}</strong>
            </div>
            <div class="experience-detail">
              <ul>${[item.summary, ...(item.bullets ?? [])].filter(Boolean).map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
            </div>
          </article>`
          )
          .join("")}
      </section>`;

const renderEducationSection = (site) => `
      <section id="education" class="role-education-section" aria-labelledby="role-education-title">
        <div class="section-head reveal">
          <p class="editorial-kicker">${site.education.eyebrow}</p>
          <h2 id="role-education-title">${site.education.title}</h2>
          <p class="section-copy">${site.education.body}</p>
        </div>
        <div class="role-education-grid">
          ${site.education.items
            .map(
              (item) => `
            <article class="role-education-card reveal">
              <figure>${renderZoomableImage({
                src: item.image,
                alt: item.imageAlt,
                caption: item.degree,
              })}</figure>
              <div class="education-card-copy">
                <p class="education-card-label">${item.label}</p>
                <h3>${item.degree}</h3>
                <span class="education-card-school">${item.school}</span>
                <strong class="education-card-period">${item.period}</strong>
                <em class="education-card-detail">${item.detail}</em>
                <a class="inline-link education-card-link" href="${item.href}" target="_blank" rel="noreferrer">${site.ui.viewCredential ?? site.ui.openDetails}</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </section>`;

const renderRoleEditorialPage = (site, shared, role) => {
  const copy = roleText(site, role);
  const ribbon = roleSkillRibbon(role);
  const experienceItems = role.profile.experienceItems ?? site.experience.items;
  const proofCards = role.profile.roleProof ?? role.profile.proof;
  const showFeatureCase = role.id !== "product-manager";
  const featureActions = showFeatureCase
    ? role.profile.actions.filter((action) => action.label.toLowerCase().includes("deep") || action.href?.includes("column_lineage"))
    : [];
  const archiveProjects = (role.profile.archiveProjectIds ?? []).map((projectId) => modalProjectCard(site, projectId)).filter(Boolean);

  return `
    <div id="${role.id}" class="editorial-role-page ${role.tone === "product" ? "product-editorial" : "data-editorial"}">
      <section id="about" class="editorial-role-hero">
        <div class="editorial-hero-copy reveal">
          <a class="path-return" href="${site.pagePath.includes("_kr") ? "index_kr.html" : "index.html"}">${copy.back}</a>
          <p class="editorial-kicker">${copy.path}</p>
          <h1>${role.title}</h1>
          <p class="editorial-lede">${copy.heroNote}</p>
          <p class="editorial-summary">${role.profile.summary}</p>
          ${renderRoleActions(role.profile.actions)}
        </div>
        <aside class="editorial-hero-proof reveal reveal-delay-1" aria-label="${site.languageCode === "ko" ? `${role.title} 프로필 증거` : `${role.title} profile proof`}">
          ${renderRoleHeroVisual(site, role, copy)}
          <div class="editorial-proof-list">
            ${role.profile.proof.map((item) => `<div><span>${item.label}</span><strong>${item.value}</strong></div>`).join("")}
          </div>
        </aside>
      </section>

      ${renderSkillRibbon(ribbon, copy.capability)}

      ${renderWorkedAtSection(site, shared)}

      <section class="role-proof-board reveal" aria-labelledby="role-proof-title">
        <div>
          <p class="editorial-kicker">${copy.proof}</p>
          <h2 id="role-proof-title">${role.profile.title}</h2>
        </div>
        <div class="proof-card-grid">
          ${proofCards
            .map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.value}</strong><p>${item.label}</p></article>`)
            .join("")}
        </div>
      </section>

      ${
        showFeatureCase
          ? `<section id="projects" class="feature-case-study">
        <div class="feature-media reveal">${renderRoleFeatureVisual(site)}</div>
        <div class="feature-copy reveal reveal-delay-1">
          <p class="editorial-kicker">${copy.featureLabel}</p>
          <h2>${copy.featureTitle}</h2>
          <p>${copy.featureBody}</p>
          <ul>${copy.featurePoints.map((item) => `<li>${item}</li>`).join("")}</ul>
          ${featureActions.length ? renderRoleActions(featureActions) : ""}
        </div>
      </section>`
          : ""
      }

      ${renderRoleProjectSection(role, {
        id: showFeatureCase ? "" : "projects",
        eyebrow: copy.selectedWork,
        title: role.profile.projectsTitle,
        projects: role.profile.projects,
        headingId: "selected-work-title",
      })}

      ${
        role.profile.aiWork
          ? renderRoleProjectSection(role, {
              id: "ai-work",
              className: "ai-work-section",
              eyebrow: role.profile.aiWork.eyebrow,
              title: role.profile.aiWork.title,
              summary: role.profile.aiWork.summary,
              projects: role.profile.aiWork.projects,
              headingId: `${role.id}-ai-work-title`,
            })
          : ""
      }

      ${
        archiveProjects.length
          ? renderRoleProjectSection(role, {
              id: "archive",
              className: "archive-work-section",
              eyebrow: role.profile.archiveEyebrow,
              title: role.profile.archiveTitle,
              summary: role.profile.archiveSummary,
              projects: archiveProjects,
              headingId: `${role.id}-archive-title`,
            })
          : ""
      }

      ${renderRoleCapabilitySection(site, role, copy)}

      ${renderRoleExperienceSection(site, role, copy, experienceItems)}

      ${renderEducationSection(site)}
    </div>`;
};

const renderNav = (site, shared) => {
  const switchTargetLang = site.localeSwitch.href.endsWith("_kr.html") || site.localeSwitch.href.endsWith("index_kr.html") ? "ko" : "en";

  return `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand-mark" href="#top" aria-label="${site.hero.name}">${site.hero.name}</a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="${site.ui.menu}">
        <span></span><span></span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="${site.ui.primaryNav}">
        <div class="nav-links">
          ${site.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </div>
        <div class="nav-utilities">
          <div class="nav-socials">
            ${renderSocialLinks(
              [
                { label: "LinkedIn", href: shared.linkedinHref },
                { label: "GitHub", href: shared.githubHref },
              ],
              { className: "social-icon-link", iconOnly: true }
            )}
          </div>
          <div class="theme-switch" role="group" aria-label="${site.ui.themeGroup}">
            <button type="button" class="theme-option is-active" data-set-theme="light" aria-pressed="true">${site.ui.themeLight}</button>
            <button type="button" class="theme-option" data-set-theme="dark" aria-pressed="false">${site.ui.themeDark}</button>
          </div>
          <a class="lang-pill" href="${site.localeSwitch.href}" hreflang="${switchTargetLang}" lang="${switchTargetLang}">${site.localeSwitch.label}</a>
        </div>
      </nav>
    </div>
  </header>`;
};

const renderCareerTrack = (track, index, languageCode = "en") => `
  <article class="career-card cinematic-panel ${track.tone === "product" ? "product-track" : "data-track"} ${
    index === 0 ? "is-active" : ""
  }" data-career-track="${track.id}" data-active-status="${track.activeStatus}" data-idle-status="${track.idleStatus}" aria-current="${index === 0 ? "true" : "false"}" aria-label="${track.title}">
    <img class="panel-media" src="${track.media}" alt="" aria-hidden="true" width="1024" height="1536" decoding="async" loading="${index === 0 ? "eager" : "lazy"}"${index === 0 ? ' fetchpriority="high"' : ""} />
    <div class="panel-vignette" aria-hidden="true"></div>
    <div class="panel-noise" aria-hidden="true"></div>
    <div class="panel-sweep" aria-hidden="true"></div>
    <button class="panel-hit-button" type="button" data-panel-activate aria-label="${languageCode === "ko" ? `${track.title} 선택` : `Select ${track.title}`}"></button>
      <div class="panel-inner">
      <div class="panel-topline ${track.eyebrow ? "" : "panel-topline--status-only"}">
        ${track.eyebrow ? `<span>${track.eyebrow}</span>` : ""}
        <span class="panel-status">${index === 0 ? track.activeStatus : track.idleStatus}</span>
      </div>
      <div class="career-card-head">
        <p>${track.mode}</p>
        <h2>${track.title}</h2>
      </div>
      ${track.subtitle ? `<p class="career-subtitle">${track.subtitle}</p>` : ""}
      <p class="career-summary">${track.summary}</p>
      <div class="career-proof">
        ${track.proof.map((item) => `<span>${item}</span>`).join("")}
      </div>
      <ul class="career-points">
        ${track.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <div class="career-actions">${renderPanelActions(track.actions)}</div>
    </div>
  </article>`;

const renderHero = (site, shared, { selectorOnly = false } = {}) => `
  <section id="top" class="hero-section cinematic-hero ${selectorOnly ? "selector-landing-hero" : ""}">
    <div class="hero-shell cinematic-shell">
      ${
        selectorOnly
          ? ""
          : `<div class="selector-masthead reveal">
        <div>
          <h1 class="display-name">${site.hero.name}</h1>
          <p class="role-line">${site.hero.role}</p>
        </div>
        <p class="hero-thesis">${site.hero.thesis}</p>
      </div>`
      }
      <div id="paths" class="career-selector cinematic-selector reveal reveal-delay-1" aria-label="${site.career.bridgeTitle}">
        ${
        selectorOnly
            ? `<h1 class="selector-nameplate"><span>${site.hero.name}</span></h1>`
            : ""
        }
        ${site.career.tracks.map((track, index) => renderCareerTrack(track, index, site.languageCode)).join("")}
      </div>
      ${
        selectorOnly
          ? ""
          : `<div class="selector-hud reveal reveal-delay-2" aria-hidden="true">
        <div>
          <span>${site.languageCode === "ko" ? "모드" : "Mode"}</span>
          <strong>${site.languageCode === "ko" ? "프로필 선택" : "Role selector"}</strong>
        </div>
        <div>
          <span>${site.languageCode === "ko" ? "사용자" : "User"}</span>
          <strong>${site.hero.name}</strong>
        </div>
        <div>
          <span>${site.languageCode === "ko" ? "상태" : "Status"}</span>
          <strong>${site.languageCode === "ko" ? "대기 중" : "Ready"}</strong>
        </div>
        <div class="hud-bars"><span></span><span></span><span></span><span></span><span></span></div>
      </div>`
      }
      ${
        selectorOnly
          ? ""
          : `<div class="career-bridge reveal reveal-delay-2">
        <div>
          <h2>${site.career.bridgeTitle}</h2>
          <p>${site.career.bridgeCopy}</p>
        </div>
        <div class="bridge-steps">
          ${site.career.milestones
            .map(
              (item, index) => `
            <div class="bridge-step">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <p>${item.label}</p>
              <strong>${item.title}</strong>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      }
    </div>
    ${
      selectorOnly
        ? ""
        : `<div class="brand-rail reveal reveal-delay-3">
      <p class="rail-label">${site.hero.logoLabel}</p>
      <div class="logo-track">
        ${shared.logos
          .map((logo) => `<div class="logo-item"><img src="${logo.src}" alt="${logo.alt}" /></div>`)
          .join("")}
      </div>
    </div>`
    }
  </section>`;

const renderContact = (site, role = null) => {
  const roleResumeAction = role?.profile.actions.find((action) => action.download && action.href);
  const actions = role
    ? [
        ...site.contact.actions.filter((action) => !action.download),
        roleResumeAction ? { label: role.profile.resumeLabel, href: roleResumeAction.href, download: true } : null,
      ].filter(Boolean)
    : site.contact.actions;
  const title = role
    ? site.languageCode === "ko"
      ? `${role.title} 역할에 대해 이야기 나누고 싶습니다.`
      : `Let's talk about ${role.title} roles.`
    : site.contact.title;
  const body = role ? role.profile.summary : site.contact.body;

  return `
  <section id="contact" class="contact-section">
    <div class="contact-card reveal">
      <p class="editorial-kicker">${site.contact.eyebrow}</p>
      <h2 class="section-title">${title}</h2>
      <p class="section-copy">${body}</p>
      <div class="email-shell">
        <span class="email-address">${site.contact.email}</span>
        <button type="button" class="copy-button" data-copy-email>${site.contact.copyLabel}</button>
      </div>
      <p class="copy-status" aria-live="polite">${site.contact.copySuccess}</p>
      <div class="contact-links contact-socials">${renderSocialLinks(actions)}</div>
    </div>
  </section>`;
};

const renderFooter = (site, year) => `
  <footer class="site-footer">
    <p>${site.footer}</p>
    <small>&copy; ${year} ${site.hero.name}</small>
  </footer>`;

const renderAlternateLinks = (alternates = []) =>
  alternates
    .map((item) => `<link rel="alternate" hreflang="${item.lang}" href="./${item.href}" />`)
    .join("\n  ");

const renderModalLayers = (site) => `
  <div class="modal-layer" hidden>
    <div class="modal-backdrop" data-close-modal></div>
    <section class="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" type="button" data-close-modal aria-label="${site.ui.close}">&times;</button>
      <div class="modal-scroll">
        <div class="modal-content"></div>
      </div>
    </section>
  </div>
  <div class="lightbox-layer" hidden>
    <div class="modal-backdrop" data-close-lightbox></div>
    <section class="lightbox" role="dialog" aria-modal="true" aria-label="${site.ui.viewScreenshots}">
      <button class="modal-close" type="button" data-close-lightbox aria-label="${site.ui.close}">&times;</button>
      <button class="lightbox-nav prev" type="button" data-lightbox-step="-1" aria-label="${site.ui.previousImage}">&#8249;</button>
      <figure>
        <button class="lightbox-image-button" type="button" data-toggle-lightbox-zoom aria-label="${site.ui.zoomImage}" aria-pressed="false">
          <img src="" alt="${site.ui.screenshot}" />
        </button>
        <figcaption></figcaption>
      </figure>
      <button class="lightbox-nav next" type="button" data-lightbox-step="1" aria-label="${site.ui.nextImage}">&#8250;</button>
    </section>
  </div>`;

const renderShell = (site, shared, { bodyClass, mainMarkup, mainId = "", alternates = [], includeNav = true }) => {
  const payload = safeJson({ site, shared });
  const mainIdAttr = mainId ? ` id="${mainId}"` : "";

  return `<!DOCTYPE html>
<html lang="${site.languageCode}" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${site.title}</title>
  <meta name="description" content="${site.description}" />
  <script>
    (function () {
      try {
        var storedTheme = window.localStorage.getItem("portfolio-theme");
        if (storedTheme === "light" || storedTheme === "dark") {
          document.documentElement.setAttribute("data-theme", storedTheme);
        }
      } catch (error) {
        console.warn("Theme preload skipped.", error);
      }
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,750;9..144,850&family=IBM+Plex+Mono:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700;800&family=Source+Sans+3:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
  ${renderAlternateLinks(alternates)}
  <link rel="icon" href="data:," />
  <link rel="stylesheet" href="./styles.css" />
</head>
<body class="${bodyClass}">
  ${includeNav ? renderNav(site, shared) : ""}
  <main${mainIdAttr}>
    ${mainMarkup}
  </main>
  ${renderFooter(site, shared.year)}
  ${renderModalLayers(site)}
  <script>window.__PORTFOLIO__ = ${payload};</script>
  <script defer src="./app.js"></script>
</body>
</html>`;
};

const renderLandingPage = (site, shared, alternates) =>
  renderShell(site, shared, {
    bodyClass: "landing-page",
    mainMarkup: renderHero(site, shared, { selectorOnly: true }),
    alternates,
    includeNav: false,
  });

const renderRolePage = (site, shared, role, alternates) =>
  renderShell(site, shared, {
    bodyClass: `profile-page ${role.tone === "product" ? "product-profile-page" : "data-profile-page"}`,
    mainId: "top",
    mainMarkup: `
    ${renderRoleEditorialPage(site, shared, role)}
    ${renderContact(site, role)}`,
    alternates,
  });

ensureDir(out("scripts"));

const shared = {
  year: portfolioSite.year,
  logos: portfolioSite.logos,
  heroMedia: portfolioSite.heroMedia,
  linkedinHref: portfolioSite.linkedinHref,
  githubHref: portfolioSite.githubHref,
  resumeHref: portfolioSite.resumeHref,
  dataResumeHref: portfolioSite.dataResumeHref,
  productResumeHref: portfolioSite.productResumeHref,
};

const navLabels = {
  en: {
    choose: "Select Role",
    profile: "Profile",
    projects: "Projects",
    archive: "Archive",
    capabilities: "How I Work",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  ko: {
    choose: "프로필 선택",
    profile: "프로필",
    projects: "프로젝트",
    archive: "아카이브",
    capabilities: "작업 방식",
    experience: "경력",
    education: "학력",
    contact: "연락처",
  },
};

const pageVariants = [
  {
    kind: "landing",
    localeKey: "en",
    path: "index.html",
    switchHref: "index_kr.html",
    alternates: [
      { lang: "en", href: "index.html" },
      { lang: "ko", href: "index_kr.html" },
      { lang: "x-default", href: "index.html" },
    ],
  },
  {
    kind: "landing",
    localeKey: "ko",
    path: "index_kr.html",
    switchHref: "index.html",
    alternates: [
      { lang: "en", href: "index.html" },
      { lang: "ko", href: "index_kr.html" },
      { lang: "x-default", href: "index.html" },
    ],
  },
  {
    kind: "role",
    localeKey: "en",
    roleId: "data-engineer",
    path: "data-engineer.html",
    switchHref: "data-engineer_kr.html",
    alternates: [
      { lang: "en", href: "data-engineer.html" },
      { lang: "ko", href: "data-engineer_kr.html" },
      { lang: "x-default", href: "data-engineer.html" },
    ],
  },
  {
    kind: "role",
    localeKey: "ko",
    roleId: "data-engineer",
    path: "data-engineer_kr.html",
    switchHref: "data-engineer.html",
    alternates: [
      { lang: "en", href: "data-engineer.html" },
      { lang: "ko", href: "data-engineer_kr.html" },
      { lang: "x-default", href: "data-engineer.html" },
    ],
  },
  {
    kind: "role",
    localeKey: "en",
    roleId: "product-manager",
    path: "product-manager.html",
    switchHref: "product-manager_kr.html",
    alternates: [
      { lang: "en", href: "product-manager.html" },
      { lang: "ko", href: "product-manager_kr.html" },
      { lang: "x-default", href: "product-manager.html" },
    ],
  },
  {
    kind: "role",
    localeKey: "ko",
    roleId: "product-manager",
    path: "product-manager_kr.html",
    switchHref: "product-manager.html",
    alternates: [
      { lang: "en", href: "product-manager.html" },
      { lang: "ko", href: "product-manager_kr.html" },
      { lang: "x-default", href: "product-manager.html" },
    ],
  },
];

for (const page of pageVariants) {
  const baseSite = portfolioSite.locales[page.localeKey];
  const role = page.roleId ? baseSite.career.tracks.find((track) => track.id === page.roleId) : null;
  const labels = navLabels[baseSite.languageCode];
  const site = {
    ...baseSite,
    pagePath: page.path,
    title:
      page.kind === "landing"
        ? baseSite.languageCode === "ko"
          ? "Jisung Woo | Data Engineer 또는 Product Manager"
          : "Jisung Woo | Data Engineer or Product Manager"
        : `${baseSite.hero.name} | ${role.title}`,
    description:
      page.kind === "landing"
        ? baseSite.roleProfiles.body
        : role.profile.summary,
    localeSwitch: { ...baseSite.localeSwitch, href: page.switchHref },
    nav:
      page.kind === "landing"
        ? []
        : [
            { label: labels.choose, href: page.localeKey === "ko" ? "index_kr.html" : "index.html" },
            { label: labels.profile, href: `#${role.id}` },
            { label: labels.projects, href: "#projects" },
            { label: labels.archive, href: "#archive" },
            { label: labels.capabilities, href: "#capabilities" },
            { label: labels.experience, href: "#experience" },
            { label: labels.education, href: "#education" },
            { label: labels.contact, href: "#contact" },
          ],
  };

  const html =
    page.kind === "landing"
      ? renderLandingPage(site, shared, page.alternates)
      : renderRolePage(site, shared, role, page.alternates);

  writeFileSync(out(page.path), normalizeHtml(html), "utf8");
}
