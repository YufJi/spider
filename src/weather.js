const request = require('./service')

const _ = require('lodash')
const cheerio = require('cheerio')

async function getWeather(provience, city) {
  const { data } = await request({
    url: `https://tianqi.moji.com/weather/china/${provience}/${city}`,
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
  const tem = '温度' + $('.wea_info .wea_weather em').eq(0).text();
  const status = $('.wea_info .wea_weather b').eq(0).text();
  const wea_alert = '空气质量: ' + $('.wea_info .wea_alert em').eq(0).text();
  const humidity = $('.wea_info .wea_about span').text();
  const wind = $('.wea_info .wea_about em').text();
  const tips = '温馨提示: ' + $('.wea_info .wea_tips em').text();
  const strs = []
  $('#live_index .live_index_grid ul li').each((i, ele) => {
    const str = $(ele).find('a dl dd').text() + ' ' + $(ele).find('a dl dt').text();
    if(!!str.trim()) {
      strs.push(str)
    }
  })
  const live_index = `生活指数:
  ${strs.reduce((pre, cur)=> {
    return pre + '\n' + '· ' + cur
  }, '').trimRight()}`;

  // const obj = {
  //   tem,
  //   status,
  //   humidity,
  //   wind,
  //   wea_alert,
  //   tips,
  //   live_index
  // }

  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     const element = obj[key];
  //     console.log(element)
  //   }
  // }
  return ({
    tem,
    status,
    humidity,
    wind,
    wea_alert,
    tips,
    live_index
  })
}

// getWeather() 

module.exports = {
  getWeather: getWeather,
}

