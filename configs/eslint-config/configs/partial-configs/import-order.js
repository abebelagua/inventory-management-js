/** @type {import('./import-order').ImportOrderConfig} */
exports.importOrderConfig = {
    'newlines-between': 'always-and-inside-groups',
    groups: [
        // Node builtins are first
        'builtin',
        // then external modules
        'external',
        // then parent types
        'parent',
        // then siblings
        'sibling',
        // Then the index file
        'index',
        // Then the rest: internal and external type
        'object',
    ],
    pathGroups: [
        {
            // make imports from `src` their own group
            pattern: 'src/**',
            group: 'external',
            position: 'after',
        },
    ],
};
