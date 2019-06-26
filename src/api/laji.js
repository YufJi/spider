const request = require('../service')

const _ = require('lodash')
const cheerio = require('cheerio')

async function getLaji(name) {
  const { data } = await request({
    url: `https://lajifenleiapp.com/sk/${encodeURIComponent(name)}`,
    isSpider: true,
  })
  const $ = cheerio.load(data, {
    xml: {
      normalizeWhitespace: true,
      withDomLvl1: true,
      xmlMode: true,
      decodeEntities: false
    }
  })

  let type = '';
  $('.container .row').eq(2).find('.col-md-12 h1 span').each((index, element) => {
    const reg = /(&nbsp;)/ig
    const xx = $(element).text().replace(reg, '')
    type += xx;
  })

  return type || `未找到${name}对应分类`;
}

module.exports = getLaji;
