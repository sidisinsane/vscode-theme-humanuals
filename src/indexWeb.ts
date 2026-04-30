/**
 * Web extension entrypoint (referenced by `browser` in `package.json`).
 *
 * The web extension host does not support Node.js APIs, so theme regeneration
 * is unavailable in this context. This entry point only notifies the user when
 * they attempt to change a theme setting.
 *
 * @module  indexWeb
 * @packageDocumentation
 */

import { window, workspace } from "vscode";

// Hardcoded to avoid importing settings.ts which uses Node.js fs module
// unavailable in the web extension host.
const PKG_CONFIG_PREFIX = "humanualsTheme";

/**
 * VS Code extension activation hook for the web host.
 *
 * Listens for configuration changes and informs the user that configuration
 * options are not available in the web environment.
 *
 * @public
 */
export function activate() {
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(PKG_CONFIG_PREFIX)) {
      window.showInformationMessage(
        "Configuration options are currently not available in vscode web."
      );
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
