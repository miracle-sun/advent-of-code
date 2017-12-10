var fs = require('fs');
var text = fs.readFileSync('vlada.txt', 'utf8');
var bigArray = text;

function cleanGarbage(str){
	var reg1 = new RegExp('!.', 'g');
	// var reg2 = new RegExp('[^\{^\<^\>^\}]', 'g');
	// var reg3 = new RegExp('<[^\>]*>', 'g');

	str = str.replace(reg1, '');
	// str = str.replace(reg2, '');
	// str = str.replace(reg3, '');

	return str;
}

function isValid(arr) {
	var indexA = 0;
	var indexB = 0;
	arr.forEach(function(item, i){
		if(item === arr[0]){
			indexA += 1;
		} else {
			indexB += 1;
		}
	})

	return indexA === indexB;
}

function score(str){
	var reg1 = new RegExp('{}', 'g');

	var index1 = str.match(reg1);
	str = str.replace(reg1, '1 ');

	var reg2 = new RegExp('\{d+ \}', 'g');

	var index2 = str.match(reg2);
	str = str.replace(reg2, '2 ');

	return str;
};

function getScore(arr){
	var score = 0;
	var level = 1;
	arr.forEach(function(item){
		if(item === '{') {
			score += level++;
		} else {
			level--;
		}
	})
	return score;
}

function collecteGarbage(arr){
	var garbageIndex = 0;
	var garbage = false;
	arr.forEach(function(item){
		if(garbage && item !== '>'){
			garbageIndex +=1;
		}
		if(item === '<'){
			garbage = true;
		} else if (item === '>') {
			garbage = false;
		}
	});
	return garbageIndex;
}
// console.log(getScore(cleanGarbage(bigArray).split(''))); // первая звезда
console.log(collecteGarbage(cleanGarbage(bigArray).split('')));
