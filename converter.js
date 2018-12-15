var clc = require('cli-color');

var Converter = function(_USD, _EUR) {
	this._USD = _USD;
	this._EUR = _EUR;
}

Converter.prototype.convert = function (amount) {
	var UAHtoUSD = amount * this._USD;
	var UAHtoEUR = amount * this._EUR;
	console.log(amount + clc.blue('uah') + ' is ' + UAHtoUSD + clc.green('usd'));
	console.log(amount + clc.yellow('uah') + ' is ' + UAHtoEUR + clc.red('eur'));
}

module.exports = Converter;