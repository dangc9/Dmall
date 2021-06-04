module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'compoments' : '@/compoments',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}