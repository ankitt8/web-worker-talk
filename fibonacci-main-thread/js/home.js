
var startStopBtn;
var fibsList;
var worker;
var consoleLogBtn;

document.addEventListener("DOMContentLoaded", ready, false);

function ready() {
	startStopBtn = document.getElementById("start-stop-btn");
	consoleLogBtn = document.getElementById("console-log-btn");
	fibsList = document.getElementById("fibs");
	startStopBtn.addEventListener("click", startFibs, false);
	consoleLogBtn.addEventListener("click", () => { console.log('ConsoleLog Clicked') }, false);
}

function renderFib(num, fib) {
	// console.log('Render Fib Called')
	let p = document.createElement("div");
	p.innerText = `Fib(${num}): ${fib}`;
	if (fibsList.childNodes.length > 0) {
		fibsList.insertBefore(p, fibsList.childNodes[0]);
	}
	else {
		fibsList.appendChild(p);
	}
}

function stopFibs() {
	startStopBtn.removeEventListener("click", stopFibs, false);
	startStopBtn.addEventListener("click", startFibs, false);
	startStopBtn.innerText = "Start";
}


function startFibs() {
	startStopBtn.removeEventListener("click", startFibs, false);
	startStopBtn.addEventListener("click", stopFibs, false);
	startStopBtn.innerText = "Stop";
	fibsList.innerHTML = "";
	getNextFib()
}
var curNum = 0;

function getNextFib() {
	if (curNum > 40) return
	let curFib = fib(curNum);
	console.log('curNum', curNum, 'curFib', curFib)
	renderFib(curNum, curFib)
	curNum++;
	getNextFib();
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

