const MULTI = 2;
const ADD = 1;
const HALT = 99;

const PUT_INPUT = 3;
const TAKE_OUTPUT = 4;

const JUMP_IF_TRUE = 5;
const JUMP_IF_FALSE = 6;
const LESS_THAN = 7;
const EQUALS = 8;
const ADJUST = 9;

var fs = require('fs');
var text = fs.readFileSync('day-9.txt', 'utf8');
var bigArray = text.split(',');

// mode: 0 - position
// mode: 1 - immediate 

const MODE_TYPES = {
	POSITION: 0,
	IMMEDIATE: 1,
	RELATIVE: 2,
};

let INPUT = 0;
let OUTPUTS = [];

let RELATIVE_BASE = 0;

function star1() {
	var n = bigArray.length;
	var output;
	var pos1, pos2;
	let newIndex;
	let currentValue;

	for (var index = 0; index < n; index++) {
		currentValue = Number(bigArray[index]);
		output = Number(bigArray[index+3]);
		pos1 = Number(bigArray[index+1]);
		pos2 = Number(bigArray[index+2]);

		console.log(index, 'index');
		newIndex = runInstructions(currentValue, index, pos1, pos2, output);
		index = newIndex;
	}
};


function runInstructions(currentValue, index, pos1, pos2, output) {
	if (currentValue === HALT) {
		console.log(OUTPUTS, 'it was HALT outputs');
		return index;
	} else {
		// herabora, которую нужно распарсить
		return herabora(currentValue, index, pos1, pos2, output);
	}
}

function herabora(value, index, pos1, pos2, op) {
	let strV = value.toString();
	console.log(strV, 'strV');
	let strVal, output;

	if (strV.length === 1) { 
		strVal = '000'+ strV;
	} else if (strV.length === 2) {
		strVal = '00' + strV;
	} else if (strV.length === 3) {
		strVal = '0' + strV;
	} else {
		strVal = strV;
	}

	let n = strVal.length;
	var opcode = Number(strVal.slice(n-2));
	var mode1 = Number(strVal.slice(0, n-2)) % 10; // могу пожалеть об этом
	var mode2 = Number(strVal.slice(0, n-3)) % 10; // могу пожалеть об этом
	var mode3 = Number(strVal.slice(0, n-4)) % 10;

	var digitOpcode = opcode % 10;

	let arg1, arg2;
	if (mode1 === MODE_TYPES.POSITION) {
		arg1 = Number(bigArray[pos1]) 
	} else if (mode1 === MODE_TYPES.RELATIVE) {
		arg1 = pos1 + RELATIVE_BASE;
	} else {
		arg1 =  pos1;
	}

	if (mode2 === MODE_TYPES.POSITION) {
		arg2 = Number(bigArray[pos2]) 
	} else if (mode2 === MODE_TYPES.RELATIVE) {
		arg2 = pos2 + RELATIVE_BASE;
	} else {
		arg2 = pos2;
	}

	if (mode3 === MODE_TYPES.RELATIVE) {
		output = op + RELATIVE_BASE;
	} else {
		output = op;
	}


	if (opcode === HALT) {
		console.log('we have HALT', opcode, value, 'OUTPUTS:', OUTPUTS);
	} else if (opcode > 9) {
		console.log('vlada, you have problem, opcode bigger', opcode);
	} else {
		if (digitOpcode === MULTI) {
			bigArray[output] = arg1 * arg2;
			return index + 3;
		} else if (digitOpcode === ADD) {
			bigArray[output] = arg1 + arg2;
			return index + 3;
		} else if (digitOpcode === PUT_INPUT) {
			if(mode1 === MODE_TYPES.POSITION) {
				bigArray[pos1] = INPUT;
			} else if (mode1 === MODE_TYPES.RELATIVE) {
				bigArray[pos1 + RELATIVE_BASE] = INPUT;
			}else {
				putInput(pos1);
			}
			return index + 1;
		} else if (digitOpcode === TAKE_OUTPUT) {
			if(mode1 === MODE_TYPES.POSITION) {
				console.log('position mode for takeOutput', pos1);
				OUTPUTS.push(bigArray[pos1]);
				console.log('TAKE FOR OUTPUTS', OUTPUTS);
			} else if (mode1 === MODE_TYPES.RELATIVE) {
				console.log(RELATIVE_BASE, 'RELATIVE_BASE');
				OUTPUTS.push(bigArray[pos1 + RELATIVE_BASE]);
				console.log('TAKE FOR OUTPUTS mode 2', OUTPUTS);
			} else {
				takeOutput(pos1);
			}
			return index + 1;
		} else if (digitOpcode === JUMP_IF_TRUE) {
			if (arg1 !== 0) {
				index = arg2 - 1;
				return index;
			} else {
				return index + 2;
			}
		} else if (digitOpcode === JUMP_IF_FALSE) {
			if (arg1 === 0) {
				index = arg2 - 1;
				return index;
			} else {
				return index + 2;
			}
		} else if (digitOpcode === LESS_THAN) {
			if (arg1 < arg2) {
				putOne(output);
			} else {
				putZero(output);
			}
			return index + 3;
		} else if (digitOpcode === EQUALS) {
			if (arg1 === arg2) {
				putOne(output);
			} else {
				putZero(output);
			}
			return index + 3;
		} else if (digitOpcode === ADJUST) {
			RELATIVE_BASE = RELATIVE_BASE + pos1;
			return index + 1;
		}
	}
}


function multi(pos1, pos2, outputAdress) {
	bigArray[outputAdress] = Number(bigArray[pos1]) * Number(bigArray[pos2]);
}


function adding(pos1, pos2, outputAdress) {
	bigArray[outputAdress] = Number(bigArray[pos1]) + Number(bigArray[pos2]);
}

function putInput(pos) {
	bigArray[pos] = INPUT;
}

function takeOutput(pos) {
	OUTPUTS.push(pos);
	console.log('обновили отпут:', OUTPUTS);
}

function putZero(pos) {
	bigArray[pos] = 0;
} 

function putOne(pos) {
	bigArray[pos] = 1;
} 

console.log(star1());
