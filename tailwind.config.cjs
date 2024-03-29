/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			serif: ["Yeseva One", "serif"],
			mono: ["Space Mono", "mono"],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
