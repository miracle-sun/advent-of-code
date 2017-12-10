var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
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
		bigObj[item[0]] = 0;
	})

	var l = k.map(function(item){
		var children = [];
		
		var n = item.length;
		for(var i = 3; i < n; i++){
			if(i === n-1){
				if(bigObj[item[i]] >= 0){
					bigObj[item[i]] = bigObj[item[i]] + 1;
				} else 
				{
					bigObj[item[i]] = 0;
				}
			} else {
				var str1 = item[i].slice(0, -1);
				if(bigObj[str1] >= 0){
					bigObj[str1] = bigObj[str1] + 1;
				} else 
				{
					bigObj[str1] = 0;
				}
			}

			children.push(item[i]);
		}
		
		return children;
	})

	return bigObj;
};



console.log(splitItAll(bigArray));