var fs = require('fs');
var text = fs.readFileSync('input16.txt', 'utf8');
var movesArr = text.split(',');

var letters = 'abcdefghijklmnop';

function dancing(str, moves){
	var n;
	var move;
	var indexA;
	var indexB;
	moves.forEach(function(item){
		move = item[0];
		if (move === 's') {
			n = parseInt(item.substring(1));
			str = str.rotate(n);
		} else if (move === 'x') {
			indexA = parseInt(item.substring(1).split('/')[0]);
			indexB = parseInt(item.substring(1).split('/')[1]);
			A = str[indexA];
			B = str[indexB];
			str = str.replacing(A, B);
		} else if (move === 'p'){

			letterA = item.substring(1).split('/')[0];
			letterB = item.substring(1).split('/')[1];
			str = str.replacing(letterA, letterB);
		}
	})

	return str;
}
function aLotOfMoves(arr, moves){
	var res = [];
	res[0] = dancing(arr, moves);
	for(var i = 1; i <= 1000000000; i ++){
		res[i] = dancing(res[i-1], moves);
	}
	return res[1000000000];
}

String.prototype.replacing = function(a, b){
	str = this;
	str = str.replace(a, 'X');
	str = str.replace(b, 'Y');
	str = str.replace('X', b);
	str = str.replace('Y', a);

	return str;
}

String.prototype.rotate = function(n) {
  return this.slice(this.length - n, this.length).concat(this.slice(0, this.length - n));
}

console.log(aLotOfMoves(letters, movesArr));