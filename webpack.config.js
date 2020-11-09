const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	resolve: {
		modules: [path.join(__dirname, "src"), "node_modules"],
		alias: {
			react: path.join(__dirname, "node_modules", "react"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|otf)$/,
				loader: "file-loader",
				include: [/fonts/],

				options: {
					name: "[hash].[ext]",
					outputPath: "css/",
					publicPath: (url) => "../css/" + url,
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
};
