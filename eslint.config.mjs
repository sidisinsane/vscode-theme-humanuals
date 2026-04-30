/**
 * ESLint configuration.
 *
 * @see  https://eslint.org/docs/v10.x/
 */

import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores([
    "**/__IGNORE__",
    "**/.vscode-test-web",
    "**/dist",
    "**/docs",
    "**/node_modules",
    "**/scripts",
    "eslint.config.mjs",
    "prettier.config.mjs",
    "typedoc.config.mjs",
  ]),

  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  perfectionist.configs["recommended-natural"],

  {
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error",
      "max-len": ["error", { 
        code: 80, 
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      "multiline-ternary": ["error", "always-multiline"],
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
      },
    },
  },
]);