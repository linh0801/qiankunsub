const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { name } = require('./package')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const port = 8888
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      globalObject: 'window',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
