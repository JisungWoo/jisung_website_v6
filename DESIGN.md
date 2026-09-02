# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-02
- Primary product surfaces: English portfolio (`index.html`), Korean portfolio (`index_kr.html`), project modals, resume download.
- Evidence reviewed: existing V5/V6 role pages, visual QA screenshots, `styles.css`, `scripts/generate-site.mjs`, portfolio content modules, and Jisung's September 2026 Senior Data Engineer resume.

## Brand
- Personality: Senior, calm, technically credible, human, accountable, and specific.
- Trust signals: Current enterprise scope, explicit ownership boundaries, architecture thinking, restricted-data validation, distributed delivery, real project evidence, and consistent resume alignment.
- Avoid: Multiple competing professional identities, inflated scale claims, fake dashboards, generic AI futurism, excessive glow, bubbly cards, product-manager positioning, and portfolio claims that exceed the resume.

## Product goals
- Goals: Make a recruiter understand Jisung's Senior Data Engineer fit within 20 seconds; show technical leaders how he turns business ambiguity into governed Snowflake delivery; make the resume and portfolio tell one coherent story; preserve founder and earlier-project evidence without letting it dominate current experience.
- Non-goals: Product Manager recruiting, a role-selection experience, a full-screen cinematic gateway, or presenting experimental/failed projects as production proof.
- Success signals: Visitors can identify target role, current scope, technical depth, delivery leadership, and contact path without navigating to another page.

## Personas and jobs
- Primary personas: Technical recruiters, Data Engineering Managers, Directors of Data, Lead/Staff Data Engineers, and CTO/data-platform leaders.
- User jobs: Determine role fit quickly; verify hands-on credibility; understand leadership and architecture scope; inspect selected work; download the current resume; contact Jisung.
- Key contexts of use: Fast desktop screening, mobile link review, interview preparation, and deeper technical evaluation.

## Information architecture
- Primary navigation: Profile, Featured Work, Projects, Earlier Work, How I Work, Experience, Education, Contact.
- Core routes/screens: One English page and one Korean page. No separate landing page or role pages.
- Content hierarchy: Senior Data Engineer hero -> proof strip -> employers -> Executive Cockpit/Cortex case -> selected data work -> MelodyMap -> earlier student/web work -> operating model/capabilities -> experience -> education -> contact.

## Design principles
- One identity, one journey: Every section reinforces Senior Data Engineer positioning.
- Evidence before inventory: Lead with ownership and outcomes before tool lists.
- Personal presence first: Use Jisung's graduation portrait in the profile hero; retain cinematic restraint through composition and contrast rather than replacing him with architectural imagery.
- Resume alignment: Portfolio claims must be supported by the current resume or explicitly labeled as project context.
- Progressive depth: Recruiter-readable summaries first; deeper project detail through modals and case-study sections.
- Tradeoff: Keep older student/web projects as a clearly labeled archive so they show growth without competing with enterprise work.

## Visual language
- Color: Paper `#f4efe4`, ink `#11120f`, pine `#18362e`, mustard `#d6a13b`, data blue `#245c73`, line `#d8cfbf`. Remove product-role orange as a semantic accent.
- Typography: Fraunces for editorial display, Source Sans 3 for body, IBM Plex Mono for labels/metrics, Noto Sans KR for Korean.
- Spacing/layout rhythm: 8px base; generous section separation; tighter evidence cards; 12-column desktop, 6-column tablet, 1-column mobile; 1180px maximum content width.
- Shape/radius/elevation: 4px controls/images, 8px maximum cards, thin rules, minimal shadows.
- Motion: Orientation-only transitions, 120-420ms using `cubic-bezier(0.16, 1, 0.3, 1)`; respect reduced motion.
- Imagery/iconography: Jisung's graduation portrait in the profile hero, supported by real project screenshots, employer marks, and diploma imagery. No cinematic split-screen selector.

## Components
- Existing components to reuse: Editorial hero, proof cards, skill ribbon, employer strip, feature case study, project cards/modals, capability grid, experience timeline, education cards, contact card, theme control, language control.
- New/changed components: Single-profile hero, Executive Cockpit/Cortex flow visual, resume-aligned proof cards.
- Variants and states: Light-first editorial surface with supported dark mode; responsive single-column adaptations; modal and lightbox focus states.
- Token/component ownership: `styles.css` owns tokens and visual primitives; `scripts/generate-site.mjs` owns markup; `src/data/*` owns bilingual content.

## Accessibility
- Target standard: WCAG 2.2 AA where practical.
- Keyboard/focus behavior: Visible focus, keyboard-operable navigation, project modals, lightbox, theme controls, and language switch.
- Contrast/readability: Body copy remains 17-19px on the website; no low-contrast text over photography; avoid text baked into images.
- Screen-reader semantics: One H1, ordered headings, semantic sections, descriptive image alt text, modal labels, and status announcements.
- Reduced motion and sensory considerations: Honor `prefers-reduced-motion`; no required hover-only information or auto-playing visual effects.

## Responsive behavior
- Supported breakpoints/devices: Modern desktop, tablet, and mobile down to 360px.
- Layout adaptations: Hero and case studies stack; proof cards collapse; navigation becomes a menu; project grids become one column; typography scales without clipping.
- Touch/hover differences: All hover affordances also have focus/tap behavior; no selector interaction that depends on pointer hover.

## Interaction states
- Loading: Static content should render without a loading shell.
- Empty: Sections with no data are not rendered.
- Error: Broken optional imagery must not hide core text or actions.
- Success: Copy-email confirmation uses an accessible live region.
- Disabled: Not used for primary navigation or resume actions.
- Offline/slow network: Core text and local assets remain usable; font fallbacks preserve hierarchy.

## Content voice
- Tone: Direct, grounded, senior, and specific without inflated authority.
- Terminology: Senior Data Engineer as target role; Data Engineer II as current title; business/executive priorities; governed Snowflake solutions; distributed/offshore engineering delivery; restricted-data QA; Cortex Agent.
- Microcopy rules: Use active verbs, identify Jisung's ownership, distinguish design/direction from implementation, and mark ongoing work honestly.

## Implementation constraints
- Framework/styling system: Static bilingual HTML generated by Node from `src/data/*.mjs`, with shared `styles.css` and `app.js`.
- Design-token constraints: Extend the existing editorial palette and type system; do not introduce a new framework or dependency.
- Performance constraints: Keep the first view lightweight; lazy-load non-hero imagery; avoid video and heavy canvas effects.
- Compatibility constraints: GitHub Pages/static hosting, modern evergreen browsers, no server-only redirects.
- Test/screenshot expectations: Run the generator, check for stale Product Manager/AI Agent Orchestration references, validate all local links/assets, and visually inspect desktop and mobile English pages plus Korean smoke coverage.

## Open questions
- [ ] Replace the graduation portrait only when Jisung provides and approves a preferred professional headshot.
- [ ] Add sanitized Executive Cockpit visuals only if they can be shared without exposing confidential company information.
