function(data){
	var i = 0;
	while data.lenght != 0 {
		var t = data.slice(0), 
		if ( t === ')' ) {
			i--;
		} else if (t === '('{
			i++;
		}
	}
}