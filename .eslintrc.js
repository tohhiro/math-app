module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'array-callback-return': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'nonblock-statement-body-position': 'off',
    'comma-dangle': 'off',
    curly: 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
