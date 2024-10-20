/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'col-1': '#81EE9A', // light green - used in cards and buttons
				'col-1-light': '#DFFFE7', // backrgound light green - used in most of backgrounds
				'col-2': '#56CD9A', // ocean green - used in most of cards
				'col-3': "#35A4A7", // light teal (keppel) - used in cards
				'col-4': "#1C567B", // blue sapphire (dark blue) - used in dark backgrounds
				'col-5': "#8BD2C6", //arsenic - used in team cards
				'txt': '#354647', // text color
			},
			animation: {
				'loop-scroll': 'loop-scroll 10s linear infinite',
				'loop-scroll-slow': 'loop-scroll 40s linear infinite',
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	plugins: [],
}
