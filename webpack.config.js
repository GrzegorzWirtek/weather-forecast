const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/js/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.min.js',
		path: path.resolve(__dirname, './dist'),
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
	},
	watch: false,
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['autoprefixer']],
							},
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['autoprefixer']],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|webp|awif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							context: 'public',
							name: 'assets/[name].[ext]',
							publicPath: '',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			title: 'My App',
			filename: 'index.html',
			template: 'src/index.html',
		}),
		new Dotenv(),
	],
};
