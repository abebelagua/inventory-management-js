const importSettings = require('./partial-configs/import').importSettings;
const importRules = require('./partial-configs/import').importRules;

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: {
        es2022: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    ignorePatterns: [
        '.eslintrc.*',
        '*.json',
        '*.stories.*',
        '*.mdx',
        '*.css',
        '.*.js',
        'vite*',
        'setup-tests.ts',
        'lib',
        'dist',
        'node_modules',
    ],
    globals: {
        React: true,
        JSX: true,
    },
    plugins: ['@typescript-eslint', 'prettier', 'import', 'only-warn'],
    extends: [
        'eslint:recommended',
        'turbo',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    settings: {
        ...importSettings,
    },
    overrides: [
        {
            files: ['*.js?(x)', '*.ts?(x)'],
        },
    ],
};
