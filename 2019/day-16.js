var fs = require('fs');
var text = fs.readFileSync('day-16.txt', 'utf8');
// var text = '19617804207202209144916044189917';
var bigArray = text.split('');

var counter = bigArray.length;

const phase = '010-1';
const PHASED = {
	A: 0,
	B: 1,
	C: -1
};

function createPhase(n) {
	let res = [];

	while (res.length < counter+1) {
		res.push('A'.repeat(n));
		res.push('B'.repeat(n));
		res.push('A'.repeat(n));
		res.push('C'.repeat(n));
	}

	res = res.join('');
	res = res.substr(1);
	res = res.split('').map(el => PHASED[el]);

	return res;
}

let INPUT = bigArray;

function doPhase() {
	let res;
	let NEW_INPUT = INPUT;
	for(var i = 0; i < counter; i++) {
		let phase = createPhase(i+1);
		res = INPUT.map((el, index) => {
			return Number(el) * Number(phase[index])
		});

		let sum = res.reduce((el, sum) => el + sum, 0);
		NEW_INPUT[i] = sum.toString().substr(-1);
	}

	return NEW_INPUT;
}

function star() {
	for(var i = 0; i < 100; i++) {
		start = doPhase();
	}

	// return start.join('');
	return start.slice(0,8).join('');
}

console.log(star());

