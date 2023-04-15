const input = ['1 2 3 4 5 6 7']
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let numbers = gets().split(' ').map(Number); 

let groups = [[], [], []]; 

for (let i = 0; i < numbers.length; i++) {
  let remainder = numbers[i] % 3

  groups[remainder].push(numbers[i])
}

for (let i = 0; i < groups.length; i++) {
  if (groups[i].length > 0) {
    print(groups[i].join(' '))
  } else {
    print('')
  }
}