var fs = require('fs');
var text = fs.readFileSync('day-3.txt', 'utf8');
var wires = text.split('\n');

const wireA = wires[0].split(',');
const wireB = wires[1].split(',');

const DOWN = 'D';
const UP = 'U';
const RIGHT = 'R';
const LEFT = 'L';

const pointX = -0;
const pointY = -0;

function goByWire(wire, flag) {
	let steps;

	wire.map((el) => {
		steps = Number(el.slice(1));
		goBySteps(steps, el[0], flag);
	})
}

let startX;
let startY;

let matrixA = {};
let matrixB = {};

let stepsA = 0;
let stepsB = 0;

let stepResA = {};
let stepResB = {};

let bigStep = {};

function goBySteps(steps, direction, flag) {
	if (direction === UP) {
		for(let i = 1; i <= steps; i++) {
			startY = startY + 1;
			if (flag) {
				matrixB[startY +'i'+ startX] = 1;
				stepsB += 1;
				stepResB[startY +'i'+ startX] = stepsB;
			} else {
				matrixA[startY +'i'+ startX] = 1;
				stepsA += 1; 
				stepResA[startY +'i'+ startX] = stepsA;
			}
			flag && checkIsEmpty(startY, startX, stepsB);
		}
	} else if (direction === DOWN) {
		for(let i = 1; i <= steps; i++) {
			startY = startY - 1;
			if(flag) {
				matrixB[startY +'i'+ startX] = 1;
				stepsB += 1;
				stepResB[startY +'i'+ startX] = stepsB;
			} else {
				matrixA[startY +'i'+ startX] = 1;
				stepsA += 1;
				stepResA[startY +'i'+ startX] = stepsA;
			}
			flag && checkIsEmpty(startY, startX, stepsB);
		}
	} else if (direction === LEFT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX - 1;
			if(flag) {
				matrixB[startY +'i'+ startX] = 1;
				stepsB += 1;
				stepResB[startY +'i'+ startX] = stepsB;
			} else {
				matrixA[startY +'i'+ startX] = 1;
				stepsA += 1;
				stepResA[startY +'i'+ startX] = stepsA;
			}
			flag && checkIsEmpty(startY, startX, stepsB);
		}
	} else if (direction === RIGHT) {
		for(let i = 1; i <= steps; i++) {
			startX = startX + 1;
			if (flag) {
				matrixB[startY +'i'+ startX] = 1;
				stepsB += 1;
				stepResB[startY +'i'+ startX] = stepsB;
			} else {
				matrixA[startY +'i'+ startX] = 1;
				stepsA += 1;
				stepResA[startY +'i'+ startX] = stepsA;
			}
			flag && checkIsEmpty(startY, startX, stepsB);
		}
	}
}

function checkIsEmpty(y,x, steps) {
	if (matrixA[y +'i'+ x] === 1) {
		findManhattan(y,x);
		bigStep[y +'i'+ x] = steps;
	}

}

const res = [];
const resB = {};
function findManhattan(y, x) {
	let point1 = Math.abs(x - pointX);
	let point2 = Math.abs(y - pointY);

	let manthattanDistance = point1 + point2;

	resB[y + 'i' + x] = manthattanDistance;

	res.push(manthattanDistance);
}

function findMin(arr) {
	return Math.min(...arr)
}

// обнуляем точки идем по первому кабелю
startX = pointX;
startY = pointY;
goByWire(wireA, 0);

// обнуляем точки идем по второму кабелю, избегаем пересечения с самим собой
startX = pointX;
startY = pointY;
goByWire(wireB, 1);

console.log(findMin(res), 'result');


console.log(resB, 'точки');
let k = Object.keys(resB);
let stepsRes = k.map((el) => {
	return stepResA[el] + stepResB[el]
});
console.log(findMin(stepsRes));
// console.log(stepResA, 'stepsA');
// console.log(stepResB, 'stepsB');

