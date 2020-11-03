const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js', // 打包的文件
  devtool: 'source-map', // sourceMap 映射源文件
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // placeholder 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/'
          }
        },
        {
          loader: 'file-loader',
          // options: {
          //   name: '[path][name].[ext]'
          // }
        }
        
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 2 },
        },
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'autoprefixer',
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },
          // options: {
          //   postcssOptions: {
          //     plugins: [
          //       [
          //         'autoprefixer',
          //         {
          //           // Options
          //         },
          //       ],
          //     ],
          //   },
          // }
        // }
      ] // css-loader 合并css style-loader 挂载 style 至html head部分 sass-loader 处理sass成css
    }
  ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-study',
      template: 'src/index.html'
    })
  ],
  output: {
    filename: 'dist.js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist') // 打包后的文件路径 __dirname webpack.config.js所在的当前路径 bundle 文件夹名称
  }
}