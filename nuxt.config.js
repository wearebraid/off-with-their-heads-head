const dotenv = require('dotenv')
const pkg = require('./package')

dotenv.config()

const cms = process.env.CMS || 'drupal'
const siteURL = process.env.SITE_URL || '#missing-site-url'

module.exports = {
  mode: 'universal',
  env: {
    cms,
    siteURL
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    'nuxt-vuex-router-sync',
    '@nuxtjs/axios'
  ],

  /*
  ** Sass resource loader configuration
  */
  sassResources: [
    './assets/sass/global.scss'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
