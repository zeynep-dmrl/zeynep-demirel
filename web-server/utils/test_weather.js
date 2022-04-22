const request = require('request')

const forecast = (latitude,longitude) => {

    const url = 'http://api.weatherstack.com/current?access_key=&query='+latitude+','+longitude+'&units=m';
    request({url:url, json:true },(err,res) =>{
        if(err){
            return {hata: 'unable'}
        }
        else {
            
            return res.body.current.temprature,
            res.body.current.humidity
            
        }

    });
}
module.exports = forecast