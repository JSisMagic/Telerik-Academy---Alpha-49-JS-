const input = ['3']; 

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let n = +gets();

function fillMatrixSpiral(n) {
  let matrix = new Array(n);

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  let num = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (num <= n * n) {
    for (let col = colStart; col <= colEnd; col++) {
      matrix[col][rowStart] = num;
      num++;
    }
    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[colEnd][row] = num;
      num++;
    }
    colEnd--;

    for (let col = colEnd; col >= colStart; col--) {
      matrix[col][rowEnd] = num;
      num++;
    }
    rowEnd--;

    for (let row = rowEnd; row >= rowStart; row--) {
      matrix[colStart][row] = num;
      num++;
    }
    colStart++;
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    print(matrix[i].join(' '));
  }
}

let result = fillMatrixSpiral(n);
printMatrix(result);


// Another solution 

/*
let n = +gets();
let matrix = [];
let direction = "down";
let num = 1;
let row = 0;
let col = 0;

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
    }
}

while (num <= n * n) {
    if (direction === "down") {
        if (row < n && matrix[row][col] === 0) {
            matrix[row][col] = num;
            row++;
        } else {
            direction = "right";
            col++;
            row--;
        }
    }
    if (direction === "right") {
        if (col < n && matrix[row][col] === 0) {
            matrix[row][col] = num;
            col++;
        } else {
            direction = "up";
            row--;
            col--;
        }
    }
    if (direction === "up") {
        if (row >= 0 && matrix[row][col] === 0) {
            matrix[row][col] = num;
            row--;
        } else {
            direction = "left";
            row++;
            col--;
        }
    }
    if (direction === "left") {
        if (col >= 1 && matrix[row][col] === 0) {
            matrix[row][col] = num;
            col--;
        } else {
            direction = "down";
            col++;
            row++;
            num--;
        }
    }
    num++;
}
for (const output of matrix) {
    print(...output);
}
*/