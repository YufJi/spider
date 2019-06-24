const express = require('express');

const { getWeather } = require('./src/weather');

const app = express();

const port = 8888;

app.get('/weather', async function(req, res){
  console.log(req.query);
  const { provience, city } = req.query;
  try {
    const data = await getWeather(provience, city)
    res.json({
      reason: 'ok',
      error_code: 0,
      result: data,
    });
  } catch (error) {
    res.json({
      reason: error.message,
      error_code: 1,
      result: null,
    });
  }

});

app.listen(port, () => {
  console.log(`this server is starting on localhost:${port}`)
});


