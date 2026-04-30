/**
 * Shared helpers used by all workbench variant functions.
 *
 * Centralises the three pieces of logic that are identical across all workbench
 * token generators: cursor color resolution, diagnostic opacity mapping, and
 * selection background color resolution.
 *
 * @module  workbench.shared
 * @packageDocumentation
 */

import { Palette } from "../interface";

/**
 * Maps cursor color setting values to their neutral or chromatic scale
 * position.
 *
 * `"white"` and `"black"` resolve to `"975"` — the most prominent neutral step,
 * which is effectively white in dark mode and black in light mode. All
 * chromatic options resolve to `"500"` — the full-weight chromatic step.
 */
export const CURSOR_COLORS: Record<string, string> = {
  aqua: "500",
  black: "975",
  blue: "500",
  green: "500",
  orange: "500",
  purple: "500",
  red: "500",
  white: "975",
  yellow: "500",
};

/**
 * Maps the `diagnosticTextBackgroundOpacity` setting value to a two-digit hex
 * alpha suffix suitable for appending to a 6-digit hex color.
 */
export const OPACITY_MAP: Record<string, string> = {
  "0%": "00",
  "12.5%": "20",
  "25%": "40",
  "37.5%": "60",
  "50%": "80",
};

/**
 * Resolves the three selection background color variants used by the editor.
 *
 * When `color` is `"grey"` or empty, the neutral `600` step is used with the
 * provided opacity suffixes. For chromatic colors, the muted `300` step of the
 * appropriate hue family is used at fixed opacities (60/40/20).
 *
 * @param  palette  – The full palette object.
 * @param  prefix  – The resolved variant + temperature + contrast prefix, e.g.
 *   `"dark-neutral-balanced"`. The mode (`"dark"` or `"light"`) is extracted as
 *   the first `-`-delimited segment.
 * @param  color  – The selection color setting value, e.g. `"blue"` or
 *   `"grey"`.
 * @param  greyOpacities  – Tuple of three hex alpha suffixes applied to the
 *   grey neutral step for `selectionBg`, `editorSelectionBg`, and
 *   `editorSelectionBgHl`.
 * @returns  An object with the three resolved hex color strings.
 */
export function resolveSelection(
  palette: Palette,
  prefix: string,
  color: string,
  greyOpacities: [string, string, string]
): {
  editorSelectionBg: string;
  editorSelectionBgHl: string;
  selectionBg: string;
} {
  if (!color || color === "grey") {
    return {
      editorSelectionBg: `${palette[`${prefix}-600`]}${greyOpacities[1]}`,
      editorSelectionBgHl: `${palette[`${prefix}-600`]}${greyOpacities[2]}`,
      selectionBg: `${palette[`${prefix}-600`]}${greyOpacities[0]}`,
    };
  }
  // Extract "dark" or "light" from the first segment of the prefix.
  // With the new three-part prefix (e.g. "dark-neutral-balanced") this is
  // still just prefix.split("-")[0].
  const mode = prefix.split("-")[0]; // "dark" or "light"
  return {
    editorSelectionBg: `${palette[`${mode}-${color}-300`]}40`,
    editorSelectionBgHl: `${palette[`${mode}-${color}-300`]}20`,
    selectionBg: `${palette[`${mode}-${color}-300`]}60`,
  };
}
