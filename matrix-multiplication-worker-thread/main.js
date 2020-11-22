var matrixSize;
var startBtn;
var n;
var consoleLogBtn;
var statusP;

document.addEventListener("DOMContentLoaded", ready, false);

function ready() {
    matrixSize = document.querySelector('#matrix_size');
    startBtn = document.querySelector('#start-btn');
    consoleLogBtn = document.querySelector("#console-log-btn");
    statusP = document.querySelector('#status');
    n = matrixSize.value;
    matrixSize.addEventListener('change', e => { n = e.target.value }, false);
    startBtn.addEventListener('click', matrixCalculationWorker, false);
    consoleLogBtn.addEventListener("click", () => { console.log('ConsoleLog Clicked') }, false);
}
function matrixCalculationWorker() {
    // console.time('matrixMultiplicationPostingMessage')
    const worker = new Worker('worker.js');
    worker.addEventListener('message', onMessage);
    worker.postMessage(n);
    // console.timeEnd('matrixMultiplicationPostingMessage')
}

function onMessage(e) {
    const matrixResult = e.data;
    console.log('Result recieved from web worker');
    console.log(matrixResult)
    statusP.innerText = "!!Finished!!"
}

