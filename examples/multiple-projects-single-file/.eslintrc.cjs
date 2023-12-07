module.exports = {
  root: true,
  // ❗️ It's very important that you don't have any rules configured at the top-level config,
  // and to move all configurations into the overrides section. Since JavaScript rules
  // can't run on GraphQL files and vice versa, if you have rules configured at the top level,
  // they will try to also execute for all overrides, as ESLint's configs cascade
  overrides: [
    {
      files: ['*.js'],
      processor: '@graphql-eslint/graphql',
      extends: ['eslint:recommended'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        es6: true,
      },
    },
    {
      files: ['schema.*.graphql'],
      extends: ['plugin:@graphql-eslint/schema-recommended'],
      rules: {
        '@graphql-eslint/require-description': 'off',
      },
    },
    {
      files: ['*.js/*.graphql'],
      extends: ['plugin:@graphql-eslint/operations-recommended'],
      rules: {
        '@graphql-eslint/require-selections': 'off',
      },
    },
  ],
};
