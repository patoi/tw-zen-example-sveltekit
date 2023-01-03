/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('tw-zen')],
	safelist: ['zen--suspend', 'zen--animate', 'zen--reduced']
};
