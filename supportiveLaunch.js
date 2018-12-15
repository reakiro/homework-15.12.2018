var SupportiveBot = require('./supportive.js');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var name;

rl.question('please enter your name:\n', function(ans) {
	name = ans;
	var sBot = new SupportiveBot(name);
	sBot.support();
	rl.close();
});