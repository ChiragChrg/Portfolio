#!/usr/bin/env bun

import { generateThemeVariables } from "../src/utils/colorUtils.ts";
import fs from 'fs';
import path from 'path';

type ColorProperties = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
};

type ColorTheme = {
    [themeName: string]: {
        light: ColorProperties;
        dark: ColorProperties;
    };
};

/**
 * COLOR_THEME object defines various color themes in HSL format.
 * Each theme has light and dark variants with specific color properties.
 * 
 * Properties:
 * - background: Background color
 * - text: Text color
 * - primary: Primary accent color
 * - secondary: Secondary accent color
 * - accent: Additional accent color
 */
const COLOR_THEME: ColorTheme = {
    custom: {
        light: {
            background: '#ffffff',
            text: '#000000',
            primary: '#6600ff',
            secondary: '#ff00bf',
            accent: '#8c00f0',
        },
        dark: {
            background: '#000000',
            text: '#ffffff',
            primary: '#6600ff',
            secondary: '#ff00bf',
            accent: '#8c00f0',
        }
    },

    default: {
        light: {
            background: '#ffffff',
            text: '#000000',
            primary: '#6600ff',
            secondary: '#ff00ff',
            accent: '#8700f0',
        },
        dark: {
            background: '#000000',
            text: '#ffffff',
            primary: '#6600ff',
            secondary: '#ff00ff',
            accent: '#8700f0',
        }
    },

    ocean: {
        light: {
            background: '#faffff',
            text: '#0a2230',
            primary: '#007aff',
            secondary: '#00d0c0',
            accent: '#0050ff',
        },
        dark: {
            background: '#000a10',
            text: '#e8fbff',
            primary: '#33aaff',
            secondary: '#33ffea',
            accent: '#3380ff',
        }
    },

    forest: {
        light: {
            background: '#fafffa',
            text: '#122012',
            primary: '#00a84f',
            secondary: '#47ff00',
            accent: '#00d97a',
        },
        dark: {
            background: '#000904',
            text: '#e8ffe9',
            primary: '#00d96f',
            secondary: '#6aff33',
            accent: '#33ffaa',
        }
    },

    sunset: {
        light: {
            background: '#fffaf4',
            text: '#2d0d00',
            primary: '#ff5500',
            secondary: '#ff0073',
            accent: '#ffb300',
        },
        dark: {
            background: '#0d0400',
            text: '#fff0e6',
            primary: '#ff7733',
            secondary: '#ff3399',
            accent: '#ffcc33',
        }
    },

    lavender: {
        light: {
            background: '#fdfaff',
            text: '#1a0a2e',
            primary: '#9b00ff',
            secondary: '#ff00e6',
            accent: '#7700ff',
        },
        dark: {
            background: '#05000a',
            text: '#f7ecff',
            primary: '#b84dff',
            secondary: '#ff66ff',
            accent: '#a366ff',
        }
    },
};


async function generateCSS(themes: ColorTheme) {
    let css = '/* Auto-generated theme styles */\n\n';

    for (const themeName in themes) {
        for (const mode in themes[themeName]) {
            const selector = `.theme-${themeName}.${mode}`;
            const vars = themes[themeName][mode as "light" | "dark"];

            // Generate CSS variables for the theme
            const themeVars = await generateThemeVariables(vars, mode);

            // Construct CSS block
            css += `${selector} {\n`;
            for (const [key, value] of Object.entries(themeVars)) {
                css += `  --${key}: ${value};\n`;
            }
            css += '}\n\n';
        }
    }

    return css;
}

// Generate and write themes CSS
async function main() {
    try {
        const cssContent = await generateCSS(COLOR_THEME);
        const stylesDir = path.join(process.cwd(), 'src', 'styles');
        const outputPath = path.join(stylesDir, 'themes.css');

        // Ensure styles directory exists
        if (!fs.existsSync(stylesDir)) {
            fs.mkdirSync(stylesDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, cssContent);
        console.log('✅ themes.css generated at:', outputPath);
    } catch (error) {
        console.error('❌ Error generating themes:', error);
        process.exit(1);
    }
}

await main();
