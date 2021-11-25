module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    rules: {
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 2,
        '@typescript-eslint/prefer-optional-chain': 2,
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/no-explicit-any': ['error'],
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelComponents: ['label'],
            },
        ],
        'react/prop-types': 'off',
        'react/jsx-key': [
            2,
            {
                checkFragmentShorthand: true,
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'import/order': 'off',
        'react/destructuring-assignment': 'off',
        'react/state-in-constructor': 'off',
        'no-alert': 'off',
        'react/no-array-index-key': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                filter: {
                    regex: '__typename',
                    match: false,
                },
            },
            // Allow camelCase functions (23.2), and PascalCase functions (23.8)
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__typename'],
            },
        ],
        'no-continue': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'import/extensions': [
            'error',
            'never',
            {
                svg: 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['.lintstagedrc.js'],
};
