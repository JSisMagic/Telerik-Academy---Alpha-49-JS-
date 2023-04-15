const input = ['4', '1 2 3 2 1', '2 1', '1 2 2 1', '4'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();

for (let i = 0; i < n; i++) {
  const arr = gets().split(' ');
  let isSymmetric = true;

  for (let j = 0; j < arr.length / 2; j++) {
    if (arr[j] !== arr[arr.length - 1 - j]) {
      isSymmetric = false;
      break;
    }
  }

  if (isSymmetric) {
    print('Yes');
  } else {
    print('No');
  }
}