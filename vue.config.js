'use strict'
const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const API_URL = process.env.API_URL || '/';

module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    resolve: {
      alias: {
        'src': resolve('src')
      }
    }
  }
}
