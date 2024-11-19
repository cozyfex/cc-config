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

```js
import ESLintConfigs from '@cozyfex/eslint-config/eslint-configs.mjs';
import NamingESLint from '@cozyfex/eslint-config/mixins/naming-eslint.mjs';
import ReactESLint from '@cozyfex/eslint-config/mixins/react-eslint.mjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...ESLintConfigs,
    ...ReactESLint,
    ...NamingESLint,
);

```

#### Example(`eslint.config.mjs`)

```js
import ESLintConfigs from '@cozyfex/eslint-config/eslint-configs.mjs';
import NamingESLint from '@cozyfex/eslint-config/mixins/naming-eslint.mjs';
import ReactESLint from '@cozyfex/eslint-config/mixins/react-eslint.mjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...ESLintConfigs,
    ...ReactESLint,
    ...NamingESLint,
);
```
