/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// eerie black, violet(#523249), moonstone, sapphire
			colors: {
				eerie: {
					100: '#ADC0C2',
					200: '#95AEB1',
					300: '#7E9CA0',
					400: '#68888D',
					500: '#577275',
					600: '#4E666A',
					700: '#455B5E',
					800: '#3D5052',
					900: '#1A2223'
				},

				moonstone: {
					50: '#B8E8E9',
					100: '#B0D1D4',
					200: '#96C1C5',
					300: '#ABC9CC',
					400: '#89B9BE',
					500: '#6EAAAF',
					600: '#508B91',
					700: '#417276',
					800: '#33595C',
					900: '#243F42'
				},

				grape: {
					50: '#D0B3C8',
					100: '#C9A6BF',
					200: '#B98DAD',
					300: '#AA749A',
					400: '#A26791',
					500: '#8B557C',
					600: '#724665',
					700: '#523249',
					800: '#3f2738',
					900: '#261722'
				},

				sapphire: {
					50: '#CDD7F4',
					100: '#ABBDED',
					200: '#8AA2E5',
					300: '#6888AE',
					400: '#476DD7',
					500: '#2A52BE',
					600: '#2548A7',
					700: '#1D3986',
					800: '#162B64',
					900: '#0F1D43'
				}
			}
		}
	},
	plugins: []
};
