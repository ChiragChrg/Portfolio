/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				background: "var(--base)",
				foreground:"var(--text)",
				purple:"var(--purple)",
				pink:"var(--pink)",
				purpink:"var(--purpink)",
				purpleLite:"var(--purpleLite)",
				purpleLiteAlt:"var(--purpleLiteAlt)",
				pinkLite:"var(--pinkLite)",
			},
			fontFamily:{
				poppins:"var(--astro-font-poppins)",
				satisfy:"var(--astro-font-satisfy)",
				ubuntu:"var(--astro-font-ubuntu)",
			},
			backgroundImage:{
				'headerGradient': 'var(--headerGradient)',
				'OrbitGradient': 'var(--orbitGradient)',
			},
			keyframes: {
				"ripple": {
				  from: { opacity: 1, scale: 0 },
				  to: { opacity: 0, scale: 1 },
				},
				"orbit": {
				  from: {rotate:"0deg"},
				  to: { rotate:"360deg"},
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
