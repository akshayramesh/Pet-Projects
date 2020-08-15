// VMKYPJYE8WRE2NQH

var https = require('https')

var urlString = 'https://groww.in/v1/api/stocks_data/v1/accord_points/exchange/NSE/segment/CASH/latest_prices_ohlc/SBIN'


var options = {
    "method": "GET",
    "hostname": "www.groww.in",
    "path": "/v1/api/stocks_data/v1/accord_points/exchange/NSE/segment/CASH/latest_prices_ohlc/SBIN",
    "headers": {
        "cache-control": "no-cache"
    }
}

var req = https.request(options, function(res) {

    var chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

});

req.end()