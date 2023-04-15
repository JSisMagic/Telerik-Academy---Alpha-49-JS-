const input = ['3']; 

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let n = +gets();

function fillMatrix(n) {
  let matrix = new Array(n);

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  let num = 1;

  for (let row = n - 1; row >= 0; row--) {
    let r = row;
    let c = 0;

    while (r < n && c < n) {
      matrix[r][c] = num;
      num++;
      r++;
      c++;
    }
  }

  for (let col = 1; col < n; col++) {
    let r = 0;
    let c = col;

    while (r < n && c < n) {
      matrix[r][c] = num;
      num++;
      r++;
      c++;
    }
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    print(matrix[i].join(' '));
  }
}

let result = fillMatrix(n);
printMatrix(result);

// Another solution 
/* 
let input = Number(gets());
let matrixC = [];

for (let i = 0; i < input; i++) {
    matrixC[i] = [];
    for (let j = 0; j < input; j++) {
        matrixC[i][j] = 0;
    }
}

let counter = 1;

let i = input - 1;
let j = 0;

while (counter <= input * input) {
    if (i > j) {
        for (let cI = i; cI < input; cI++) {
            matrixC[cI][j] = counter;
            counter++;
            j++;
        }

        j = 0;
        i--;
    } else if (i === j) {
        for (let cI = i; cI < input; cI++) {
            matrixC[cI][j] = counter;
            counter++;
            j++;
        }

        j = 1;
    } else if (i < j) {
        for (let cJ = j; cJ < input; cJ++) {
            matrixC[i][cJ] = counter;
            counter++;
            i++;
        }

        i = 0;
        j++;
    }
}


for (let i = 0; i < input; i++) {
    let row = '';
    for (let j = 0; j < input; j++) {
        row += matrixC[i][j] + " ";
    }

    print(row);
}


*/

// Another solution 
/*

let n = +gets();
const matrix = [];

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
    }
}

matrix[n - 1][0] = 1;
let counter = 1;

for (let row = n - 2; row >= 0; row--) {
    matrix[row][0] = matrix[row + 1][0] + counter;
    let newRow = row;
    for (let diagonal = 1; diagonal <= counter; diagonal++) {
        matrix[newRow + 1][diagonal] = matrix[newRow][diagonal - 1] + 1;
        newRow++;
    }
    counter++;
}


matrix[0][n - 1] = n * n;
let diagonalLength = 2;
let positionRow = 1;
let positionCol = n - 1;
let previousRow = 0;
let previousCol = n - 1;

for (let i = 1; i < counter - 1; i++) {
    for (let j = 1; j <= diagonalLength; j++) {
        matrix[positionRow][positionCol] = matrix[previousRow][previousCol] - 1;
        previousRow = positionRow;
        previousCol = positionCol;
        positionRow--;
        positionCol--;
    }
    diagonalLength++;
    positionRow = i + 1;
    positionCol = n - 1;
}

for(let i = 0; i < matrix.length; i++) {
    console.log(...matrix[i]);
}

*/

