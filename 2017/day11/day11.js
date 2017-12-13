var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split(',');

function findLastPoint(arr){
	var x = 0;
	var y = 0;
	var z = 0;
	var res = [];
	arr.forEach(function(item){
		if(item === 'n'){
			z -= 1;
			x += 1;
		} else if(item === 'ne'){
			y -= 1;
			x += 1;
		} else if(item === 'se'){
			y -= 1;
			z += 1;
		} else if(item === 'sw'){
			y += 1;
			x -= 1;
		} else if(item === 'nw'){
			y += 1;
			z -= 1;
		} else if(item === 's'){
			z += 1;
			x -= 1;
		}
	});
	res.push(x);
	res.push(y);
	res.push(z);

	return res;
}

function cube_distance(arr) {
	var ax = arr[0];
	var ay = arr[1];
	var az = arr[2];
    return Math.max(Math.abs(ax), Math.abs(ay), Math.abs(az))
}

console.log(findLastPoint(bigArray));
var coord = findLastPoint(bigArray);
console.log(cube_distance(coord));