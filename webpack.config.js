const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      // 处理js文件
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      // 处理着色器语言
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader'],
      }
    ]
  },
  plugins: [new CompressionPlugin()],
  devServer: {
    contentBase: path.join(__dirname, ''),
    compress: true,
    watchContentBase: true,
    port: 8082, // 端口
    host: 'localhost', //IP
    disableHostCheck: true,
  },
  // 配置node
  node: {
    fs: 'empty'
  }
}