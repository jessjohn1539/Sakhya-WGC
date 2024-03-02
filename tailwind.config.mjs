/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'col-1': '#81EE9A', // light green
				'col-1-light': '#DFFFE7', // lighter light green idk
				'col-2': '#56CD9A', // emerald green
				'col-3': "#35A4A7", // turquoise blue
				'col-4': "#1C567B", // blue
        'col-5': "#8BD2C6", 
				'txt': '#354647', // blue
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
