/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 19:06:43
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-03 09:35:28
 * @@param: 
 */
const CompressionPlugin = require("compression-webpack-plugin")
const port = process.env.port || process.env.npm_config_port || 9528
module.exports = {
    outputDir: '../build/',
    assetsDir: 'static',
    publicPath:'https://hzau-cottonlab.github.io/lab-web-server/',
    //配置mock服务
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
      // disableHostCheck:true,
      // inline: false,
      // hot:false,  
      watchOptions:{
        ignored: /node_modules/ //不监视node_modules文件夹\
      },
      port: port,
      open: false,
      overlay: {
        warnings: false,
        errors: true
      },
      before: require('./mock/mock-server.js')
    },
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
      },
}