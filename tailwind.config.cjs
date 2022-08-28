const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
		extend: {
			colors: {
				gold: {
					lt: 'rgb(var(--color-gold-lt) / <alpha-value>)',
					md: 'rgb(var(--color-gold-md) / <alpha-value>)',
					dk: 'rgb(var(--color-gold-dk) / <alpha-value>)',
					bg: 'rgb(var(--color-gold-bg) / <alpha-value>)',
				},
			}
		},
	},

  plugins: [],
};

module.exports = config;
