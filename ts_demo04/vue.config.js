const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const { createPlugins, createProxy } = require('./vue_config')

const env = process.env

module.exports = defineConfig({
  configureWebpack: {
    plugins: createPlugins(env),
    resolve: {
      alias:
        {
          '@': path.resolve(__dirname, 'src')
        }
    }
  },
  devServer: {
    // host: '0.0.0.0',
    // port: env.VUE_APP_PORT
    port: 9999,
    // open: true,
    proxy: createProxy(env)
  }
})
