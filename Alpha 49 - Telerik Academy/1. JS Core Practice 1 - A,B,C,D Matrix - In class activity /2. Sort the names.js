const input = [' ']; 
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let names = gets().split(' ');
let sortedNames = [];

for (let name of names) {
  let sortedChars = name.split('').sort().join('');
  sortedNames.push(sortedChars);
}

sortedNames.sort();

print(sortedNames.join(' '));