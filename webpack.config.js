const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const p = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'src', 'index.html')
}

module.exports = {
	context: p.src,
	entry: {
    main: './index.js',
    another: './analytics.js',
  },
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: p.dist,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: p.html,
			inject: 'body'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, 

			{
				test: /\.(png|jpg|svg)$/,
				use: [{
						loader: 'file-loader',
				}]
			}
		]
	}
}