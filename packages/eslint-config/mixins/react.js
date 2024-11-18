import pluginReact from "eslint-plugin-react";

const ReactESLint = [
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];

export default ReactESLint;
