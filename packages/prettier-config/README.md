## Prettier Config

### Install

```shell
# NPM
npm install prettier @cozyfex/prettier-config

# Yarn
yarn add prettier @cozyfex/prettier-config

# PNPM
pnpm add prettier @cozyfex/prettier-config
```

### Setting

#### Add below config to `package.json` in root object.

```json lines
{
  // ...
  "prettier": "@cozyfex/prettier-config",
  // ...
}
```

#### Example

```json lines
{
  "name": "example",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "prettier": "prettier --write \"**/*.{js,jsx,ts,tsx,css,html}\""
  },
  // Here!!
  "prettier": "@cozyfex/prettier-config",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@cozyfex/eslint-config": "workspace:^",
    "@cozyfex/prettier-config": "workspace:^",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```