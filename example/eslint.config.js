import ESLintConfig from '@cozyfex/eslint-config/ESLintConfig.mjs'
import NamingRules from '@cozyfex/eslint-config/mixins/naming.mjs'
import ReactESLint from '@cozyfex/eslint-config/mixins/react.mjs'

export default [...ESLintConfig, ...NamingRules, ...ReactESLint]
