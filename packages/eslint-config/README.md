## ESLint Config

### Install

```shell
```shell
# NPM
npm install eslint @cozyfex/eslint-config

# Yarn
yarn add eslint @cozyfex/eslint-config

# PNPM
pnpm add eslint @cozyfex/eslint-config
```

### Setting

#### Add below text to your eslint config file.

```json lines
{
  // ...
  "extends": [
    // ...
    // Here!!
    "@cozyfex/eslint-config",
    // This is option
    "@cozyfex/eslint-config/mixins/naming"
  ],
  // ...
}
```

#### Example(`.eslintrc.json`)

```json lines
{
  "root": true,
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    // Here!!
    "@cozyfex/eslint-config",
    // This is option
    "@cozyfex/eslint-config/mixins/naming"
  ],
  "ignorePatterns": [
    "dist",
    ".eslintrc.cjs"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react-refresh"
  ],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ]
  }
}
```
