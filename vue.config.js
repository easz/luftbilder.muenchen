module.exports = {
  publicPath: '/luftbilder.muenchen/',
  chainWebpack: config => {
  config
    .plugin('html')
    .tap(args => {
        args[0].meta = require('./package.json').meta
        return args;
    })
  }
}
