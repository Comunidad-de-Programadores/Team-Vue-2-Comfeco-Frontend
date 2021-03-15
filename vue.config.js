module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/_variables.scss";`
            }
        }
    }
};
