import eslintPluginAstro from 'eslint-plugin-astro';
import astroEslintParser from 'astro-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';

export default [
    // Base ESLint recommended configuration
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },

    // Astro plugin recommended rules
    ...eslintPluginAstro.configs.recommended,

    // Configuration specifically for .astro files
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroEslintParser, // Import the actual parser object
            parserOptions: {
                parser: typescriptParser, // Pass the TypeScript parser object
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },
        rules: {
            // Add or override Astro-specific rules here
            // "astro/no-set-html-directive": "error"
        }
    },

    // Configuration for TypeScript files
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    }
];
