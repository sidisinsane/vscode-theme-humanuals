/**
 * Desktop extension entrypoint (referenced by `main` in `package.json`).
 *
 * On activation, regenerates the theme JSON files from the current user
 * settings and prompts for a reload if the output has changed. Registers a
 * configuration change listener to repeat this process whenever the user
 * modifies a `humanualsTheme.*` setting.
 *
 * @module  indexClient
 * @packageDocumentation
 */

import * as fs from "fs";
import { basename, join } from "path";
import { workspace } from "vscode";

import { getVscodeConfiguration, promptToReload } from "./extensionUtils";
import { PKG_CONFIG_PREFIX, PKG_THEMES } from "./settings";
import { Utils } from "./utils";

const utils = new Utils();

/**
 * VS Code extension activation hook.
 *
 * Called once when the extension loads. Writes the theme and prompts for reload
 * if needed, then registers the configuration change listener.
 *
 * @public
 */
export async function activate() {
  const changed = await writeTheme();
  if (changed) promptToReload();

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(PKG_CONFIG_PREFIX)) {
      writeTheme().then(() => promptToReload());
    }
  });
}

/**
 * VS Code extension deactivation hook.
 *
 * No cleanup required for this extension.
 *
 * @public
 */
export function deactivate() {}

/**
 * Reads the current user configuration, generates theme data, and writes the
 * dark and light theme JSON files to the `themes/` directory.
 *
 * @returns  A promise that resolves to `true` if the theme content changed, or
 *   `false` if the files were already up to date.
 */
async function writeTheme(): Promise<boolean> {
  const configuration = getVscodeConfiguration();
  const themeData = utils.getThemeData(configuration, PKG_THEMES);

  const darkPath = join(
    __dirname,
    "..",
    "themes",
    basename(PKG_THEMES[0].path)
  );
  const lightPath = join(
    __dirname,
    "..",
    "themes",
    basename(PKG_THEMES[1].path)
  );

  // Read existing content to detect whether theme has actually changed
  const existingDark = fs.existsSync(darkPath)
    ? fs.readFileSync(darkPath, "utf8")
    : null;
  const newDark = JSON.stringify(themeData.dark, null, 2);
  const changed = existingDark !== newDark;

  await utils.generate(darkPath, lightPath, themeData);
  return changed;
}
