var fs = require('fs');
var text = fs.readFileSync('orbits.txt', 'utf8');
var bigArray = text.split('\n');

var resObject = {};


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
	let counter = 0
	let res = {}
	let flattened = {};

	for(key in obj) {
		res[key] = goDeep(test, key);
	}

	for (key in res) {
		counter += res[key].length;
	}

	return counter;
}

findLen(createCentersObj(bigArray));


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
