---
title: Development
description:
    Architecture, setup, and publishing guide for contributors and future
    maintainers.
---

## Overview

Humanuals Theme is a VS Code extension that ships two themes — dark and light.
Unlike static theme extensions, the theme JSON files are generated dynamically
from TypeScript at two distinct points:

- **At build time** — `src/hooks/generateThemes.ts` generates the static theme
  files shipped with the extension, using the default configuration.
- **At runtime** — `src/indexClient.ts` regenerates the theme files whenever the
  user changes a setting, then prompts for a reload.

The web extension entry point (`src/indexWeb.ts`) does not support regeneration
— it only notifies the user that configuration is unavailable in that context.

## Prerequisites

- [Node.js](https://nodejs.org/) v22+ and [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Setup

## Architecture

The palette (`src/palette.ts`) is the single source of truth for all color
values. Keys encode family and scale position only — no UI roles, no semantic
meaning. The theme layer maps these to the roles consumed by the three token
sources:

- **Workbench** (`src/workbench/`) — VS Code UI colors
- **Syntax** (`src/syntax/`) — TextMate token colors
- **Semantic** (`src/semantic.ts`) — Language server semantic tokens

These three sources are assembled by `Utils.getThemeData()` in `src/utils.ts`
into the shape expected by VS Code's theme JSON format.

The neutral palette is organised along three independent axes — mode (`dark`,
`light`), temperature (`cool`, `neutral`, `warm`) and contrast (`soft`,
`balanced`, `crisp`) — producing a three-part key prefix
(`{mode}-{temperature}-{contrast}`) that resolves to the correct neutral scale.
Chromatic colors (syntax accents) are shared across all contrast levels and
temperature variants within each mode.

## Scripts

The meaningful scripts from `package.json`:

- `npm run compile` — full build: cleans `dist/`, compiles TypeScript, and
  generates the static theme JSON files
- `npm run compile:ts` — compiles TypeScript only
- `npm run compile:themes` — generates the static theme JSON files from the
  compiled TypeScript; requires `compile:ts` to have run first
- `npm run docs` — generates API documentation via TypeDoc into `docs/`
- `npm run lint` — runs ESLint
- `npm run lint:fix` — runs ESLint with auto-fix
- `npm run format` — formats all JSON and markdown files via Prettier
- `npm run stitch:previews` — stitches per-contrast screenshots into
  side-by-side comparison preview images for the README and marketplace
  listings; input screenshots must exist in `assets/images/` beforehand

## Adding or Changing Colors

All color values live in `src/palette.ts` — do not hardcode color values
anywhere else. The chain from a change there to the compiled output is:

1. Add or modify the color value in `src/palette.ts`
2. Map it to the appropriate role in the relevant token source — workbench
   colors in `src/workbench/`, syntax tokens in `src/syntax/`, semantic tokens
   in `src/semantic.ts`
3. Run `npm run compile` to regenerate the theme JSON files
4. Reload the extension host (`F5`) to see the changes in VS Code

If adding a new neutral family, follow the existing three-part key convention:
`{mode}-{temperature}-{contrast}-{scale}` (e.g. `dark-cool-balanced-500`). New
chromatic colors follow the simpler `{mode}-{color}-{scale}` convention (e.g.
`dark-red-500`).

Adding a new configuration option requires changes in four places — the order
matters:

1. Add the property to `package.json` under
   `contributes.configuration.properties`
2. Add the property to the `Configuration` interface in `src/interface.ts`
3. Add a `config.get<T>()` call in `getVscodeConfiguration()` in
   `src/extensionUtils.ts`
4. Add the property to `PKG_DEFAULTS` in `src/settings.ts`

## Publishing

Publishing is handled by GitHub Actions on tag push. The local step is preparing
and tagging the release; the remote step is building and publishing to both
marketplaces.

### Prerequisites

Before publishing, ensure your PATs for the VS Code Marketplace and Open VSX
Registry are stored as GitHub secrets (`VSCE_PAT` and `OVSX_PAT`). The Azure
DevOps PAT used by `vsce` expires every 3 months — rotate it before it does.

### Workflow

1. Update `CHANGELOG.md` — add a new version entry directly below
   `## [Unreleased]`, move the unreleased items into it, add today's date, and
   update the reference links at the bottom. The order is always newest to
   oldest:

```markdown
## [Unreleased]

## [0.2.0] - 2026-06-01

### Fixed

- Some bug

## [0.1.0] - 2026-04-29

### Added

- Initial release
```

The reference links at the bottom of the file make each version header a
clickable link. `[Unreleased]` always points to the diff between the latest
release and HEAD. Each versioned entry points to the diff between that release
and the one before it. The oldest release points to its tag since there is
nothing before it to diff against. After each release, add a new entry for the
new version and update the `[Unreleased]` link to compare from the new version
tag:

```markdown
[Unreleased]:
    https://github.com/sidisinsane/vscode-theme-humanuals/compare/v0.2.0...HEAD
[0.2.0]:
    https://github.com/sidisinsane/vscode-theme-humanuals/compare/v0.1.0...v0.2.0
[0.1.0]:
    https://github.com/sidisinsane/vscode-theme-humanuals/releases/tag/v0.1.0
```

2. Run `scripts/release.sh` with the appropriate version bump:

```bash
   ./scripts/release.sh minor   # or major, patch, or x.y.z
```

The script bumps the version in `package.json`, commits with a standard message,
creates a git tag, and pushes both the commit and tag to the remote. The working
tree must be clean before running it.

3. GitHub Actions picks up the tag, builds the extension and publishes to both
   the VS Code Marketplace and Open VSX Registry.

### Versioning

This project follows [Semantic Versioning](https://semver.org/). In practice:

- `patch` — bug fixes
- `minor` — new configuration options or theme additions
- `major` — breaking changes to existing configuration

## API Documentation

The API documentation is generated from JSDoc comments in `src/` using TypeDoc
and published via this Starlight site. To build the docs site locally:

```bash
cd docs && npm run dev
```
