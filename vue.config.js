/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 19:06:43
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-19 19:20:25
 * @@param: 
 */
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    outputDir: '../',
    assetsDir: 'static',
    pages: {
        index: {
            entry: './src/main.js',
            title: 'web',
            //进入应用的html页面
            template: './public/index.html',
            //打包后的输出文件,需要与模板文件名相同
            filename: 'index.html',
        }
    },
    configureWebpack: {
        plugins: [
          new CompressionPlugin({
            test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
            threshold: 10240,//文件大小大于这个值时启用压缩
            deleteOriginalAssets: false//压缩后保留原文件
          })
        ]
      }
}