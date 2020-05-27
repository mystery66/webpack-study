const path = require('path');

module.exports = {
  entry: './src/index.js', // 打包的文件
  output: {
    filename: 'bundle.js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist') // 打包后的文件路径 __dirname webpack.config.js所在的当前路径 bundle 文件夹名称
  }
}