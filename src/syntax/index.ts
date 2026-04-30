/**
 * Syntax token array entrypoint.
 *
 * Selects between the default and italic keyword syntax functions based on the
 * `italicKeywords` configuration setting. Derives the palette prefix from
 * `variant` and `contrast` and passes it through to ensure all neutral color
 * lookups resolve correctly.
 *
 * @module  syntax.index
 * @packageDocumentation
 */

import { Configuration } from "../interface";
import { palette } from "../palette";
import { getDefaultSyntax } from "./default";
import { getItalicSyntax } from "./italic";

/**
 * Resolves the full TextMate syntax highlighting array based on user
 * configuration and theme variant.
 *
 * @param  configuration  – The theme configuration object.
 * @param  variant  – The theme variant ("dark" or "light").
 * @returns  An array of TextMate token color rules.
 * @public
 */
export function getSyntax(configuration: Configuration, variant: string) {
  // palette imported directly from palette.ts
  const isDark = variant === "dark";
  const temperature = isDark
    ? configuration.darkTemperature
    : configuration.lightTemperature;
  const contrast = isDark
    ? configuration.darkContrast
    : configuration.lightContrast;
  const prefix = `${variant}-${temperature}-${contrast}`;
  return configuration.italicKeywords === true
    ? getItalicSyntax(palette, configuration.italicComments, isDark, prefix)
    : getDefaultSyntax(palette, configuration.italicComments, isDark, prefix);
}
