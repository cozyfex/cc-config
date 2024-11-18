import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const ESLintConfig = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    plugins: {
      prettier,
      promise,
    },

    rules: {
      "@typescript-eslint/no-unused-expressions": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "directive",
          next: "*",
        },
        {
          blankLine: "any",
          prev: "directive",
          next: "directive",
        },
      ],

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
            "object",
            "unknown",
          ],

          pathGroups: [
            {
              pattern: "{react*,react*/**}",
              group: "external",
              position: "before",
            },
            {
              pattern: "{next*,next*/**}",
              group: "external",
              position: "before",
            },
            {
              pattern: "{@constants,@constants/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@types,@types/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@interfaces,@interfaces/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@middlewares,@middlewares/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@services,@services/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@hooks,@hooks/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@stores,@stores/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@components,@components/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@utils,@utils/**}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "{@styles,@styles/**}",
              group: "index",
              position: "after",
            },
            {
              pattern: "{@assets,@assets/**}",
              group: "index",
              position: "after",
            },
            {
              pattern: "{(*|@styles/**).(css|scss|sass|less)}",
              group: "index",
              position: "after",
            },
            {
              pattern: "{*.*,*/**.*,/*.*,/*/**.*,./*.*,./*/**.*}",
              group: "object",
              position: "after",
            },
          ],

          pathGroupsExcludedImportTypes: [],
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default ESLintConfig;