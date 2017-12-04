var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\n');

function hashes(str){
	var arr = str.split(' ');
	var hashWords = {};
	var fail = 0; 
	var t = arr.map(function(word){
		word = word.split('').sort().join('');
		return hashWords[word] ? fail = 1 : hashWords[word] = word;
	});
	return fail;
}
function howManyValid(arr){
	var res = 0;
	arr.map(function(item){
		if(hashes(item) === 0) {
			res += 1;
		}
	});
	return res;
}

console.log(howManyValid(bigArray));
