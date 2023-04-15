let input = [
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


const n = +gets();
const matrix = [];

for (let col = 0; col < n; col++) {
  const column = [];
  for (let row = 0; row < n; row++) {
    column.push(row + col * n + 1);
  }
  matrix.push(column);
}

for (let row = 0; row < n; row++) {
  let newMatrix = "";
  for (let col = 0; col < n; col++) {
    newMatrix += matrix[col][row] + " ";
  }
  console.log(newMatrix);
}
/*

let x = +(gets());

for (let i = 0; i < x; i++) {
  let matrix = "";
  for (let j = 0; j < x; j++) {
    matrix += i + j * x + 1 + " ";
  }

  print(matrix);
}

*/


// My frist solution 

/*

let n = +gets();
let matrix = [];

for (let i = 0; i < n; i++) {
matrix[i] = [];
for (let j = 0; j < n; j++) {
matrix[i][j] = 0;
}
}

let currentNumber = 1;
for (let j = 0; j < n; j++) {
for (let i = 0; i < n; i++) {
matrix[i][j] = currentNumber;
currentNumber++;
}
}


for (let i = 0; i < n; i++) {
print(matrix[i].join(' '));
}

*/