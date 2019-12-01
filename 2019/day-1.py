import math

def calc(el):
	return math.floor(el/3) - 2;

def star1(inputArr):
	res = 0;
	for el in inputArr:
		res += calc(int(el));
	return res

def star2(inputArr):
	modulesArr = []
	index = 0;
	for el in inputArr:
		modulesArr.append(calcFuel(int(el)))
	print(modulesArr);

	res = 0;
	for module in modulesArr:
		res += module;
	print(res)	

def calcFuel(module):
	res = 0;
	moduleFuel = calc(module);
	if calc(module) > 0:
		res += moduleFuel + calcFuel(moduleFuel)
	return res


def func():
	file = open('day-1.txt');
	dest = file.read();
	inputArr = dest.split('\n');

	print(star2(inputArr))

func()
