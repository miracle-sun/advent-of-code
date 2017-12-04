const myInput = 312051;

var col=20, row=20;

var mas=new Array(row);

for (var i=0; i<row; i++) {
	mas[i]=new Array(col);
}

for (var i=0;i<row;i++){
	for (j=0;j<col;j++){
		mas[i][j] = 0;
	}
}

var direction = {'r': 0, 't': 0, 'l': 0, 'd': 0};
	var i0 = Math.round(row / 2);
	var j0 = Math.round(col / 2);
	var x;
	var y;
	obj = {'x': i0-1, 'y': j0-1};

function SpiralMemory() {
	mas[i0-1][j0-1] = 1;

	obj = goingRight(obj);
	obj = goingTop(obj);

	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);

	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);

	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);

	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);

	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);

	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);
	obj = goingTop(obj);

	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingLeft(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);
	obj = goingDown(obj);

	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingRight(obj);
	obj = goingTop(obj);
}

function goingRight(obj){
	x = obj['x'];
	y = obj['y'];

	mas[x][y+1] = mas[x][y] + mas[x-1][y+1] + mas[x-1][y] + mas[x-1][y+2]; 
	y = y + 1;
	return obj = {'x': x, 'y': y};
}

function goingTop(obj){
	x = obj['x'];
	y = obj['y'];

	mas[x-1][y] = mas[x][y] + mas[x][y-1] + mas[x-1][y-1] + mas[x-2][y-1];
	x = x - 1;
	return obj = {'x': x, 'y': y};
}

function goingLeft(obj){
	x = obj['x'];
	y = obj['y'];
	
	mas[x][y-1] = mas[x][y] + mas[x+1][y] + mas[x+1][y-1] + mas[x+1][y-2];
	y = y - 1;
	console.log('left:', mas[x][y]);
	return obj = {'x': x, 'y': y};
}

function goingDown(obj){
	x = obj['x'];
	y = obj['y'];

	mas[x+1][y] = mas[x][y] + mas[x][y+1] + mas[x+1][y+1] + mas[x+2][y+1];
	x = x + 1;
	console.log('down: ', mas[x][y]);
	return obj = {'x': x, 'y': y};
}

console.log(SpiralMemory());
console.log(mas);

