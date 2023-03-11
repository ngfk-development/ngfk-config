import type { Options } from 'prettier';

// https://prettier.io/docs/en/options.html

const options: Options = {
  /**
   * Specify the line length that the printer will wrap on.
   */
  printWidth: 80,

  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: 2,

  /**
   * Indent lines with tabs instead of spaces.
   */
  useTabs: false,

  /**
   * Print semicolons at the ends of statements.
   */
  semi: true,

  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: true,

  /**
   * Change when properties in objects are quoted.
   */
  quoteProps: 'consistent',

  /**
   * Use single quotes instead of double quotes in JSX.
   */
  jsxSingleQuote: false,

  /**
   * Print trailing commas wherever possible in multi-line comma-separated
   * syntactic structures. (A single-line array, for example, never gets
   * trailing commas.)
   */
  trailingComma: 'all',

  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: true,

  /**
   * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the
   * end of the last line instead of being alone on the next line (does not
   * apply to self closing elements).
   */
  bracketSameLine: false,

  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens: 'always',

  /**
   * By default, Prettier will not change wrapping in markdown text since some
   * services use a linebreak-sensitive renderer, e.g. GitHub comments and
   * BitBucket. To have Prettier wrap prose to the print width, change this
   * option to "always". If you want Prettier to force all prose blocks to be on
   * a single line and rely on editor/viewer soft wrapping instead, you can use
   * "never".
   */
  proseWrap: 'preserve',

  /**
   * Specify the global whitespace sensitivity for HTML, Vue, Angular, and
   * Handlebars. See whitespace-sensitive formatting for more info.
   * https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
   */
  htmlWhitespaceSensitivity: 'ignore',

  /**
   * Whether or not to indent the code inside <script> and <style> tags in Vue
   * files.
   */
  vueIndentScriptAndStyle: false,

  /**
   * Control whether Prettier formats quoted code embedded in the file.
   */
  embeddedLanguageFormatting: 'auto',

  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   */
  singleAttributePerLine: false,
};

module.exports = options;
