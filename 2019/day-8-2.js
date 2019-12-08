var fs = require('fs');
var text = fs.readFileSync('day-8.txt', 'utf8');
var bigArray = text.split('');

const WIDE = 25;
const TALL = 6;

let counters = [];
let onedigits = [];
let twodigits = [];

let image = [];

//заготовка 
for(var y = 0; y < TALL; y++){
	image[y] = new Array();
	for(var x = 0; x < WIDE; x++){
		image[y][x] = 'a';
	}
}

function getLayer(arr, counter) {
	let zerosCouter = 0;
	let oneDigitCounter = 0;
	let twoDigitCounter = 0;

	let layer = [];
	for(var i = 0; i < TALL; i++) {
		layer[i] = new Array();
		for(var j = 0; j < WIDE; j++) {
			layer[i][j] = arr[counter];
			counter +=1;
		}
	}

	return layer;
}

let Layers = {};

for(var c = 0; c < 100; c++){
	Layers[c] = getLayer(bigArray, c*150);
}


for(var l = 99; l >= 0; l--) {
	for(var i = 0; i < TALL; i++) {
		for(var j = 0; j < WIDE; j++) {
			if(Layers[l][i][j] !== '2') {
				image[i][j] = Layers[l][i][j];
			}
		}
	}
}


console.log(image.join('\n'));