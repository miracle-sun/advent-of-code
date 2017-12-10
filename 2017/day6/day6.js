var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\t').map(Number);

// console.log(bigArray);

function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
}

function findIndexMaxElem(arr, max){
	var indexes = []; 
	arr.filter(function(item, i){
		if(item === max) {
			indexes.push(i);
		}
	})
	return indexes[0];
}
var sum = 0;
var states = [];
function redistribution(arr) {
	var n = arr.length;
	var max = getMaxOfArray(arr);
	var maxIndex = findIndexMaxElem(arr, max);
	var blocksBunch = arr[maxIndex];
	
	arr[maxIndex] = 0;
	var j = maxIndex + 1;

	for (var i = blocksBunch-1; i >= 0; i--) {
		if(j >= n) {
			j = 0;
		}
		arr[j] +=1;
		j = (j + 1) % n;
	};
	sum +=1;
	
	states.push(arr.join(''));

	return arr;
}

function findLoop(arr, states){
	var newArr, some;
	newArr = arr;
	do {
		some = redistribution(newArr);
		newArr = some;
	} while (findDuplicates(states))

	return sum;
}

function findDuplicates(data) {
  var result = [];

  data.forEach(function(element) {
    if (element === '01312109875321111065') {
     	result.push(element)
    }
  });
  return result.length === 0;
}
// 01312109875321111065
console.log(findLoop([0, 13, 12, 10, 9, 8, 7, 5, 3, 2, 1, 1, 1, 10, 6, 5], states), 'loop');
