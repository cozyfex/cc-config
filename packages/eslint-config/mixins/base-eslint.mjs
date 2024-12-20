import globals from "globals";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";

const BaseESLint = [
  {
    name: "cozyfex-default-eslint",

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      prettier,
      promise,
    },

    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },

    rules: {
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
  {
    ignores: [
      "**/out/",
      "**/dist/",
      "**/build/",
      "**/.next/",
      "**/_next/",
      "**/node_modules/",
      "**/.idea/",
      "**/.vscode/",
      "**/*.config.js",
    ],
  },
];

export default BaseESLint;
