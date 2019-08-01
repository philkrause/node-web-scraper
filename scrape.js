const request = require('request')
const cheerio = require('cheerio')

request('https://news.ycombinator.com', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html)

    var siteHeading = $('m-state-info')

    // const output = siteHeading.find('img')
    console.log(siteHeading.html())
  }
})
