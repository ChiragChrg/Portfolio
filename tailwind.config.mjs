/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '410px',
				'4xl': '1800px'
			},
			colors: {
				background: "var(--base)",
				foreground: "var(--text)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				mixColor: "var(--mixColor)",
				primaryLite: "var(--primaryLite)",
				primaryLiteAlt: "var(--primaryLiteAlt)",
				pinkLite: "var(--pinkLite)",
				pinkLiteAlt: "var(--pinkLiteAlt)",
				footer: "var(--footer)",
				contactSocialColor: "var(--contactSocialColor)",
			},
			fontFamily: {
				poppins: "var(--astro-font-poppins)",
				satisfy: "var(--astro-font-satisfy)",
				ubuntu: "var(--astro-font-ubuntu)",
			},
			backgroundImage: {
				'headerGradient': 'var(--headerGradient)',
				'OrbitGradient': 'var(--orbitGradient)',
				'skillGradient': 'var(--SkillGradient)',
				'skillGradientAlt': 'var(--SkillGradientAlt)',
				'LinkBtnGradient': 'var(--LinkBtnGradient)',
				'cardGradient': 'var(--cardGradient)',
				'imgOverlayGradient': 'radial-gradient(circle, transparent, #000 95%),linear-gradient(180deg,rgba(0, 0, 0),transparent 25%),linear-gradient(0deg,rgba(0, 0, 0),transparent 25%) '
			},
			keyframes: {
				"ripple": {
					from: { opacity: 1, scale: 0 },
					to: { opacity: 0, scale: 1 },
				},
				"orbit": {
					from: { rotate: "0deg" },
					to: { rotate: "360deg" },
				},
			},
			animation: {
				"ripple": "ripple 1s infinite",
				"orbit": "orbit 6s linear infinite",
			},
		},
	},
	plugins: [],
}
