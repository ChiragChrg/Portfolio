import eslintPluginAstro from 'eslint-plugin-astro';
import astroEslintParser from 'astro-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
    // Ignore specific directories
    { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },

    // Base language options
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },

    // Astro recommended rules
    ...eslintPluginAstro.configs.recommended,

    // Lightweight TypeScript rules (no type-info required)
    ...tseslint.configs.recommended,

    // Global lean rules
    {
        rules: {
            // Prefer TS-aware unused-vars, keep it as a warning; disable core
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'after-used',
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ]
        },
    },

    // .astro files: use Astro parser with TS inside <script> blocks
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroEslintParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },
        rules: {
            // Example Astro-specific hardening (opt-in)
            // 'astro/no-set-html-directive': 'error',
        },
    },

    // TS/TSX files
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
];
