const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				// emerald
				primary: {
					'50': '#ecfdf5',
					'100': '#d1fae5',
					'200': '#a7f3d0',
					'300': '#6ee7b7',
					'400': '#34d399',
					'500': '#10b981',
					'600': '#059669',
					'700': '#047857',
					'800': '#065f46',
					'900': '#064e3b'
				}
				// primary: {
				// 	50: '#FFF5F2',
				// 	100: '#FFF1EE',
				// 	200: '#FFE4DE',
				// 	300: '#FFD5CC',
				// 	400: '#FFBCAD',
				// 	500: '#FE795D',
				// 	600: '#EF562F',
				// 	700: '#EB4F27',
				// 	800: '#CC4522',
				// 	900: '#A5371B'
				// }
			}
		}
	}
};

module.exports = config;
