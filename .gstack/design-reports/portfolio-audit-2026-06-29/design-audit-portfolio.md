# Portfolio Design Audit

Date: 2026-06-29

Scope:
- Landing selector: `index.html`, `index_kr.html`
- Role pages: `data-engineer.html`, `product-manager.html`
- Korean role pages: `data-engineer_kr.html`, `product-manager_kr.html`
- Viewports tested: 1440x1000, 820x1180, 390x844, 320x740

Skills used:
- `plan-design-review`: scoring lens for information architecture, AI-slop risk, design system alignment, responsive/accessibility.
- `design-review`: live rendered-page audit, screenshots, fix loop, final verification.

## Headline Result

Design Score: B+ -> A-

AI Slop Score: B+ -> A-

The portfolio now reads as an intentional editorial portfolio system rather than a generic SaaS template. The cinematic landing remains distinct, while the role pages share a restrained print/editorial language.

## What Already Works

- First impression is role-specific and memorable: cinematic selector first, editorial profile pages after selection.
- The role split is clear: Data Engineer and Product Manager content/resume links are not mixed.
- Typography has personality through Fraunces, Source Sans 3, IBM Plex Mono, and Noto Sans KR.
- The page avoids common AI-slop patterns: no purple startup gradients, no icon-in-circle feature grids, no generic dashboard hero.
- The role pages have a consistent visual system: cream grid canvas, dark pine nav, mustard/product/data accents, large editorial type, real project imagery.
- Motion is restrained and mostly purposeful: reveal effects, hover states, and cinematic landing panel motion.

## Findings And Fixes

### FINDING-001: Product Manager narrow mobile had horizontal scroll

Impact: High

Evidence:
- Before audit at 320x740 found `product-manager.html` and `product-manager_kr.html` with `overflowX: true`.
- Culprit: long case-study title content, especially `MelodyMap.ai`, exceeded the feature-card text column by a few pixels.

Fix:
- Added safer text wrapping and smaller mobile heading scale for role-page section headings.
- Added `min-width: 0`, centered alignment, and safe wrapping to editorial buttons.

Files changed:
- `styles.css`

Verification:
- After audit checked all 24 page/viewport combinations.
- Result: `failures: []`.

### FINDING-002: Korean role pages used Noto Sans KR for English role titles

Impact: Medium

Evidence:
- Korean desktop audit reported role `h1` text overflow for `Data Engineer` and `Product Manager`.
- Visual issue: the English role title became too wide and less editorial because `html[lang="ko"]` replaced display type with Noto Sans KR.

Fix:
- Scoped Korean role-page `h1` back to Fraunces while preserving Korean body/copy typography.
- Restored normal English word behavior for those role titles.

Files changed:
- `styles.css`

Verification:
- Korean desktop screenshots now show editorial Fraunces role titles.
- After audit found no text overflow.

## False Positives Reviewed

- Landing panel images intentionally extend beyond panel bounds for cinematic crop/parallax. No document overflow remained.
- `.sr-only` elements intentionally clip text for screen readers. They are not visual text overflow.
- Skill ribbon text intentionally moves outside its visual mask. It does not create final horizontal overflow after heading fix.

## Category Scores

| Category | Before | After | Notes |
|---|---:|---:|---|
| Visual hierarchy | 8.5 | 9.0 | Strong hero hierarchy and clear role separation. |
| Typography | 8.0 | 9.0 | Korean role title issue fixed; mobile heading scale improved. |
| Spacing/layout | 8.0 | 9.0 | No overflow across tested widths; sections align consistently. |
| Color/contrast | 8.5 | 8.5 | High contrast, restrained palette, readable CTAs. |
| Interaction states | 8.0 | 8.0 | Buttons and nav are clear; no new JS behavior changed. |
| Responsive | 7.5 | 9.0 | 320px Product overflow fixed. |
| Content quality | 8.5 | 8.5 | Specific role-based copy; avoids vague marketing claims. |
| AI slop risk | 8.5 | 9.0 | Fewer generic patterns than typical portfolio templates. |
| Motion | 8.0 | 8.0 | Purposeful and not excessive. |
| Performance feel | 8.0 | 8.0 | Static pages, image-heavy but acceptable; no console errors. |

## Validation Evidence

Final browser audit:
- Pages checked: 6
- Viewports checked: 4
- Total checks: 24
- Console errors: 0
- Horizontal overflow failures: 0
- Text overflow failures: 0
- Clipped visual text failures: 0
- Missing anchors: 0
- Broken visible images: 0

Files:
- Before JSON: `.gstack/design-reports/portfolio-audit-2026-06-29/audit-results.json`
- After JSON: `.gstack/design-reports/portfolio-audit-2026-06-29/audit-results-after.json`
- Before screenshots: `.gstack/design-reports/portfolio-audit-2026-06-29/screenshots/`
- After screenshots: `.gstack/design-reports/portfolio-audit-2026-06-29/screenshots-after/`

## Quick Wins Remaining

- Consider compressing large project screenshots before deploy.
- Add Open Graph preview images for the landing and role pages.
- Add a small visual cue on role pages that the top nav returns to the selector.

## Not In Scope

- Reworking content strategy or resume copy.
- Adding new pages beyond existing EN/KR landing and role pages.
- Replacing the current cinematic selector concept.
- Adding new dependencies or animation libraries.

