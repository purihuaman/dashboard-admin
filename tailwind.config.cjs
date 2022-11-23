/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			slate: {
				100: 'var(--slate-100)',
				200: 'var(--slate-200)',
				300: 'var(--slate-300)',
				400: 'var(--slate-400)',
				500: 'var(--slate-500)',
				600: 'var(--slate-600)',
				700: 'var(--slate-700)',
				800: 'var(--slate-800)',
				900: 'var(--slate-900)',
				50: 'var(--slate-50)',
			},
			purple: {
				100: 'var(--purple-100)',
				200: 'var(--purple-200)',
				300: 'var(--purple-300)',
				400: 'var(--purple-400)',
				500: 'var(--purple-500)',
				600: 'var(--purple-600)',
				700: 'var(--purple-700)',
				800: 'var(--purple-800)',
				900: 'var(--purple-900)',
			},
		},
		extend: {},
	},
	plugins: [],
};
