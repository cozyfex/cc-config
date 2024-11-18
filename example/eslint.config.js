import ESLintConfig from '@cozyfex/eslint-config/eslint.config.js'
import NamingRules from '@cozyfex/eslint-config/mixins/naming.js'
import ReactESLint from '@cozyfex/eslint-config/mixins/react.js'

export default [...ESLintConfig, ...NamingRules, ...ReactESLint]
