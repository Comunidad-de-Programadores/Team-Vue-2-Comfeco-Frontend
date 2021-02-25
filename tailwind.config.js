const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.vue"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        // textColor: {
        //     error: "#f57f6c",
        //     words: "#737373",
        //     success: "#41B883"
        // }
        textColor: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            error: "#f57f6c",
            words: "#737373",
            success: "#41B883"
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
