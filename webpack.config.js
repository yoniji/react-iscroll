var path = require("path")

module.exports = {
    entry: {
        "iscroll-react": ["./src/IScroll.js"],
    },
    externals: {
        "react": "react",
        "react-dom" : "react-dom"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: "iscroll-react",
        libraryTarget: "umd"
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
}
