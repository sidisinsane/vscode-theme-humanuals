/**
 * Semantic highlight tokenmap.
 *
 * Provides language-specific semantic token color overrides for TypeScript,
 * JavaScript, Python, and Rust. Semantic highlighting runs on top of TextMate
 * syntax tokens and is applied by the language server.
 *
 * @module  semantic
 * @packageDocumentation
 */

import { Configuration } from "./interface";
import { palette } from "./palette";

/**
 * Generates semantic token color mappings for the specified theme variant.
 *
 * These tokens provide higher-fidelity highlighting than standard TextMate
 * grammars by using information from language servers (e.g., distinguishing
 * between a local variable and a built-in library property).
 *
 * Note: semantic tokens use chromatic palette keys only (e.g.
 * `"dark-aqua-500"`). They are independent of the neutral prefix and therefore
 * unaffected by temperature or contrast settings.
 *
 * @param  configuration  — The theme configuration object.
 * @param  variant  — The theme variant ("dark" or "light").
 * @returns  An object mapping semantic token selectors to hex color strings.
 * @public
 */
export function getSemantic(configuration: Configuration, variant: string) {
  const isDark = variant === "dark";
  const p = (hue: string, scale: string) =>
    palette[`${isDark ? "dark" : "light"}-${hue}-${scale}`];

  return {
    // python
    "class:python": p("aqua", "500"),
    // typescript
    "class:typescript": p("aqua", "500"),
    // typescript react
    "class:typescriptreact": p("aqua", "500"),
    "enum:typescript": p("purple", "500"),
    "enum:typescriptreact": p("purple", "500"),
    "enumMember:typescript": p("blue", "500"),
    "enumMember:typescriptreact": p("blue", "500"),
    "interface:typescript": p("aqua", "500"),
    "interface:typescriptreact": p("aqua", "500"),
    "intrinsic:python": p("purple", "500"),
    // rust
    "macro:rust": p("aqua", "500"),
    memberOperatorOverload: p("orange", "500"),
    "module:python": p("blue", "500"),
    "namespace:rust": p("purple", "500"),
    "namespace:typescript": p("purple", "500"),
    "namespace:typescriptreact": p("purple", "500"),
    operatorOverload: p("orange", "500"),
    // javascript
    "property.defaultLibrary:javascript": p("purple", "500"),
    // javascript react
    "property.defaultLibrary:javascriptreact": p("purple", "500"),
    "property.defaultLibrary:typescript": p("purple", "500"),
    "property.defaultLibrary:typescriptreact": p("purple", "500"),
    "selfKeyword:rust": p("purple", "500"),
    "variable.defaultLibrary:javascript": p("purple", "500"),
    "variable.defaultLibrary:javascriptreact": p("purple", "500"),
    "variable.defaultLibrary:typescript": p("purple", "500"),
    "variable.defaultLibrary:typescriptreact": p("purple", "500"),
  };
}
