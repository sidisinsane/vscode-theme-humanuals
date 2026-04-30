/**
 * Core TypeScript interfaces shared across the codebase.
 *
 * To add a new configuration option:
 *
 * 1. Add the property to `package.json` under
 *    `contributes.configuration.properties`
 * 2. Add the property to the {@link Configuration} interface below
 * 3. Add a `config.get<T>()` call in `extensionUtils.getVscodeConfiguration`
 * 4. Add the property to `PKG_DEFAULTS` in `settings.ts`
 *
 * @module  interface
 * @packageDocumentation
 */

import { palette } from "./palette";

/**
 * User-facing configuration options for the theme extension.
 *
 * Settings are organised along two independent axes:
 *
 * **Temperature** (`cool` | `neutral` | `warm`): controls the hue character of
 * the neutral scale. Separate settings for dark and light mode allow mixing —
 * e.g. `warm` dark with `cool` light.
 *
 * **Contrast** (`soft` | `balanced` | `crisp`): controls how far apart
 * background surface steps are, and the distance between background and
 * foreground. Separate settings for dark and light mode.
 *
 * All properties are optional — missing values fall back to defaults defined in
 * the extension settings (`settings.ts` / `PKG_DEFAULTS`).
 *
 * @public
 */
export interface Configuration {
  // ─── Dark mode ────────────────────────────────────────────────────────────

  /**
   * Contrast level in dark mode. Controls surface separation and
   * background-to-foreground distance. `"soft"` has the most air between
   * surfaces; `"crisp"` is the tightest and most ink-rich.
   *
   * @default  balanced
   */
  darkContrast?: "balanced" | "crisp" | "soft";

  /** Cursor color in dark mode. */
  darkCursor?: string;

  /** Background color of selected text in dark mode. */
  darkSelection?: string;

  /**
   * Color temperature of the neutral scale in dark mode. Controls hue
   * character: `"cool"` shifts toward blue-grey, `"neutral"` is the Anthropic
   * warm-brown baseline, `"warm"` pushes further into amber/ochre.
   *
   * @default  neutral
   */
  darkTemperature?: "cool" | "neutral" | "warm";

  // ─── Light mode ───────────────────────────────────────────────────────────

  /** Opacity of the background wash applied to diagnostic text. */
  diagnosticTextBackgroundOpacity?: string;

  /** Whether to render comments in italic. */
  italicComments?: boolean;

  /** Whether to render language keywords in italic. */
  italicKeywords?: boolean;

  /**
   * Contrast level in light mode.
   *
   * @default  balanced
   */
  lightContrast?: "balanced" | "crisp" | "soft";

  // ─── Global ───────────────────────────────────────────────────────────────

  /** Cursor color in light mode. */
  lightCursor?: string;

  /** Background color of selected text in light mode. */
  lightSelection?: string;

  /**
   * Color temperature of the neutral scale in light mode.
   *
   * @default  neutral
   */
  lightTemperature?: "cool" | "neutral" | "warm";
}

/**
 * Palette type derived directly from the palette object.
 *
 * No manual maintenance needed — adding a color to `palette.new.ts`
 * automatically extends this type.
 *
 * @public
 */
export type Palette = typeof palette;

/**
 * Describes a VS Code color theme as declared in `package.json`.
 *
 * Used for managing theme registration in the `contributes.themes` section.
 *
 * @public
 */
export interface PkgTheme {
  /** Display name shown in the theme picker. */
  label: string;
  /** Relative path to the generated theme JSON file. */
  path: string;
  /** VS Code UI theme base — `"vs-dark"` or `"vs"`. */
  uiTheme: string;
}
