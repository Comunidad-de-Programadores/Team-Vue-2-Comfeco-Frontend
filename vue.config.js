module.exports = {
    // publicPath: "testeando"
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
};
