# Design System — Jisung Woo Portfolio

## Product Context
- **What this is:** A bilingual personal portfolio with a cinematic role selector and two separate professional profile pages.
- **Who it's for:** Hiring managers, recruiters, and technical leaders evaluating Jisung Woo for Senior Data Engineer or Product Manager roles.
- **Space/industry:** Career portfolio, data engineering, technical product management, AI workflow products.
- **Project type:** Editorial portfolio site with role-specific proof, resume CTAs, and project case studies.

## Memorable Thing
Visitors should remember that this is not one vague hybrid profile. It is one person with two clean evaluation paths, each backed by real proof.

## Aesthetic Direction
- **Direction:** Editorial/Magazine with restrained product craft.
- **Decoration level:** Intentional. Use paper texture, rule lines, skill ribbons, and real screenshots instead of glow effects or fake dashboards.
- **Mood:** Human-made, senior, calm, specific. The landing page can stay cinematic; role pages should feel like a polished portfolio deck a real design team would ship.
- **Reference sites:** Behance personal portfolio reference, plus `JisungWoo/jisung_website_v4` for original data-engineering structure and assets.

## Typography
- **Display/Hero:** Fraunces. Use for large editorial titles and strong section headings.
- **Body:** Source Sans 3. Use for readable long-form case-study copy.
- **UI/Labels:** IBM Plex Mono. Use sparingly for section labels, metrics, and proof tags.
- **Korean:** Noto Sans KR for Korean pages.
- **Loading:** Google Fonts via `generate-site.mjs`.
- **Scale:** Hero 72-104px desktop / 44-56px mobile, section title 42-64px, card title 24-32px, body 17-19px, label 11-13px.

## Color
- **Approach:** Restrained. One shared editorial palette with role-specific accents.
- **Paper:** `#f4efe4`. Warm page canvas.
- **Ink:** `#11120f`. Primary text.
- **Pine:** `#18362e`. Primary deep brand color for nav/footer and serious surfaces.
- **Mustard:** `#d6a13b`. Shared accent for ribbons, dividers, and active marks.
- **Data Accent:** `#245c73`. Used on Data Engineer proof and technical surfaces.
- **Product Accent:** `#a7623d`. Used on Product Manager proof and product surfaces.
- **Line:** `#d8cfbf`. Subtle borders and separators.
- **Dark mode:** Profile pages may keep dark mode support, but the role-page design is optimized for light editorial readability. Do not force dark cinematic styling onto these pages.

## Spacing
- **Base unit:** 8px.
- **Density:** Spacious but not empty. Use generous vertical section breaks, tighter card interiors.
- **Scale:** xs 8, sm 12, md 16, lg 24, xl 32, 2xl 48, 3xl 72, 4xl 112.

## Layout
- **Approach:** Hybrid. Strict content grid for readability, editorial asymmetry for personality.
- **Grid:** 12-column desktop, 6-column tablet, 1-column mobile.
- **Max content width:** 1180px for role pages.
- **Border radius:** Small only. 4px for buttons/images, 8px max for cards. Avoid bubbly rounded-card repetition.
- **Page rhythm:** Role hero, skill ribbon, proof cards, feature case study, project evidence, experience timeline, contact/resume block.

## Motion
- **Approach:** Intentional. Motion should help orientation, not perform.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for movement.
- **Duration:** Micro 120ms, short 220ms, medium 420ms.
- **Reduced motion:** Respect `prefers-reduced-motion` and the existing `.reduce-motion` mode.

## Decisions Log
| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-06-29 | Keep cinematic landing, redesign role pages editorial-light | The selector works as a role gate. The inner pages need human portfolio credibility, not another dark tech surface. |
| 2026-06-29 | Use role-specific resume paths | Data Engineer must use `Files/JisungWoo_Resume.pdf`; Product Manager must use `Files/JisungWoo_Resume-PM.pdf`. |
| 2026-06-29 | Use real project imagery | AI Agent images come from `Files/AI_Project_Screenshot`; MelodyMap images come from `Files/MelodyMap.ai`. |
