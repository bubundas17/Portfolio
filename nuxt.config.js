const pkg = require('./package');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Bubun Das",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '~/assets/css/materialdesignicons.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/alerts',
    '@/plugins/user',
    '@/plugins/components',
    {src: '@/plugins/quill.js', ssr: false},

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    prefix: "/api/v1/",
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
      // new webpack.ProvidePlugin({
      //   'jQuery': 'jquery'
      // })
    ],
    publicPath: "/assets/",
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
