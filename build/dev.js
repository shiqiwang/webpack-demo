const path = require('path') //nodejs的path模块, 用于处理不同环境下路径问题
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const root = path.resolve(__dirname, '..') // dev-server启动的绝对路径上层目录
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: [
    'webpack/hot/dev-server', //热替换处理入口文件
    path.join(root, 'src/main.js') //path.join把参数连接成路径并且会做一定的处理, 这里是入口文件的绝对路径
  ],
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    progress: true, // 显示编译进度
    // colors: true, // 使用颜色输出
    port: 3000, // 服务器端口
    compress: true
  },
  // 标记打包后文件得源文件位置
  devtool: 'eval', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //添加热替换插件
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'), //模板文件
      inject: 'body' //js的script注入到body底部
    })
  ]
})