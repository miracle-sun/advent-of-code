var fs = require('fs');
var text = fs.readFileSync('input7.txt', 'utf8');
var bigArray = text.split('\n');

var bigObj = {};

function splitItAll(arr){
	var t = arr.map(function(item){
		 return item.split(' ');
	})

	var k = t.filter(function(item){
		 return item.length > 3;
	})
	
	t.forEach(function(item){
		bigObj[item[0]] = parseInt(item[1].slice(1, -1));
	})

	console.log(bigObj);
	console.log(k);
	var sum = {};
	var l = k.map(function(item){
		var n = item.length;
		for(var i = 3; i < n; i++){
			if(i === n-1){
				sum[item] +=bigObj[item[i]]
			} else {
				sum[item] +=bigObj[item[i].slice(0, -1)]
			}
		}
	})
	console.log(sum);

	return bigObj;
};



console.log(splitItAll(bigArray));