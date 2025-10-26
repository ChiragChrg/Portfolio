/**
 * Converts RGB color values to HSL format.
 * 
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns An object containing h, s, l values in HSL format
 */
export const rgbToHsl = async (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    if (max === min) {
        return { h: 0, s: 0, l: +(l * 100).toFixed(1) };
    }

    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    let h = 0;
    switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
    }

    h = (h / 6) % 1;

    return {
        h: +(h * 360).toFixed(1),
        s: +(s * 100).toFixed(1),
        l: +(l * 100).toFixed(1)
    };
};

/**
 * Converts a HEX color string to HSL format.
 * 
 * @param hex - HEX color string (e.g., '#RRGGBB' or '#RGB')
 * @returns An object containing h, s, l values in HSL format
 */
export const hexToHsl = async (hex: string) => {
    if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
        throw new Error('Invalid hex color');
    }

    if (hex.length === 4) {
        hex = '#' + [...hex.slice(1)].map(c => c + c).join('');
    }

    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return rgbToHsl(r, g, b);
};

/**
 * Parses an HSL color string and returns its components.
 * 
 * @param hsl - HSL color string (e.g., 'hsl(240, 100%, 50%)')
 * @returns An object containing h, s, l values
 */
const parseHsl = async (hsl: string) => {
    const hslRegex = /^hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*\)$/;
    const match = hsl.match(hslRegex);

    if (!match) {
        throw new Error('Invalid HSL color format');
    }

    const h = parseFloat(match[1]);
    const s = parseFloat(match[2]);
    const l = parseFloat(match[3]);

    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
        throw new Error('HSL values out of range');
    }

    return { h, s, l };
}

/**
 * Converts a color string (RGB, HEX, or HSL) to HSL format safely.
 * If the input format is unsupported or an error occurs, it defaults to black.
 * 
 * @param color - The color string to convert (e.g., 'rgb(255, 0, 0)', '#FF0000', 'hsl(0, 100%, 50%)')
 * @returns The color in HSL format as a string (e.g., 'hsl(0, 100%, 50%)')
 */
const colorToHsl = async (color: string) => {
    try {
        let hsl: { h: number; s: number; l: number };


        if (color.startsWith('rgb')) {
            const rgbMatch = color.match(/\d+/g);
            if (!rgbMatch) throw new Error('Invalid RGB format');
            const [r, g, b] = rgbMatch.map(Number) as [number, number, number];
            hsl = await rgbToHsl(r, g, b);
        } else if (color.startsWith('#')) {
            hsl = await hexToHsl(color);
        } else if (color.startsWith('hsl')) {
            hsl = await parseHsl(color);
        } else {
            console.warn(`Unsupported color format: ${color}, defaulting to black`);
            return { h: 0, s: 0, l: 0 };
        }

        // Format the HSL object to string and validate it
        const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

        // Validate the final HSL string with parseHsl
        return await parseHsl(hslString);
    } catch (err) {
        console.error(`Error converting color "${color}" to HSL:`, err);
        return { h: 0, s: 0, l: 0 };
    }
};

/**
 * Generates a set of CSS variables and gradients based on provided HSL color inputs.
 * This function is used to create dynamic themes for light and dark modes.
 * 
 * @param background - The background color in HSL format (e.g., 'hsl(0, 0%, 100%)').
 * @param text - The text color in HSL format (e.g., 'hsl(0, 0%, 0%)').
 * @param primary - The primary accent color in HSL format (e.g., 'hsl(264, 100%, 50%)').
 * @param secondary - The secondary accent color in HSL format (e.g., 'hsl(315, 100%, 50%)').
 * @param accent - The additional accent color in HSL format (e.g., 'hsl(275, 100%, 47%)').
 * @returns An object containing CSS variable definitions and gradient styles.
 */
