/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@patoi/tw-zen-plugin')],
	safelist: ['zen--suspend', 'zen--off', 'zen--reduced']
};
