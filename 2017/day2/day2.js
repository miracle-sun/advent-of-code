var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\n');

// в нашем случае исходный размер массива 16x16, 
// поэтому можно указать глобальную величину
var n = bigArray.length;

var newArray = [];
var rowArray = [];
for (var k = 0; k < n; k++){
	newArray.push(bigArray[k].split('\t'));
}

for (var l = 0; l < n; l++){
	rowArray[l] = [];
	for(var m = 0; m < n; m++) {
		rowArray[l].push(parseInt(newArray[l][m]));
	}
}

function takeCheckSum(arr) {
	var sum = 0;
	for(var i = 0; i < n; i++){
		sum += getMaxOfArray(arr[i]) - getMinOfArray(arr[i]);
	}
	return sum;
}

function takeCheckSum2(arr){
	var sum = 0;
	for(var i = 0; i < n; i++){
		sum += findDividers(arr[i]);
	}
	return sum;
}

function findDividers(arr){
	var divideRes = 0;
	for(var i = 0; i < n; i++){
		for(var t = 0; t < n; t++){
			if( (i !== t) && (arr[i]/arr[t])%1 === 0) {
				divideRes += (arr[i]/arr[t]);
			}
		}
	}
	return divideRes;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

console.log(takeCheckSum(rowArray));
console.log(takeCheckSum2(rowArray));
