module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error'],
  },
};
