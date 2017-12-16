function generatorA(number) {
	return number*16807 % 2147483647;
}
function generatorB(number) {
	return number*48271 % 2147483647;
}

function binary(number) {
	return number.toString(2).slice(-16);
}

function compare(a, b){
	return Number(a === b);
}

function significantSample(a, b) {
	var res = {};
	var A = generatorA(a);
	var B = generatorB(b);
	binA = binary(generatorA(a));
	binB = binary(generatorB(b));
	var isEqual = compare(binA, binB);
	return res{'a': A, 'b': B, 'r': isEqual};
}
function takeSum(a, b){
	var sum = 0;
	var result;
	var numberA, numberB;
	for(var i = 0; i < 40000000; i++){
		if(i === 0) {
			result = significantSample(a, b)
		} else {
			result = significantSample(numberA, numberB)
		}
		numberA = result['a'];
		numberB = result['b'];
		sum += result['r'];
	}

	return sum;
};

console.log(takeSum(512, 191))