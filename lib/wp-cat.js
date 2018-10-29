import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts () {
    return axios.get(`${this.apiBase}/slug/v1/cat/${cat_slug}`, {
      params: {
        page: 1,
        per_page: 5
      }
    }).then(json => {
      return { posts: json.data }
    }).catch(e => {
      return { error: e }
    })
  }
}

const wp = new WpApi('http://otamamanabudev.local')

export default wp
