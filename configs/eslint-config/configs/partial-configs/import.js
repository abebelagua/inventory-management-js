const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

const importOrderConfig = require('./import-order').importOrderConfig;

exports.importRules = {
    'import/no-anonymous-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'error',
    'import/no-unassigned-import': [
        'warn',
        {
            // Allow unassigned imports for CSS files
            allow: ['**/*.css', '**/*.scss', '**/*/setup-feature-flags'],
        },
    ],
    'import/order': ['error', importOrderConfig],
};

exports.importSettings = {
    'import/resolver': {
        typescript: {
            project,
        },
    },
    'import/parsers': {
        '@typescript-eslint/parser': [
            '.ts',
            '.tsx',
            '.mts',
            '.cts',
            '.mtsx',
            '.ctsx',
        ],
    },
};
