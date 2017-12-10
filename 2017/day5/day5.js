var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\n').map(Number);

var n = bigArray.length;

function jumps(arr) {
	var jumpsNum = 0;
	
	for(var i = 0; i < n && i>=0; ) {
		var newIndex = i;
		jumpsNum += 1;
		i +=arr[i];

		// arr[newIndex] = arr[newIndex] + 1; // решение первой задачи
		arr[newIndex] = arr[newIndex] + (arr[newIndex] >= 3 ? -1 : 1);
	}
	return jumpsNum;
}

console.log(jumps(bigArray));
