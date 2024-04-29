module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Si vous utilisez React
      // Autres configurations selon vos besoins
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    // Ajoutez d'autres règles spécifiques à votre projet si nécessaire
    rules: {
      // Règles ESLint
    },
  };
  