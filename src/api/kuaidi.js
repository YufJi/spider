const request = require('../service')

const _ = require('lodash')
const cheerio = require('cheerio')


async function getKuaidi(company, number) {
  const { data } = await request({
    url: 'https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury',
    params: {
      appid: '4001',
      com: company,
      nu: number,
    },
  });
  console.log(data);
}

module.exports = getKuaidi;
