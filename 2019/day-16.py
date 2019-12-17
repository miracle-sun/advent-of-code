import math

file = open('day-16.txt');
dest = file.read();
arr = list(dest);
phase = '010-1';

PHASED = {
	'A': 0,
	'B': 1,
	'C': -1
};

INPUT = arr;

def createPhase(n):
	res = [];
	counter = len(INPUT) + 1;
	while len(res) < counter:
		res.extend('A'*n);
		res.extend('B'*n);
		res.extend('A'*n);
		res.extend('C'*n);

	res = ''.join(res);
	res = res[1:];
	res = [PHASED[el] for el in res];

	return res;
		

def doPhase():
	new_input = INPUT;
	counter = len(INPUT);
	for i in range(counter):
		phase = createPhase(i+1);
		res = [int(el) * phase[idx] for idx, el in enumerate(INPUT)];

		res_sum = sum(res);
		new_input[i] = str(res_sum)[-1];

	return new_input;

def star():
	res = 0;
	for i in range(100):
		res = doPhase();

	print(''.join(res[:8]))
	return res;

star()

