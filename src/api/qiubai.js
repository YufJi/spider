const request = require('../service')

const _ = require('lodash')
const cheerio = require('cheerio')

async function getQiubai() {
  const { data } = await request({
    url: 'https://www.qiushibaike.com/textnew/',
    isSpider: true,
  })
  const $ = cheerio.load(data, {
    xml: {
      normalizeWhitespace: true,
      withDomLvl1: true,
      xmlMode: true,
      decodeEntities: false,
    },
  });

  const strs = []
  console.log($('#content').hasClass('main'))
  $('#content .content-block #content-left .article').each((i, ele) => {
    const str = $(ele).find('.contentHerf .content span').text()
    strs.push(str)
  });
  console.log(strs)
}

module.exports = getQiubai;