
var startStopBtn;
var fibsList;
var worker;

document.addEventListener("DOMContentLoaded", ready, false);

function ready() {
	startStopBtn = document.getElementById("start-stop-btn");
	consoleLogBtn = document.getElementById("console-log-btn");
	fibsList = document.getElementById("fibs");
	startStopBtn.addEventListener("click", startFibsWorker, false);
	consoleLogBtn.addEventListener("click", () => { console.log('Console Log Clicked') }, false);
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

function startFibsWorker() {
	startStopBtn.removeEventListener("click", startFibsWorker, false);
	startStopBtn.addEventListener("click", stopFibs, false);

	startStopBtn.innerText = "Stop";
	fibsList.innerHTML = "";

	worker = new Worker("/js/worker.js");
	worker.addEventListener("message", onMessage);
	worker.postMessage({ start: true });
}

function stopFibs() {
	startStopBtn.removeEventListener("click", stopFibs, false);
	startStopBtn.addEventListener("click", startFibsWorker, false);
	startStopBtn.innerText = "Start";
	worker.terminate();
	worker = null;
}

function onMessage(evt) {
	renderFib(evt.data.num, evt.data.fib);
}
