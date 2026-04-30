/**
 * @file scripts/stitch-images.mjs
 *
 * Utility for stitching multiple images together horizontally into a single
 * composite PNG. Used by stitch-previews.mjs to combine per-contrast
 * screenshots into side-by-side comparison images for the README and
 * marketplace listings.
 *
 * Requires: sharp
 */
import { existsSync } from "fs";
import sharp from "sharp";

/**
 * Stitches any number of images together horizontally.
 * 
 * @param {string[]} inputs - Array of file paths.
 * @param {string} output - The output file path.
 * @param {number} gap - Optional gap between images in pixels.
 * @example:
 * // Basic usage
 * import { stitchImages } from "./stitch-images.mjs";
 * await stitchImages([
 *   "assets/images/screenshot-dark-neutral-soft.png",
 *   "assets/images/screenshot-dark-neutral-balanced.png",
 *   "assets/images/screenshot-dark-neutral-crisp.png"
 * ], "assets/images/comparison-dark-neutral.png", 20);
 */
export async function stitchImages(inputs, output, gap = 0) {
  if (!inputs || inputs.length === 0) return;

  const missing = inputs.filter((input) => !existsSync(input));
  if (missing.length > 0) {
    console.warn(`⚠️ Skipping ${output} — missing input(s): ${missing.join(", ")}`);
    return;
  }

  try {
    const metadata = await sharp(inputs[0]).metadata();
    const { width, height } = metadata;
    
    const totalWidth = (width * inputs.length) + (gap * (inputs.length - 1));

    const layers = inputs.map((input, index) => ({
      input: input,
      top: 0,
      left: (width + gap) * index
    }));

    await sharp({
      create: {
        width: totalWidth,
        height: height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent
      }
    })
    .composite(layers)
    .png()
    .toFile(output);

    console.log(`✅ Stitched ${inputs.length} images -> ${output}`);
  } catch (error) {
    console.error("❌ Stitching failed:", error.message);
  }
}
