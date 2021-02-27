
const path = require('path')
const compressionPlugin = require('compression-webpack-plugin') //gzip压缩插件

module.exports = {
    publicPath:'./',
    configureWebpack:() => {
      if(process.env.NODE_ENV === 'production'){
        return {
          plugins: [
            new compressionPlugin({
              test: /\.js$|\.html$|\.css/,//匹配文件
              threshold: 10240,//对10k的数据进行压缩
              deleteOriginalAssets: false //是否删除源文件
            }),
            ]
        }
      }
      // return config
    },
      //4.所有webpack的devServer的选项都支持
    devServer : {
        // open: false, // 启动服务后是否打开浏览器
        // host: '127.0.0.1',
        // port: 8000, // 服务端口
        proxy : {
        '/api' : {
            target : 'http://localhost:8080',
            ws : true,
            changeOrigin : true,
        }
        }
    },
    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "~@/styles/_index.scss";`
          }
        }
    },
    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
      // 清除已有的所有 loader。
      // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      svgRule.uses.clear()
      svgRule
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, './src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
      const fileRule = config.module.rule('file')
      fileRule.uses.clear()
      fileRule
        .test(/\.svg$/)
        .exclude.add(path.resolve(__dirname, './src/icons'))
        .end()
        .use('file-loader')
        .loader('file-loader')
    },
}