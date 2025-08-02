/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
    'color-function-notation': 'modern',
  },
}
