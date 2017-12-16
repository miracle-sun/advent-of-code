var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split('\n');

var bigObj = {};

function getSumObj(arr){
	var t = arr.map(function(item){
		 return item.split(' ');
	})

	//отфильтрованный массив с теми регистрами, которые держат другие башни
	var k = t.filter(function(item){
		 return item.length > 3;
	})
	
	//каждый регистр заносим в объект в ключ, а в значение - вес
	t.forEach(function(item){
		bigObj[item[0]] = parseInt(item[1].slice(1, -1));
	})
	// console.log(k);
	var sum = {};
	var sumStr = {};
	var l = k.map(function(item){
		var nameReg = item[0];
		var n = item.length;
		sumStr[nameReg] = item;
		for(var i = 3; i < n; i++){
			if(i === n-1){
				sum[nameReg] = sum[nameReg] ? sum[nameReg] + bigObj[item[i]] : bigObj[item[i]] + bigObj[nameReg];
			} else {
				sum[nameReg] = sum[nameReg] ? sum[nameReg] + bigObj[item[i].slice(0, -1)] : bigObj[item[i].slice(0, -1)] + bigObj[nameReg];
			}
		}
	});
	// console.log(sum, 'sum');

	// return sumStr;
	return sum
};

var sumObj = getSumObj(bigArray);
// console.log(sumObj);
['qwjmobb', 'fmarl', 'hqxdyv', 'fhphiyb', 'cmmqbz', 'kqoigs'].forEach(function(item){
	console.log(item, sumObj[item]);
})


// console.log(getSumObj(bigArray), 'res');

