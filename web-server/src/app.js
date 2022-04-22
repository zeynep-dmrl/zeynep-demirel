const express = require('express');

const test_text = require('../utils/test_text');
const test_html = require('../utils/test_html');
const test_json = require('../utils/test_json');
const test_weather = require('../utils/test_weather');
const geocode = require('../utils/test_geocode')

var app = express();


const port = process.env.PORT || 3000;

app.get('/', (request,response) => {
    response.send('<h1>Anasayfa</h1>')
});

app.get('/test-text' ,(request,response) => {
    const textRes = test_text(18360859058)
    response.send(textRes)
});

app.get('/test-html' ,(request,response) => {
    const {htmlRes1,htmlRes2} = test_html(zeynep,demirel);
    response.send("<h1>" + htmlRes1+htmlRes2+ "</h1>");
});

app.get('/test-json' ,(request,response) => {
    const jsonRes = test_json(zeynep,demirel,18360859058)
    response.send(jsonRes);
});

app.get('/weather/geocode/:sehir', (request,response) => {
    const sehir = request.params.sehir
    const data = geocode(sehir)
    const dataJson = JSON.parse(data)
    response.send(dataJson)
});

app.get('/weather/forecast/:sehir', (req,res)  => {
    const sehir = req.params.sehir
    const {latitude,longitude} = geocode(sehir)
    const {temprature,humidity} = test_weather(latitude,longitude)
    res.send('Sıcalık: '+ temprature+ 'Nem: '+ humidity);
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})