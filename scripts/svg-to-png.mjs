/**
 * @file scripts/svg-to-png.mjs
 *
 * Utility for converting SVG files to PNG using sharp. Supports custom
 * dimensions and DPI density for high-quality rasterization.
 *
 * Can be used as an imported module or run directly from the command line:
 *
 *   node scripts/svg-to-png.mjs [input] [output] [width] [height] [density]
 *
 * Requires: sharp
 */
import sharp from "sharp";
import { fileURLToPath } from "url";

/**
 * Converts an SVG file to a PNG with specified dimensions and density.
 * 
 * @param {string} inputPath - Path to the source SVG file.
 * @param {string} outputPath - Path where the PNG should be saved.
 * @param {number} [width=128] - Target width in pixels.
 * @param {number} [height=128] - Target height in pixels.
 * @param {number} [density=300] - DPI density for rendering the SVG.
 * @returns {Promise<void>}
 * @example
 * // Basic usage
 * import { convertSvgToPng } from "./svg-to-png.mjs";
 * await convertSvgToPng("assets/icon.svg", "icon.png");
 * // Custom dimensions and low density
 * import { convertSvgToPng } from "./svg-to-png.mjs";
 * await convertSvgToPng("assets/icon.svg", "logo.png", 512, 512, 72);
 */
export async function convertSvgToPng(
  inputPath, 
  outputPath, 
  width = 128, 
  height = 128, 
  density = 300
) {
  try {
    await sharp(inputPath, { density })
      .resize(width, height)
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Converted ${inputPath} -> ${outputPath} (${width}x${height} @ ${density}dpi)`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    process.exit(1);
  }
}

// ---- CLI Execution Handler --------------------------------------------------
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  const args = process.argv.slice(2);
  
  // Mapping current hardcoded values as defaults
  const input = args[0] || "assets/icon.svg";
  const output = args[1] || "icon.png";
  const w = parseInt(args[2]) || 128;
  const h = parseInt(args[3]) || 128;
  const d = parseInt(args[4]) || 300;

  await convertSvgToPng(input, output, w, h, d);
}
