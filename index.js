const express = require('express');

const getWeather = require('./src/api/weather');
const getLaji = require('./src/api/laji')


const app = express();

const port = 8888;

app.get('/weather', async function(req, res){
  console.log(req.query);
  const { provience, city } = req.query;
  try {
    const data = await getWeather(provience, city)
    console.log(data);
    res.json({
      reason: 'ok',
      error_code: 0,
      result: data,
    });
  } catch (error) {
    console.log(error, 'err');
    res.json({
      reason: 'error',
      error_code: 1,
      result: null,
    });
  }
});

app.get('/qiubai', async function() {
  console.log(req.query);

})

app.get('/laji', async function(req, res) {
  const { name } = req.query;
  console.log('laji', name);
  try {
    const data = await getLaji(name)
    console.log(data);
    res.json({
      reason: 'ok',
      error_code: 0,
      result: data,
    });
  } catch (error) {
    console.log(error, 'err');
    res.json({
      reason: 'error',
      error_code: 1,
      result: null,
    });
  }
})

app.listen(port, () => {
  console.log(`this server is starting on localhost:${port}`)
});


