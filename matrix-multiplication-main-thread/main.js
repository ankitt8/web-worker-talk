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
    statusP = document.querySelector('#status')
    n = matrixSize.value;
    matrixSize.addEventListener('change', e => { n = e.target.value }, false);
    startBtn.addEventListener('click', matrixCalculation, false);
    consoleLogBtn.addEventListener("click", () => { console.log('ConsoleLog Clicked') }, false);

}
function matrixCalculation() {
    console.time('matrixMultiplication')
    console.log(`Matrix calculation of two square matrix of size ${n} started!`)
    const matrix1 = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrix1[i] = new Array(n)
        for (let j = 0; j < n; ++j) {
            matrix1[i][j] = 1;
        }
    }
    const matrix2 = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrix2[i] = new Array(n)
        for (let j = 0; j < n; ++j) {
            matrix2[i][j] = 1;
        }
    }
    const matrixResult = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrixResult[i] = new Array(n);
    }
    for (let row = 0; row < n; ++row) {
        for (let col = 0; col < n; ++col) {
            matrixResult[row][col] = 0;
            for (let k = 0; k < n; ++k) {
                matrixResult[row][col] += matrix1[row][k] * matrix2[k][col];
            }
        }
    }
    console.log('Matrix Calculation Finished');
    console.log(matrixResult);
    console.timeEnd('matrixMultiplication')
    statusP.innerHTML = "!!Finished!!"
}
