/**
 * Package metadata and default configuration derived from `package.json`.
 *
 * All exports are read once at module load time. The configuration prefix
 * (`humanualsTheme`) is derived from the property keys in `package.json` rather
 * than from `pkg.name`, since npm package names and VS Code configuration
 * prefixes follow different casing conventions (kebab-case vs camelCase).
 *
 * @module  settings
 * @packageDocumentation
 */

import fs from "fs";
import { dirname, join } from "path";

import { Configuration } from "./interface";

/**
 * Walks up the directory tree from `dir` until `package.json` is found.
 *
 * Necessary because this module is compiled to different depths depending on
 * the entry point: `dist/settings.js` vs `dist/hooks/generateThemes.js`.
 *
 * @param  dir  — Directory to start searching from.
 * @returns  Absolute path to the nearest `package.json`.
 * @throws  Error if no `package.json` is found before reaching the root.
 */
function findPackageJson(dir: string): string {
  const candidate = join(dir, "package.json");
  if (fs.existsSync(candidate)) return candidate;
  const parent = dirname(dir);
  if (parent === dir) throw new Error("package.json not found");
  return findPackageJson(parent);
}

const pkg = JSON.parse(fs.readFileSync(findPackageJson(__dirname), "utf8"));
const properties = pkg.contributes.configuration.properties;
const prefix = Object.keys(properties)[0].split(".")[0];
const p = (key: string) => properties[`${prefix}.${key}`].default;

/**
 * Npm package name (e.g. `"humanuals-theme"`).
 *
 * @public
 */
export const PKG_NAME: string = pkg.name;

/**
 * VS Code configuration namespace prefix (e.g. `"humanualsTheme"`).
 *
 * Used with `workspace.getConfiguration()` and `event.affectsConfiguration()`.
 *
 * @public
 */
export const PKG_CONFIG_PREFIX: string = prefix;

/**
 * Theme entries from `package.json` `contributes.themes`.
 *
 * @public
 */
export const PKG_THEMES = pkg.contributes.themes;

/**
 * Default configuration values read directly from `package.json`.
 *
 * Used by `generateThemes.ts` to produce the static shipped theme files, and as
 * the fallback when user settings are unavailable.
 *
 * The two axes — temperature and contrast — each have independent dark/light
 * settings, allowing e.g. `warm` dark paired with `cool` light.
 *
 * @public
 */
export const PKG_DEFAULTS: Configuration = {
  darkContrast: p("darkContrast"),
  darkCursor: p("darkCursor"),
  darkSelection: p("darkSelection"),
  darkTemperature: p("darkTemperature"),
  diagnosticTextBackgroundOpacity: p("diagnosticTextBackgroundOpacity"),
  italicComments: p("italicComments"),
  italicKeywords: p("italicKeywords"),
  lightContrast: p("lightContrast"),
  lightCursor: p("lightCursor"),
  lightSelection: p("lightSelection"),
  lightTemperature: p("lightTemperature"),
};
