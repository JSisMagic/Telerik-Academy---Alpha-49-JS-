const input = ['10 1 2 0 5 3 9 4 6 8 7']; 

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let numbers = gets().split(' ').map(Number);

numbers.sort((a, b) => a - b);

print(numbers.join(' '));