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
				test: /\.(png|jpg|svg|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
							name: "[hash].[ext]",
							outputPath: "assets/",
							publicPath: (url) => "./assets/" + url,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|otf)$/,
				loader: "file-loader",
				include: [/fonts/],

				options: {
					name: "[hash].[ext]",
					outputPath: "assets/fonts/",
					publicPath: (url) => "./assets/" + url,
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
