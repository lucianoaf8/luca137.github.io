// stylelint.config.cjs
module.exports = {
    extends: ['stylelint-config-tailwindcss'],
    rules: {
        'at-rule-no-unknown': [true, {
          ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
        }]
    }
  };
  