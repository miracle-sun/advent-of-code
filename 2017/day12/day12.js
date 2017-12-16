var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\n');

var splitArray = bigArray.map(function(item){
	return item.split(' <-> ');
});


function something(arr){
	var obj = {};
	arr.forEach(function(item){
		var t = item[0];
		obj[t] = item[1].split(',');
	})

	return obj;
}

var bigObj = something(splitArray);
console.log(bigObj[0]);

var res = [];

function findConnections(obj, index){
	res.push(index);
	for (var key of obj[parseInt(index)].filter(function(item){ 
		if (res.indexOf(item) < 0){
			return item;
		}}))
	{
        findConnections(obj, key);
    }

	return res;
}

var t = findConnections(bigObj, 0);
console.log(t.length);