function allPaper(elem) {
	var Arr = elem.split(' ');
	function howMuchPaper(string){
		var sizes = string.split('x');
		var l = parseInt(sizes[0]);
		var w = parseInt(sizes[1]);
		var h = parseInt(sizes[2]);
		var arr = [parseInt(l*w), parseInt(w*h), parseInt(h*l)];
		arr.sort(function(a,b){return a-b;});
		var square = 2*l*w + 2*w*h + 2*h*l + arr[0];
		
		var arr1 = [l , w, h];
		arr1.sort(function(a,b){return a-b;});

		var feetOfRibon = arr1[0]*2 + arr1[1]*2 + arr1[0]*arr1[1]*arr1[2];
		
		return feetOfRibon;
	}

	var result = Arr.reduce(function(sum, current) {
		return sum + howMuchPaper(current);
	}, 0);

	console.log(result, 'result');
	return result;
}
