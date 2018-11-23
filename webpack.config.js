const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
        		exclude: /node_modules/,
        		use: ['babel-loader']
			},
			{
				test: /\.css$/,
		        use: [
			        {
			        	loader: 'style-loader'
			        },
			        {
			            loader: 'css-loader',
			            options: {
			              	modules: true,
			              	camelCase: true,
			              	sourceMap: true
			          	}
			        }
		        ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		})
	],
	devServer: {
		// 서버를 실행하면 브라우저가 자동으로 열리고 앱이 자동으로 실행된다.
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot: true
	}
};