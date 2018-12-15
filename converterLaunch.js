var request = require('request');
var Converter = require('./converter.js');

var USD;
var EUR;

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2bqHE7XigVBp97VPzYqWiYJyEkFamshqn2tMdRpY6V13gKLkGTRlX4fHw', function(err, res, body) {
	if (!err && res.statusCode == 200) {
		var data = JSON.parse(body);
		USD = data[2].buy;
		EUR = data[0].buy;
		
		var converter = new Converter(USD, EUR);

		converter.convert(1);

	} else {
		console.warn(err);
	}
});