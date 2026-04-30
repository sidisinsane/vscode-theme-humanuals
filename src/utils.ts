/**
 * Core utility class for theme data assembly and file output.
 *
 * Orchestrates the three token sources — workbench colors, syntax tokens, and
 * semantic tokens — into the shape expected by VS Code's theme JSON format,
 * then writes the results to disk.
 *
 * @module  utils
 * @packageDocumentation
 */

import * as fs from "fs";
import { join } from "path";

import { Configuration, PkgTheme } from "./interface";
import { palette } from "./palette";
import { getSemantic } from "./semantic";
import { getSyntax } from "./syntax";
import { workbench } from "./workbench";

/**
 * Shape of the assembled theme data written by the generate method. Contains
 * one entry per variant keyed by `"dark"` and `"light"`.
 *
 * @public
 */
export interface ThemeData {
  colors: ReturnType<typeof workbench>;
  name: string;
  semanticHighlighting: boolean;
  semanticTokenColors: ReturnType<typeof getSemantic>;
  tokenColors: ReturnType<typeof getSyntax>;
  type: string;
}

/**
 * Assembles theme data from configuration and writes it to disk.
 *
 * @public
 */
export class Utils {
  /**
   * Writes the dark and light theme JSON files to disk.
   *
   * @param  darkPath  — Absolute path for the dark theme JSON file.
   * @param  lightPath  — Absolute path for the light theme JSON file.
   * @param  data  — Assembled theme data containing dark and light variants.
   */
  async generate(
    darkPath: string,
    lightPath: string,
    data: Record<string, ThemeData>
  ) {
    await this.writeFile(darkPath, data.dark);
    await this.writeFile(lightPath, data.light);
  }

  /**
   * Assembles workbench colors, syntax tokens, and semantic tokens for all
   * variants into the VS Code theme JSON shape.
   *
   * Constructs the neutral palette prefix
   * (`${mode}-${temperature}-${contrast}`) and passes it through to all token
   * generators so neutral color lookups resolve correctly against the new
   * three-part key structure.
   *
   * @param  configuration  — The resolved user or default configuration.
   * @param  pkg_themes  — Theme entries from `package.json`
   *   `contributes.themes`.
   * @returns  A {@link ThemeData} object keyed by variant (`"dark"` /
   *   `"light"`).
   */
  getThemeData(configuration: Configuration, pkg_themes: PkgTheme[]) {
    const themes: Record<string, ThemeData> = {};
    for (let index = 0; index < pkg_themes.length; index++) {
      const theme = pkg_themes[index];
      const mode = theme.uiTheme === "vs-dark" ? "dark" : "light";

      themes[mode] = {
        colors: workbench(palette, configuration, mode),
        name: theme.label,
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, mode),
        tokenColors: getSyntax(configuration, mode),
        type: mode,
      };
    }
    return themes;
  }

  /**
   * Returns `true` on the first activation after a clean install.
   *
   * Checks for the presence of a `.flag` file. Creates the file if absent.
   *
   * @returns  A boolean indicating if this is a fresh installation.
   */
  isNewlyInstalled(): boolean {
    const flagPath = join(__dirname, "..", ".flag");
    if (!fs.existsSync(flagPath)) {
      this.writeFile(flagPath, "");
      return true;
    }
    return false;
  }

  /**
   * Serializes `data` as formatted JSON and writes it to `path`.
   *
   * @param  path  — Absolute path to the output file.
   * @param  data  — Any JSON-serializable value.
   * @returns  A promise that resolves to "Success" on completion.
   */
  async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }
}
