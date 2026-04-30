/**
 * VS Code extension utilities for config reading and user prompts.
 *
 * @module  extensionUtils
 * @packageDocumentation
 */

import { commands, window, workspace } from "vscode";

import { Configuration } from "./interface";
import { PKG_CONFIG_PREFIX } from "./settings";

/**
 * Prompts the user to reload the VS Code window.
 *
 * Used when a configuration change requires a full window refresh to apply
 * newly generated theme files.
 *
 * @public
 */
export const promptToReload = () => {
  const action = "Reload";
  window
    .showInformationMessage("Reload required.", action)
    .then((selectedAction) => {
      if (selectedAction === action) {
        commands.executeCommand("workbench.action.reloadWindow");
      }
    });
};

/**
 * Retrieves the current theme configuration from the VS Code workspace.
 *
 * Maps the flat VS Code setting keys (prefixed with the extension namespace) to
 * the internal {@link Configuration} interface.
 *
 * @returns  The resolved {@link Configuration} object.
 * @public
 */
export const getVscodeConfiguration = (): Configuration => {
  const config = workspace.getConfiguration(PKG_CONFIG_PREFIX);
  return {
    darkContrast: config.get<"balanced" | "crisp" | "soft">("darkContrast"),
    darkCursor: config.get<string>("darkCursor"),
    darkSelection: config.get<string>("darkSelection"),
    darkTemperature: config.get<"cool" | "neutral" | "warm">("darkTemperature"),
    diagnosticTextBackgroundOpacity: config.get<string>(
      "diagnosticTextBackgroundOpacity"
    ),
    italicComments: config.get<boolean>("italicComments"),
    italicKeywords: config.get<boolean>("italicKeywords"),
    lightContrast: config.get<"balanced" | "crisp" | "soft">("lightContrast"),
    lightCursor: config.get<string>("lightCursor"),
    lightSelection: config.get<string>("lightSelection"),
    lightTemperature: config.get<"cool" | "neutral" | "warm">(
      "lightTemperature"
    ),
  };
};
