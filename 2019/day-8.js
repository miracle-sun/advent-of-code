var fs = require('fs');
var text = fs.readFileSync('day-8.txt', 'utf8');
var bigArray = text.split('');

const WIDE = 25;
const TALL = 6;

let counters = [];
let onedigits = [];
let twodigits = [];


function getLayer(arr, counter) {
	let zerosCouter = 0;
	let oneDigitCounter = 0;
	let twoDigitCounter = 0;

	let layer = [];
	for(var i = 0; i < TALL; i++) {
		layer[i] = new Array();
		for(var j = 0; j < WIDE; j++) {
			layer[i][j] = arr[counter];
			if(arr[counter] === '0'){
				zerosCouter += 1;
			}
			if(arr[counter] === '1') {
				oneDigitCounter += 1;
			}
			if(arr[counter] === '2') {
				twoDigitCounter += 1;
			}
			counter +=1;
		}
	}

	counters.push(zerosCouter);
	onedigits.push(oneDigitCounter);
	twodigits.push(twoDigitCounter);

	return layer;
}


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];

let layerA = getLayer(bigArray, 0);
let layerB = getLayer(bigArray, 150);
let Layers = {};

for(var c = 0; c < 100; c++){
	Layers[c] = getLayer(bigArray, c*150);
}


// console.log(counters, 'zero');
let fewest = Math.min(...counters);

const index = counters.findIndex(el => el === fewest);
console.log(index, 'index');
console.log(onedigits[index], '1');
console.log(twodigits[index], '2');


