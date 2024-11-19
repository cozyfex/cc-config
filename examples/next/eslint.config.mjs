import ESLintConfigs from '@cozyfex/eslint-config/eslint-configs.mjs'
import NamingESLint from '@cozyfex/eslint-config/mixins/naming-eslint.mjs'
import ReactESLint from '@cozyfex/eslint-config/mixins/react-eslint.mjs'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...ESLintConfigs,
  ...ReactESLint,
  ...NamingESLint,
)
