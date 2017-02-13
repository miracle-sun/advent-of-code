function goString (string) {
	var arr = string.split('');
	var result = arr.reduce(function(sum, current, index) {
		if (current === '(') {
			if (sum + 1 === -1) {
				console.log(index, 'index');
  			}
  			return sum + 1;
  		} else if (current === ')')  {
  			if (sum - 1 === -1) {
  				console.log(index, 'index2');
  			}
  			return sum - 1;
  		}
	}, 0);

	console.log(result );

}