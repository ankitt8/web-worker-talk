onmessage = onMessage

function onMessage(e) {
    const n = e.data;
    // console.log(`Size ${n} recieved from main thread`)
    matrixCalculationWorker(n)
}

function matrixCalculationWorker(n) {
    console.time('matrixMultiplication')
    console.log(`Matrix calculation of two square matrix of size ${n} startediinside web worker`)
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
    console.timeEnd('matrixMultiplication')
    console.log('Matrix Calculation finished inside web worker');
    postMessage(matrixResult)
}