var fs = require('fs');
var text = fs.readFileSync('day-3.txt', 'utf8');
var wires = text.split('\n');

const wireA = wires[0].split(',');
const wireB = wires[1].split(',');

// var col = 10000, row = 10000;
// var col = 20, row = 20;

// var matrix = new Array(row);

// for (var i = 0; i < row; i++) {
// 	matrix[i]=new Array(col);
// }

// for (var i = 0; i < row; i++){
// 	for (j = 0; j < col; j++){
// 		matrix[i][j] = 0;
// 	}
// }

const DOWN = 'D';
const UP = 'U';
const RIGHT = 'R';
const LEFT = 'L';

const pointX = 0;
const pointY = 0;

function goByWire(wire, flag) {
	let steps;

	wire.map((el) => {
		steps = Number(el.slice(1));
		goBySteps(steps, el[0], flag);
	})
}

let startX;
let startY;

let matrix = {};

function goBySteps(steps, direction, flag) {
	if (direction === UP) {
		for(let i = 1; i <= steps; i++) {
			startY = startY + 1;
			flag && checkIsEmpty(startY, startX);
			matrix[startY +'i'+ startX] = 1;
		}
	} else if (direction === DOWN) {
		for(let i = 1; i <= steps; i++) {
			startY = startY - 1;
			flag && checkIsEmpty(startY, startX);
			matrix[startY +'i'+ startX] = 1;
		}
	} else if (direction === LEFT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX - 1;
			flag && checkIsEmpty(startY, startX);
			matrix[startY +'i'+ startX] = 1;
		}
	} else if (direction === RIGHT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX + 1;
			flag && checkIsEmpty(startY, startX);
			matrix[startY +'i'+ startX] = 1;
		}
	}
}

function checkIsEmpty(y,x) {
	if (matrix[y +'i'+ x] === 1) {
		findManhattan(y,x);
	}
}

const res = [];
const resB = {};
function findManhattan(y, x) {
	let point1 = Math.abs(x - pointX);
	let point2 = Math.abs(y - pointY);

	let manthattanDistance = point1 + point2;

	resB[x + 'i' + y] = manthattanDistance;
	res.push(manthattanDistance);
}


startX = pointX;
startY = pointY;
goByWire(wireA, 0);

startX = pointX;
startY = pointY;
goByWire(wireB, 1);
function findMin(arr) {
	return Math.min(...arr)
}
console.log(findMin(res), 'result');
// console.log(resB, 'точки');
// console.log(resB);
// console.log(matrix);
// console.log(res, 'res');



