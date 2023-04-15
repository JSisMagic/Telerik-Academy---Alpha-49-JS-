const input = ['4'];

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
let n = +gets();

let matrix = new Array(n);
for (let i = 0; i < n; i++) {
matrix[i] = new Array(n);
}

for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
matrix[i][j] = BigInt(Math.pow(2, i + j));
}
}

let sum = 0n;
for (let i = 0; i < n; i++) {
for (let j = i + 1; j < n; j++) {
sum += matrix[i][j];
}
}

print(sum.toString());