/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'col-1': '#81EE9A', // light green
				'col-2': '#56CD9A', // emerald green
				'col-3': "#35A4A7", // turquoise blue
				'col-4': "#1C567B", // blue
			},
		},
	},
	plugins: [],
}
