'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const API_URL = process.env.API_URL || '/';

module.exports = {
  publicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        'src': resolve('src')
      }
    }
  }
}
