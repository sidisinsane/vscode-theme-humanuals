/**
 * Prettier configuration.
 *
 * @see  https://prettier.io/docs/configuration
 */

const config = {
  printWidth: 80,

  overrides: [
    {
      files: ["*.ts"],
      options: {
        jsdocDescriptionIndent: false,
        jsdocLineWrappingStyle: "greedy",
        jsdocPrintWidth: 80,
        jsdocSpaces: 2,
        jsdocVerticalAlignment: false,
        plugins: ["prettier-plugin-jsdoc"],
        semi: true,
        singleQuote: false,
        trailingComma: "es5",
        tsdoc: true,
      },
    },
    {
      files: ["*.md", "*.markdown"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};

export default config;
