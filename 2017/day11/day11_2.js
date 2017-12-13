var fs = require('fs');
var text = fs.readFileSync('input.txt', 'utf8');
var bigArray = text.split(',');

function findLastPoint(arr){
	var res = {
		x: 0,
		y: 0,
		z: 0
	};
	var max = 0;
	arr.forEach(function(item){
		if(item === 'n'){
			res['z'] -= 1;
			res['x'] += 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		} else if(item === 'ne'){
			res['y'] -= 1;
			res['x'] += 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		} else if(item === 'se'){
			res['y'] -= 1;
			res['z'] += 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		} else if(item === 'sw'){
			res['y'] += 1;
			res['x'] -= 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		} else if(item === 'nw'){
			res['y'] += 1;
			res['z'] -= 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		} else if(item === 's'){
			res['z'] += 1;
			res['x'] -= 1;
			if(max < cube_distance(res)){
				max = cube_distance(res);
			}
		}
	});
	console.log(max, 'max');
	return res;
}

function cube_distance(obj) {
	var ax = obj['x'];
	var ay = obj['y'];
	var az = obj['z'];
    return Math.max(Math.abs(ax), Math.abs(ay), Math.abs(az))
}

console.log(findLastPoint(bigArray));
var coord = findLastPoint(bigArray);
console.log(cube_distance(coord));