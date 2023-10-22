/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#fef6e4',
				button: '#f582ae',
				headline: '#001858',
				paragraph: '#172c66',
				primary: '#f3d2c1',
				secondary: '#8bd3dd'
			},
			maxWidth: {
				main: '768px'
			}
		}
	},
	plugins: []
};
