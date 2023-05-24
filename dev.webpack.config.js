'use strict';
const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		Tuna: './src/index.js'
	},
	output:{
		path: path.resolve(__dirname, '/public/'),
		filename:'main.js'
	}
}
/*
const context = path.resolve(__dirname, '../engine/src/')
const tuna = path.resolve(__dirname, '../engine/src/core.js')
module.exports = {
	mode: 'development',
	context,
	entry: {tuna},
	output:{
		path: path.resolve(__dirname, '../engine/bin/'),
		filename:'[name].dev.js',
		library: 'Tuna',
		libraryTarget: 'umd',
		sourceMapFilename: '[file].map',
	   devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // string
      devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]', // string
      umdNamedDefine: true
	},
	performance: { hints: false },
	devtool: 'source-map'
}*/