const NamingESLint = [
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "Interface$",
            match: true,
          },
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          custom: {
            regex: "Type$",
            match: true,
          },
        },
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          custom: {
            regex: "^T[A-Z]",
            match: false,
          },
        },
      ],
    },
  },
];

export default NamingESLint;
