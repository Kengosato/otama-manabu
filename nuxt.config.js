const axios = require('axios')
const apiUrl = 'https://korogaro.net/otama-manabu'
const {getConfigForKeys} = require('./lib/config.js')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'otama-manabu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'otama-manabu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  /*
 ** Include css not in components
 */
 css: [
   // node.js module but we specify the pre-processor
   { src: 'bulma/bulma.sass', lang: 'sass' }
 ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    interval: 1000,
    routes () {
      return Promise.all([
        axios.get(`${apiUrl}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`),
        axios.get(`${apiUrl}/wp-json/wp/v2/pages?per_page=100&page=1&_embed=1`)
      ]).then((data) => {
        const posts = data[0]
        const pages = data[1]
        return posts.data.map((post) => {
          return {
            route: '/contents/' + post.slug,
            payload: post
          }
        }).concat(pages.data.map((page) => {
          return {
            route: page.slug,
            payload: page
          }
        }))
      })
    }
  }
}
