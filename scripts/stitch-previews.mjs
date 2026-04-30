#!/usr/bin/env node
/**
 * @file scripts/stitch-previews.mjs
 *
 * Generates side-by-side comparison preview images for the README and
 * marketplace listings by stitching per-contrast screenshots together
 * horizontally.
 *
 * For each mode (dark, light) and temperature (cool, neutral, warm),
 * the three contrast variants (soft, balanced, crisp) are combined into
 * a single composite PNG:
 *
 *   assets/images/comparison-{mode}-{temperature}.png
 *
 * Input screenshots are expected to exist in assets/images/ before
 * running this script. Run via:
 *
 *   npm run stitch:previews
 */
import { stitchImages } from "./stitch-images.mjs";

const GAP = 20
const THEMES = ["dark", "light"]

for (const theme of THEMES) {
  await stitchImages([
    `assets/images/screenshot-${theme}-cool-soft.png`,
    `assets/images/screenshot-${theme}-cool-balanced.png`,
    `assets/images/screenshot-${theme}-cool-crisp.png`
  ], `assets/images/comparison-${theme}-cool.png`, GAP);

  await stitchImages([
    `assets/images/screenshot-${theme}-neutral-soft.png`,
    `assets/images/screenshot-${theme}-neutral-balanced.png`,
    `assets/images/screenshot-${theme}-neutral-crisp.png`
  ], `assets/images/comparison-${theme}-neutral.png`, GAP);

  await stitchImages([
    `assets/images/screenshot-${theme}-warm-soft.png`,
    `assets/images/screenshot-${theme}-warm-balanced.png`,
    `assets/images/screenshot-${theme}-warm-crisp.png`
  ], `assets/images/comparison-${theme}-warm.png`, GAP);
}
