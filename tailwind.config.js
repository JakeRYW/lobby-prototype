/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				short: { raw: '(max-height: 800px)' },
				// => @media (min-height: 800px) { ... }
			},
		},
	},
	plugins: [],
};
