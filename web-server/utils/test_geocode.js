const request = require('request');

const geocode = (adress) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress)+'.json?access_token=pk.eyJ1ljoiaWZzNSIslmEiOiJjbDFveGZ2cjıxNjV3M2tvMm1kaW45MjF3ln0.jakzckr8Zkj8Xdbo8yQ05w'
    
    request({url:url, json: true },(err,res) =>{
        if(err) {
            return {hata: 'unable'}
        }
        else{
            return  res.body.features[0].center[1],
                 res.body.features[0].center[0]   
            

        }

    });

    
}

module.exports = geocode
