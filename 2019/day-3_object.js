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

function goByWire(wire) {
	let steps;

	wire.map((el) => {
		steps = Number(el.slice(1));
		goBySteps(steps, el[0]);
	})
}

let startX;
let startY;

let matrix = {};

function goBySteps(steps, direction) {
	if (direction === UP) {
		for(let i = 1; i <= steps; i++) {
			startY = startY + 1;
			checkIsEmpty(startY, startX);
			matrix[startY +''+ startX] = 1;
		}
	} else if (direction === DOWN) {
		for(let i = 1; i <= steps; i++) {
			startY = startY - 1;
			checkIsEmpty(startY, startX);
			matrix[startY +''+ startX] = 1;
		}
	} else if (direction === LEFT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX - 1;
			checkIsEmpty(startY, startX);
			matrix[startY +''+ startX] = 1;
		}
	} else if (direction === RIGHT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX + 1;
			checkIsEmpty(startY, startX);
			matrix[startY +''+ startX] = 1;
		}
	}
}

function checkIsEmpty(y,x) {
	if (matrix[y +''+ x] === 1) {
		findManhattan(y,x);
	}
}

const res = [];
const resB = {};
function findManhattan(y, x) {

	let manthattanDistance = Math.abs(x + y);

	resB[x + '' + y] = manthattanDistance;
	res.push(manthattanDistance);
}


startX = pointX;
startY = pointY;
goByWire(wireA);

startX = 0;
startY = 0;
goByWire(wireB);
function findMin(arr) {
	return Math.min(...arr)
}
console.log(findMin(res), 'result');
console.log(resB, 'точки');
// console.log(resB);
// console.log(matrix);
// console.log(res, 'res');



