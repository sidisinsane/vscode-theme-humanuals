#!/usr/bin/env node
/**
 * @file scripts/convert-icon.mjs
 *
 * Converts the extension icon from SVG to PNG for use as the VS Code
 * Marketplace icon (`icon.png` in the project root, referenced by
 * `package.json`).
 *
 * Run via:
 *
 *   npm run convert:icon
 */
import { convertSvgToPng } from "./svg-to-png.mjs";

await convertSvgToPng("assets/icon.svg", "icon.png");
