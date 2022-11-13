/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Vollkorn", "serif"],
			serif: ["Yeseva One", "serif"],
			mono: ["Space Mono", "mono"],
		},
	},
	plugins: [],
}
