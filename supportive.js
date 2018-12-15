var SupportiveBot = function(name) {
	this.name = name;
}

SupportiveBot.prototype.support = function() {
	var phrase1 = 'everything will be ok';
	var phrase2 = 'i love you';
	var phrase3 = 'i\'m here for you';
	var phrase4 = 'everything will get better soon';
	var phrase5 = 'you can accomplish your goals';
	var phrase6 = 'you can do it';
	var phrase7 = 'you are valid';
	var phrase8 = 'you are worth loving';

	var phraseArray = [phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8];

	console.log('hello, ' + this.name + '!\ni\'m here to say that ' + phraseArray[Math.floor(Math.random() * 8)] + '!')
}

module.exports = SupportiveBot;