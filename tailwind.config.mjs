/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				poppins:"var(--astro-font-poppins)",
				satisfy:"var(--astro-font-satisfy)",
				ubuntu:"var(--astro-font-ubuntu)",
			},
			backgroundImage:{
				'headerGradient': 'var(--headerGradient)',
			}
		},
	},
	plugins: [],
}
