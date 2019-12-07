var fs = require('fs');
var text = fs.readFileSync('orbits.txt', 'utf8');
var bigArray = text.split('\n');

function createCentersObj(inputArray) {
	let orbit, center;
	var orbitsObj = {};
	inputArray.map(el => {
		center = el.split(')')[0];
		orbit = el.split(')')[1];

		orbitsObj[orbit] = center;
	})

	return orbitsObj;
}


const test = createCentersObj(bigArray);

function findLen(obj) {
	let res = [];
	let lengthArr = [];
	let youArr, sanArr;

	youArr = goDeep(test, 'YOU');
	sanArr = goDeep(test, 'SAN');

	for(var i = 0; i < youArr.length; i ++) {
		for(var j = 0; j < sanArr.length; j++) {
			if (youArr[i] === sanArr[j]) {
				res.push(youArr[i]);
			}
		}
	}

	let a, b;

	for(var k = 0; k < res.length; k++) {
		a = goDeepFromMan(test, 'YOU', res[k]);
		b = goDeepFromMan(test, 'SAN', res[k]);
		lengthArr.push(a+b);
	}
	
	return Math.min(...lengthArr) - 2;
}

console.log(findLen(createCentersObj(bigArray)), 'result');


function goDeepFromMan(obj, man, key) {
	let res = [];

	let value = man;

	while (obj[value] !== key) {
		res.push(obj[value]);
		value = obj[value];
	}

	if(obj[value] === key) {
		res.push(obj[value]);
	}

	return res.length;
}

function goDeep(obj, key) {
	let res = [];

	let value = key;

	while (obj[value] !== 'COM') {
		res.push(obj[value]);
		value = obj[value];
	}

	if(obj[value] === "COM") {
		res.push(obj[value]);
	}

	return res;
}


// TFB
// 7GP
// [ SAN: 303, YOU: 310 ] 'counter'