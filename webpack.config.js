const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 打包的文件
  module: {
    rules: [{
      test: /\.jpg$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    filename: 'bundle.js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist') // 打包后的文件路径 __dirname webpack.config.js所在的当前路径 bundle 文件夹名称
  }
}