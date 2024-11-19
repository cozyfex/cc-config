import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import BaseESLint from "./mixins/base-eslint.mjs";

const ESLintConfigs = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...BaseESLint,
];

export default ESLintConfigs;
