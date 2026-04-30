/**
 * Single source of truth for all color values.
 *
 * Keys encode family and scale position only — no UI roles, no theme semantics.
 * The theme layer maps these to role names consumed by workbench, syntax, and
 * semantic.
 *
 * This palette is informed by two distinct source layers:
 *
 * - UI / Workbench layer: Anthropic product marketing palette.
 * - Syntax / Code layer: Claude.ai's actual syntax highlighting.
 *
 * Neutral families are organised along two independent axes:
 *
 * **Temperature** (`cool` | `neutral` | `warm`): controls the hue character of
 * the neutral scale. `neutral` is the Anthropic warm-brown baseline. `warm`
 * shifts further into amber/ochre. `cool` desaturates the warm undertone and
 * shifts toward blue-grey.
 *
 * **Contrast** (`soft` | `balanced` | `crisp`): controls how far apart the
 * background steps are, i.e. how much visual separation exists between
 * surfaces. `balanced` is the comfort default. `soft` has less surface
 * separation (more air, softer feel). `crisp` is the tightest, most ink-rich
 * variant.
 *
 * Chromatic families (syntax colors) are shared across all contrast levels
 * within each mode (dark/light) and temperature variant.
 *
 * @module  palette
 * @packageDocumentation
 */

/**
 * The raw color dictionary for the theme.
 *
 * Organized into neutral families (one per temperature × contrast combination)
 * and chromatic families (temperature-specific). Neutrals scale from 100
 * (darkest/most ink-rich) to 975 (lightest/most prominent). Chromatics provide
 * muted (300), indicator (400), and full-weight (500) steps.
 *
 * @public
 */
