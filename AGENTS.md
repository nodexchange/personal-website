# AGENTS.md

Project-specific instructions for AI agents working on this repository.

## Product Iteration Versioning

- After every successful product iteration, bump `package.json` `version` before handing work back.
- Use semantic versioning pragmatically:
  - Patch for small copy, metadata, styling, or bug-fix changes.
  - Minor for visible feature work, new sections, new routes, content model changes, or meaningful UX changes.
  - Major only for breaking architecture or public contract changes.
- The footer reads the version from `package.json`, so this is the visible iteration marker for deployed changes.
- Mention the new version in the final response.

## Content Management

- Keep Agentic Playbook article content in `content/playbook/articles/*.json`.
- Keep Playbook theme metadata in `content/playbook/themes.json`.
- Do not move article content back into React components or large TypeScript arrays.
- Preserve each article's `sourceUrl` so readers can choose the local page or LinkedIn.
- Local article pages should remain crawlable and should keep metadata, sitemap entries, and BlogPosting structured data working.
- Use the enhanced Playbook schema: `number`, `series`, `slug`, `title`, `subtitle`, `summary`, `themes`, `tags`, `difficulty`, `sourceUrl`, `sourceType`, `publishedAt`, `readingTime`, optional `coverImage`, `related`, `body`, and optional `sections`.
- Prefer `sections` for long-form articles and `body` for shorter posts; renderers must support both.
- Do not reference `coverImage` paths unless the corresponding asset exists under `public/images/articles/`.
- New article JSON files must be imported in `lib/playbook.ts`; this project uses static imports so article pages and Open Graph image generation stay compatible with static generation and edge runtime.

## Copy And Positioning

- Maintain the site positioning around Engineering Director, investment platforms, product engineering, DevSecOps, global engineering leadership, and safe agentic engineering adoption.
- Keep product engineering baked into copy naturally rather than overusing it as a headline-only phrase.
- Avoid unsupported claims, placeholder testimonials, or outdated speaking claims unless current evidence is provided.

## Quality Checks

- Run `pnpm lint` after code changes.
- Run `pnpm build` before final handoff when routes, metadata, content loading, or build-sensitive code changes.
- If `pnpm build` fails because Google Fonts cannot be fetched in the sandbox, rerun with approved network access rather than treating it as an application failure.
- For Playbook/content changes, verify at least one article route, sitemap inclusion, and LinkedIn source link behavior when practical.

## Engineering Constraints

- Prefer static generation and local content files over a CMS unless the project direction changes explicitly.
- Keep content loading simple, typed, and compatible with Next.js static generation.
- Keep edits scoped to the requested product iteration.
- Do not delete parked pages or content unless explicitly requested; remove them from primary navigation/sitemap/noindex as appropriate.
