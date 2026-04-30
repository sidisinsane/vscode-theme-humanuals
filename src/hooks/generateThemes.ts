/**
 * Build hook that generates the static shipped theme JSON files.
 *
 * Run via `npm run compile:themes` after TypeScript compilation. Uses
 * `PKG_DEFAULTS` to produce theme files that represent the default
 * configuration — the extension host regenerates these at runtime using the
 * actual user settings.
 *
 * @module  hook.generateThemes
 * @packageDocumentation
 */

import { basename, join } from "path";

import { PKG_DEFAULTS, PKG_THEMES } from "../settings";
import { Utils } from "../utils";

const utils = new Utils();
const themeData = utils.getThemeData(PKG_DEFAULTS, PKG_THEMES);

utils.generate(
  join(__dirname, "..", "..", "themes", basename(PKG_THEMES[0].path)),
  join(__dirname, "..", "..", "themes", basename(PKG_THEMES[1].path)),
  themeData
);