export const palette = {
  // ═══════════════════════════════════════════════════════════════════════════
  // CHROMATICS — DARK
  //
  // Syntax and accent colors for dark mode. Shared across all contrast levels.
  // Temperature variants (cool/neutral/warm) use the same chromatics — hue
  // character comes from the neutral scale, not the syntax colors.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Aqua ──────────────────────────────────────────────────────────────────
  // Role:  literals, booleans, type parameters
  "dark-aqua-300": "#4a98a2", // muted teal
  "dark-aqua-500": "#56b6c2", // cadetblue — literals, booleans

  // ─── Blue ──────────────────────────────────────────────────────────────────
  // Role:  links, IDs, titles, variables
  "dark-blue-300": "#4d8fcc", // steelblue
  "dark-blue-500": "#61aeee", // cornflowerblue — links, IDs, titles

  // ─── Green ─────────────────────────────────────────────────────────────────
  // Role:  strings, additions, active indicators (badge uses -400)
  "dark-green-300": "#7a9f5a", // muted sage
  "dark-green-400": "#a3b87a", // badge/indicator green — warm nudge avoids
  // clashing with the sage syntax green
  "dark-green-500": "#98c379", // sage green — strings, additions

  // ─── Orange ────────────────────────────────────────────────────────────────
  // Role:  the Anthropic accent, function calls
  "dark-orange-300": "#b86035", // deeper sienna
  "dark-orange-500": "#d97757", // brand salmon — the Anthropic accent

  // ─── Purple ────────────────────────────────────────────────────────────────
  // Role:  keywords, doctags
  "dark-purple-300": "#a05fb8", // dusty purple (also #827dbd from market.)
  "dark-purple-500": "#c678dd", // medium orchid — keywords

  // ─── Red ───────────────────────────────────────────────────────────────────
  // Role:  tag names, deletions, errors
  // -600: UI decorations (git conflicts, errors) — distinct from syntax red
  "dark-red-300": "#c45c65", // dimmed variant
  "dark-red-500": "#e06c75", // dusty rose-red — tag names, deletions
  "dark-red-600": "#a84850", // deeper muted red — error/destructive decorat.

  // ─── Yellow ────────────────────────────────────────────────────────────────
  // Role:  numbers, types, built-ins, constants
  "dark-yellow-300": "#d19a66", // warm amber — numbers, types
  "dark-yellow-500": "#e6c07b", // golden ochre — built-ins, constants

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — DARK / COOL TEMPERATURE
  //
  // Desaturates the warm undertone and shifts toward blue-grey. The browns
  // become more slate-like. Still dark and readable — the shift is in hue
  // character, not luminosity.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Dark / Cool / Subtle ──────────────────────────────────────────────────
  "dark-cool-soft-100": "#1d1e21",
  "dark-cool-soft-200": "#232428",
  "dark-cool-soft-300": "#292b2f",
  "dark-cool-soft-400": "#2f3135",
  "dark-cool-soft-500": "#383b40",
  "dark-cool-soft-600": "#42464c",
  "dark-cool-soft-700": "#4c5058",
  "dark-cool-soft-750": "#585d66",
  "dark-cool-soft-800": "#686c74",
  "dark-cool-soft-900": "#7c8088",
  "dark-cool-soft-950": "#9a9ea6",
  "dark-cool-soft-975": "#ced1d8",

  // ─── Dark / Cool / Balanced ────────────────────────────────────────────────
  "dark-cool-balanced-100": "#181a1e",
  "dark-cool-balanced-200": "#1d1e21",
  "dark-cool-balanced-300": "#232428",
  "dark-cool-balanced-400": "#292b2f",
  "dark-cool-balanced-500": "#2f3135",
  "dark-cool-balanced-600": "#383b40",
  "dark-cool-balanced-700": "#42464c",
  "dark-cool-balanced-750": "#4e5258",
  "dark-cool-balanced-800": "#686c74",
  "dark-cool-balanced-900": "#7c8088",
  "dark-cool-balanced-950": "#9a9ea6",
  "dark-cool-balanced-975": "#ced1d8",

  // ─── Dark / Cool / Crisp ───────────────────────────────────────────────────
  "dark-cool-crisp-100": "#121316",
  "dark-cool-crisp-200": "#181a1e",
  "dark-cool-crisp-300": "#1d1e21",
  "dark-cool-crisp-400": "#232428",
  "dark-cool-crisp-500": "#292b2f",
  "dark-cool-crisp-600": "#2f3135",
  "dark-cool-crisp-700": "#383b40",
  "dark-cool-crisp-750": "#444850",
  "dark-cool-crisp-800": "#686c74",
  "dark-cool-crisp-900": "#7c8088",
  "dark-cool-crisp-950": "#9a9ea6",
  "dark-cool-crisp-975": "#ced1d8",

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — DARK / NEUTRAL TEMPERATURE
  //
  // The Anthropic warm-brown baseline. Hue character: desaturated amber-brown,
  // derived from Anthropic's product marketing palette.
  //
  // Scale: 100 (darkest bg) → 975 (primary text / near-white)
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Dark / Neutral / Subtle ───────────────────────────────────────────────
  // Most air between surfaces. Softest feel. Backgrounds are lifted.
  "dark-neutral-soft-100": "#1f1e1c",
  "dark-neutral-soft-200": "#252422",
  "dark-neutral-soft-300": "#2b2a27",
  "dark-neutral-soft-400": "#302f2c",
  "dark-neutral-soft-500": "#3a3936",
  "dark-neutral-soft-600": "#444240",
  "dark-neutral-soft-700": "#4e4c49",
  "dark-neutral-soft-750": "#5c5a56",
  "dark-neutral-soft-800": "#6b6862",
  "dark-neutral-soft-900": "#7e7b74",
  "dark-neutral-soft-950": "#9c9890",
  "dark-neutral-soft-975": "#d3cfc6",

  // ─── Dark / Neutral / Balanced ─────────────────────────────────────────────
  // The comfort default. One step darker than soft.
  "dark-neutral-balanced-100": "#1a1918",
  "dark-neutral-balanced-200": "#1f1e1c",
  "dark-neutral-balanced-300": "#252422",
  "dark-neutral-balanced-400": "#2b2a27",
  "dark-neutral-balanced-500": "#302f2c",
  "dark-neutral-balanced-600": "#3a3936",
  "dark-neutral-balanced-700": "#444240",
  "dark-neutral-balanced-750": "#525050",
  "dark-neutral-balanced-800": "#6b6862",
  "dark-neutral-balanced-900": "#7e7b74",
  "dark-neutral-balanced-950": "#9c9890",
  "dark-neutral-balanced-975": "#d3cfc6",

  // ─── Dark / Neutral / Crisp ────────────────────────────────────────────────
  // Tightest, most ink-rich. Deepest backgrounds with minimum lift.
  "dark-neutral-crisp-100": "#141413",
  "dark-neutral-crisp-200": "#1a1918",
  "dark-neutral-crisp-300": "#1f1e1c",
  "dark-neutral-crisp-400": "#252422",
  "dark-neutral-crisp-500": "#2b2a27",
  "dark-neutral-crisp-600": "#302f2c",
  "dark-neutral-crisp-700": "#3a3936",
  "dark-neutral-crisp-750": "#484644",
  "dark-neutral-crisp-800": "#6b6862",
  "dark-neutral-crisp-900": "#7e7b74",
  "dark-neutral-crisp-950": "#9c9890",
  "dark-neutral-crisp-975": "#d3cfc6",

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — DARK / WARM TEMPERATURE
  //
  // Shifts the neutral scale further into amber/ochre territory. Slightly more
  // saturated browns, a touch more yellow in the mid-tones. The shift is
  // intentionally soft — perceptible as personality, not jarring.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Dark / Warm / Subtle ──────────────────────────────────────────────────
  "dark-warm-soft-100": "#221f1b",
  "dark-warm-soft-200": "#28251f",
  "dark-warm-soft-300": "#2e2b24",
  "dark-warm-soft-400": "#342f28",
  "dark-warm-soft-500": "#3e3930",
  "dark-warm-soft-600": "#484238",
  "dark-warm-soft-700": "#524b40",
  "dark-warm-soft-750": "#605850",
  "dark-warm-soft-800": "#6e6558",
  "dark-warm-soft-900": "#817870",
  "dark-warm-soft-950": "#9e9488",
  "dark-warm-soft-975": "#d6d0c4",

  // ─── Dark / Warm / Balanced ────────────────────────────────────────────────
  "dark-warm-balanced-100": "#1d1b17",
  "dark-warm-balanced-200": "#221f1b",
  "dark-warm-balanced-300": "#28251f",
  "dark-warm-balanced-400": "#2e2b24",
  "dark-warm-balanced-500": "#342f28",
  "dark-warm-balanced-600": "#3e3930",
  "dark-warm-balanced-700": "#484238",
  "dark-warm-balanced-750": "#564e46",
  "dark-warm-balanced-800": "#6e6558",
  "dark-warm-balanced-900": "#817870",
  "dark-warm-balanced-950": "#9e9488",
  "dark-warm-balanced-975": "#d6d0c4",

  // ─── Dark / Warm / Crisp ───────────────────────────────────────────────────
  "dark-warm-crisp-100": "#171410",
  "dark-warm-crisp-200": "#1d1b17",
  "dark-warm-crisp-300": "#221f1b",
  "dark-warm-crisp-400": "#28251f",
  "dark-warm-crisp-500": "#2e2b24",
  "dark-warm-crisp-600": "#342f28",
  "dark-warm-crisp-700": "#3e3930",
  "dark-warm-crisp-750": "#4c4540",
  "dark-warm-crisp-800": "#6e6558",
  "dark-warm-crisp-900": "#817870",
  "dark-warm-crisp-950": "#9e9488",
  "dark-warm-crisp-975": "#d6d0c4",

  // ═══════════════════════════════════════════════════════════════════════════
  // CHROMATICS — LIGHT
  //
  // Light-mode counterparts: same hue families, shifted darker/more saturated
  // to maintain contrast on warm off-white backgrounds.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Aqua ──────────────────────────────────────────────────────────────────
  // Role:  literals, booleans, type parameters
  "light-aqua-300": "#4a98a2", // medium teal (same as dark-300)
  "light-aqua-500": "#3a8a94", // dark teal — readable on light

  // ─── Blue ──────────────────────────────────────────────────────────────────
  // Role:  links, IDs, titles, variables
  "light-blue-300": "#4d8fcc", // medium blue (same as dark-300)
  "light-blue-500": "#3a7fbb", // steelblue — readable on white

  // ─── Green ─────────────────────────────────────────────────────────────────
  // Role:  strings, additions, active indicators (badge uses -400)
  "light-green-300": "#7a9f5a", // muted sage (same as dark-300)
  "light-green-400": "#8daa52", // badge/indicator green — light variant
  "light-green-500": "#5a8a3a", // forest sage — strings on light

  // ─── Orange ────────────────────────────────────────────────────────────────
  // Role:  the Anthropic accent, function calls
  "light-orange-300": "#d97757", // lighter salmon
  "light-orange-500": "#c96442", // sienna — strong, readable on light

  // ─── Purple ────────────────────────────────────────────────────────────────
  // Role:  keywords, doctags
  "light-purple-300": "#a05fb8", // medium orchid (same as dark-300)
  "light-purple-500": "#8a45aa", // deep orchid — keywords on light

  // ─── Red ───────────────────────────────────────────────────────────────────
  // Role:  tag names, deletions, errors
  // -600: UI decorations (git conflicts, errors) — distinct from syntax red
  "light-red-300": "#e06c75", // same as dark-500 — works on both sides
  "light-red-500": "#d44a55", // clear rose-red — readable on light
  "light-red-600": "#b03a44", // deeper muted red — error/destructive decorat.

  // ─── Yellow ────────────────────────────────────────────────────────────────
  // Role:  numbers, types, built-ins, constants
  "light-yellow-300": "#c49040", // mid amber
  "light-yellow-500": "#b07d2a", // deep amber/ochre — readable on white

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — LIGHT / COOL TEMPERATURE
  //
  // Desaturates the warm undertone toward blue-grey. Off-whites become more
  // paper-grey than cream. Separator and mid-tone steps have a slight cool
  // cast.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Light / Cool / Subtle ─────────────────────────────────────────────────
  "light-cool-soft-100": "#e8e9ed",
  "light-cool-soft-200": "#e0e2e7",
  "light-cool-soft-300": "#f0f1f5",
  "light-cool-soft-400": "#e0e2e7",
  "light-cool-soft-500": "#d8dadf",
  "light-cool-soft-600": "#cdd0d6",
  "light-cool-soft-700": "#c2c5cc",
  "light-cool-soft-750": "#b0b4bc",
  "light-cool-soft-800": "#9a9ca4",
  "light-cool-soft-900": "#888b94",
  "light-cool-soft-950": "#767880",
  "light-cool-soft-975": "#3b3c40",

  // ─── Light / Cool / Balanced ───────────────────────────────────────────────
  "light-cool-balanced-100": "#f0f1f5",
  "light-cool-balanced-200": "#e8e9ed",
  "light-cool-balanced-300": "#f8f9fc",
  "light-cool-balanced-400": "#e8e9ed",
  "light-cool-balanced-500": "#e0e2e7",
  "light-cool-balanced-600": "#d8dadf",
  "light-cool-balanced-700": "#cdd0d6",
  "light-cool-balanced-750": "#bbbec6",
  "light-cool-balanced-800": "#9a9ca4",
  "light-cool-balanced-900": "#888b94",
  "light-cool-balanced-950": "#767880",
  "light-cool-balanced-975": "#3b3c40",

  // ─── Light / Cool / Crisp ──────────────────────────────────────────────────
  "light-cool-crisp-100": "#f8f9fc",
  "light-cool-crisp-200": "#f0f1f5",
  "light-cool-crisp-300": "#ffffff",
  "light-cool-crisp-400": "#f0f1f5",
  "light-cool-crisp-500": "#e8e9ed",
  "light-cool-crisp-600": "#e0e2e7",
  "light-cool-crisp-700": "#d8dadf",
  "light-cool-crisp-750": "#c6c8ce",
  "light-cool-crisp-800": "#9a9ca4",
  "light-cool-crisp-900": "#888b94",
  "light-cool-crisp-950": "#767880",
  "light-cool-crisp-975": "#3b3c40",

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — LIGHT / NEUTRAL TEMPERATURE
  //
  // Anthropic warm off-white baseline. Scale inverted: 100 is the lightest
  // (near-white) and 975 is the darkest (near-black primary text).
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Light / Neutral / Subtle ──────────────────────────────────────────────
  // Most air. Surfaces cluster near white.
  "light-neutral-soft-100": "#ebe9e1",
  "light-neutral-soft-200": "#e3e1d8",
  "light-neutral-soft-300": "#f3f1ea",
  "light-neutral-soft-400": "#e3e1d8",
  "light-neutral-soft-500": "#dad8cf",
  "light-neutral-soft-600": "#d0cec5",
  "light-neutral-soft-700": "#c6c4bb",
  "light-neutral-soft-750": "#b4b2aa",
  "light-neutral-soft-800": "#9c9890",
  "light-neutral-soft-900": "#8a877f",
  "light-neutral-soft-950": "#78766f",
  "light-neutral-soft-975": "#3d3c39",

  // ─── Light / Neutral / Balanced ────────────────────────────────────────────
  // The comfort default for light mode.
  "light-neutral-balanced-100": "#f3f1ea",
  "light-neutral-balanced-200": "#ebe9e1",
  "light-neutral-balanced-300": "#faf9f5",
  "light-neutral-balanced-400": "#ebe9e1",
  "light-neutral-balanced-500": "#e3e1d8",
  "light-neutral-balanced-600": "#dad8cf",
  "light-neutral-balanced-700": "#d0cec5",
  "light-neutral-balanced-750": "#bab8b0",
  "light-neutral-balanced-800": "#9c9890",
  "light-neutral-balanced-900": "#8a877f",
  "light-neutral-balanced-950": "#78766f",
  "light-neutral-balanced-975": "#3d3c39",

  // ─── Light / Neutral / Crisp ───────────────────────────────────────────────
  // Closest to paper — maximum contrast between surface steps.
  "light-neutral-crisp-100": "#faf9f5",
  "light-neutral-crisp-200": "#f3f1ea",
  "light-neutral-crisp-300": "#fffefb",
  "light-neutral-crisp-400": "#f3f1ea",
  "light-neutral-crisp-500": "#ebe9e1",
  "light-neutral-crisp-600": "#e3e1d8",
  "light-neutral-crisp-700": "#dad8cf",
  "light-neutral-crisp-750": "#c4c2ba",
  "light-neutral-crisp-800": "#9c9890",
  "light-neutral-crisp-900": "#8a877f",
  "light-neutral-crisp-950": "#78766f",
  "light-neutral-crisp-975": "#3d3c39",

  // ═══════════════════════════════════════════════════════════════════════════
  // NEUTRALS — LIGHT / WARM TEMPERATURE
  //
  // Pushes the off-white base further into cream/amber. Slightly more yellow
  // in the surface tones, warmer separator colors.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── Light / Warm / Subtle ─────────────────────────────────────────────────
  "light-warm-soft-100": "#ede8dc",
  "light-warm-soft-200": "#e5dfd2",
  "light-warm-soft-300": "#f5f0e6",
  "light-warm-soft-400": "#e5dfd2",
  "light-warm-soft-500": "#dcd5c8",
  "light-warm-soft-600": "#d2cabc",
  "light-warm-soft-700": "#c8bfb0",
  "light-warm-soft-750": "#b6ac9c",
  "light-warm-soft-800": "#9e9888",
  "light-warm-soft-900": "#8c8678",
  "light-warm-soft-950": "#7a7468",
  "light-warm-soft-975": "#3e3b34",

  // ─── Light / Warm / Balanced ───────────────────────────────────────────────
  "light-warm-balanced-100": "#f5f0e6",
  "light-warm-balanced-200": "#ede8dc",
  "light-warm-balanced-300": "#fdfaf2",
  "light-warm-balanced-400": "#ede8dc",
  "light-warm-balanced-500": "#e5dfd2",
  "light-warm-balanced-600": "#dcd5c8",
  "light-warm-balanced-700": "#d2cabc",
  "light-warm-balanced-750": "#c0b8a8",
  "light-warm-balanced-800": "#9e9888",
  "light-warm-balanced-900": "#8c8678",
  "light-warm-balanced-950": "#7a7468",
  "light-warm-balanced-975": "#3e3b34",

  // ─── Light / Warm / Crisp ──────────────────────────────────────────────────
  "light-warm-crisp-100": "#fdfaf2",
  "light-warm-crisp-200": "#f5f0e6",
  "light-warm-crisp-300": "#fffef8",
  "light-warm-crisp-400": "#f5f0e6",
  "light-warm-crisp-500": "#ede8dc",
  "light-warm-crisp-600": "#e5dfd2",
  "light-warm-crisp-700": "#dcd5c8",
  "light-warm-crisp-750": "#cac2b4",
  "light-warm-crisp-800": "#9e9888",
  "light-warm-crisp-900": "#8c8678",
  "light-warm-crisp-950": "#7a7468",
  "light-warm-crisp-975": "#3e3b34",
} as const;

/**
 * Valid keys for the theme palette.
 *
 * @public
 */
export type PaletteKey = keyof typeof palette;
