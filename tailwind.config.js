module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.vue"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		textColor:{
			'error':'#f57f6c',
			'white' : '#FFFFFF',
			'success': '#41B883',
			'words': '#737373',
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
