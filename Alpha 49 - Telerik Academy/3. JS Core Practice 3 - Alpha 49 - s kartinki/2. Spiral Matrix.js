const input = ['3'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();
const matrix = [];

for (let i = 0; i < n; i++) {
  matrix[i] = [];
}

let counter = 1;
let rowStart = 0;
let rowEnd = n - 1;
let colStart = 0;
let colEnd = n - 1;

while (rowStart <= rowEnd && colStart <= colEnd) {
  for (let i = colStart; i <= colEnd; i++) {
    matrix[rowStart][i] = counter++;
  }

  for (let i = rowStart + 1; i <= rowEnd; i++) {
    matrix[i][colEnd] = counter++;
  }

  for (let i = colEnd - 1; i >= colStart; i--) {
    matrix[rowEnd][i] = counter++;
  }

  for (let i = rowEnd - 1; i > rowStart; i--) {
    matrix[i][colStart] = counter++;
  }

  rowStart++;
  rowEnd--;
  colStart++;
  colEnd--;
}

for (let row of matrix) {
  print(row.join(' '));
}


// Another solution 

/*

const input = ['3'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();
const matrix = [];

for (let i = 0; i < n; i++) {
  matrix[i] = [];
}

let counter = 1;
let rowStart = 0;
let rowEnd = n - 1;
let colStart = 0;
let colEnd = n - 1;

while (rowStart <= rowEnd && colStart <= colEnd) {
  for (let i = colStart; i <= colEnd; i++) {
    matrix[rowStart][i] = counter++;
  }

  for (let i = rowStart + 1; i <= rowEnd; i++) {
    matrix[i][colEnd] = counter++;
  }

  for (let i = colEnd - 1; i >= colStart; i--) {
    matrix[rowEnd][i] = counter++;
  }

  for (let i = rowEnd - 1; i > rowStart; i--) {
    matrix[i][colStart] = counter++;
  }

  rowStart++;
  rowEnd--;
  colStart++;
  colEnd--;
}

for (let row of matrix) {
  print(row.join(' '));
}
*/