export const generateThemeVariables = async (
    vars: {
        background: string,
        text: string,
        primary: string,
        secondary: string,
        accent: string
    },
    mode: string
) => {
    const p = await colorToHsl(vars.primary);
    const s = await colorToHsl(vars.secondary);
    const a = await colorToHsl(vars.accent);
    const backgroundColor = await colorToHsl(vars.background);
    const textColor = await colorToHsl(vars.text);

    const backgroundHsl = `hsl(${backgroundColor.h}, ${backgroundColor.s}%, ${backgroundColor.l}%)`;
    const textHsl = `hsl(${textColor.h}, ${textColor.s}%, ${textColor.l}%)`;

    const isDark = mode === 'dark';

    // Footer and other derived colors adjust based on mode
    const footerLightness = isDark ? 15 : 75;
    const footerSvgALightness = isDark ? 10 : 80;
    const footerSvgBLightness = isDark ? 5 : 85;

    return {
        // Base colors
        background: backgroundHsl,
        text: textHsl,

        // Main colors
        primary: `${p.h}, ${p.s}%, ${p.l}%`,
        secondary: `${s.h}, ${s.s}%, ${s.l}%`,
        accent: `${a.h}, ${a.s}%, ${a.l}%`,

        // Lite variants
        primaryLite: 'hsla(var(--primary), 0.6)',
        primaryLiteAlt: 'hsla(var(--primary), 0.3)',
        secondaryLite: 'hsla(var(--secondary), 0.6)',
        secondaryLiteAlt: 'hsla(var(--secondary), 0.3)',
        accentLite: 'hsla(var(--accent), 0.6)',
        accentLiteAlt: 'hsla(var(--accent), 0.3)',

        // Header colors
        headerGradient: `linear-gradient(180deg, ${isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'}, transparent)`,

        // Orbit colors
        orbitDotColor: isDark ? textHsl : `hsl(var(--primary))`,
        orbitGradient: `conic-gradient(transparent, transparent, hsl(var(--primary)), hsl(var(--secondary)), ${isDark ? textHsl : `hsl(var(--primary))`})`,
        orbitGradientAlt: `conic-gradient(${isDark ? textHsl : `hsl(var(--primary))`}, hsl(var(--primary)), hsl(var(--secondary)), transparent, transparent)`,

        // Skill colors
        SkillGradient: `linear-gradient(-135deg, hsla(${p.h}, 60%, ${isDark ? 15 : 85}%, 0.6), hsla(${s.h}, 60%, ${isDark ? 15 : 50}%, 0.3))`,
        SkillGradientAlt: `linear-gradient(-135deg, hsla(${p.h}, 50%, ${isDark ? 15 : 55}%, 0.5), hsla(${s.h}, 50%, ${isDark ? 15 : 50}%, 0.2))`,

        // Gradients colors
        gradient: `linear-gradient(to right, hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--primary)), hsl(var(--secondary)))`,
        gradientLite: `linear-gradient(45deg, var(--primaryLite), var(--secondaryLite))`,

        // Card colors
        cardGradient: `linear-gradient(45deg, hsl(${backgroundColor.h}, ${backgroundColor.s}%, ${Math.max(1, backgroundColor.l * 0.1)}%), var(--primaryLite))`,
        cardGradientAlt: `linear-gradient(-135deg, hsl(${backgroundColor.h}, ${backgroundColor.s}%, ${Math.max(5, backgroundColor.l * 0.15)}%), var(--primaryLiteAlt))`,

        // Misc colors
        socialIconColor: isDark ? textHsl : `hsl(var(--primary))`,
        contactSocialColor: `hsla(${textColor.h}, ${textColor.s}%, ${textColor.l}%, 0.4)`,
        imgOverlayGradient: `radial-gradient(circle, transparent, var(--background) 95%), linear-gradient(180deg, var(--background), transparent 25%), linear-gradient(0deg, var(--background), transparent 25%)`,
        miscCardGradient: `linear-gradient(-45deg, hsl(${backgroundColor.h}, ${backgroundColor.s}%, ${Math.max(1, backgroundColor.l * 0.1)}%), var(--primaryLiteAlt))`,
        overlayGradient: `radial-gradient(farthest-corner at 100% 0%, hsla(${backgroundColor.h}, ${backgroundColor.s}%, ${footerSvgBLightness}%, 0.5), transparent)`,
        LinkBtnGradient: `linear-gradient(-135deg, hsla(${backgroundColor.h}, ${backgroundColor.s}%, ${footerSvgALightness}%, 0.8), hsla(${backgroundColor.h}, ${backgroundColor.s}%, ${footerLightness}%, 0.6))`,

        // Cursor colors
        cursorColor: `hsla(${isDark ? textColor.h : p.h}, ${isDark ? textColor.s : p.s}%, ${isDark ? textColor.l : p.l}%, 0.6)`,
        cursorColorAlt: `hsla(${isDark ? textColor.h : p.h}, ${isDark ? textColor.s : p.s}%, ${isDark ? textColor.l : p.l}%, 0.8)`,
        cursorBackgroundColor: `hsla(${isDark ? textColor.h : p.h}, ${isDark ? textColor.s : p.s}%, ${isDark ? textColor.l : p.l}%, 0.3)`,
        dotColor: isDark ? textHsl : `hsl(var(--primary))`,

        // Footer colors
        footer: `hsl(${p.h}, ${p.s}%, ${footerLightness}%)`,
        footerSvgA: `hsl(${p.h - 5}, ${p.s * 0.75}%, ${footerSvgALightness}%)`,
        footerSvgB: `hsl(${p.h - 8}, ${p.s * 0.6}%, ${footerSvgBLightness}%)`,
    };
};
