module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.vue"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		textColor:{
			'error':'#f57f6c'
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
