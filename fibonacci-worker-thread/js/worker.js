var curNum = 0;

onmessage = onMessage;


function onMessage() {
	// you can do other stuff here too
	getNextFib();
}

function getNextFib() {
	let curFib = fib(curNum);
	console.log('curNum', curNum, 'curFib', curFib)
	postMessage({ num: curNum, fib: curFib });
	curNum++;
	getNextFib();
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}
