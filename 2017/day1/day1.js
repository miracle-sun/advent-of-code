var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('');

function isMatch (arr) {
	// если цифры совпали,
	// то цифру нужно просуммировать к общей сумме
	var sum = 0;
	for (var i = 0; i < arr.length-1; i++) {
		if(arr[i] === arr[i+1]) {
			sum += parseInt(arr[i]);
		}
	}

	return sum;
}
function isMatchHalfArray (arr) {
	var sum = 0;
	var arrLength = arr.length;
	var halfArrLength = arrLength/2;
	for (var i = 0; i < halfArrLength; i++) {
		if(arr[i] === arr[halfArrLength+i]) {
			sum += parseInt(arr[i]);
		}
	}

	return sum*2;
}

console.log(isMatch(bigArray), 'res1');
console.log(isMatchHalfArray(bigArray), 'res2');
