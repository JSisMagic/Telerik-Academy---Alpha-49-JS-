const input = ['0', '10,20,30,40,50', '2 forward 1', '2 backwards 1', '3 forward 2', '3 backwards 2', 'exit'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const startingPosition = +gets();
const array = gets().split(',').map(Number);

let forwardSum = 0;
let backwardSum = 0;

let currentPosition = startingPosition;

while (true) {
  const instruction = gets().split(' ');
  if (instruction[0] === 'exit') {
    break;
  }
  const steps = +instruction[0];
  const direction = instruction[1];
  const size = +instruction[2];
  
  for (let i = 0; i < steps; i++) {
    if (direction === 'forward') {
      currentPosition = (currentPosition + size) % array.length;
      forwardSum += array[currentPosition];
    } else {
      currentPosition = (currentPosition - size % array.length + array.length) % array.length;
      backwardSum += array[currentPosition];
    }
  }
}

print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardSum}`);


// Another solution

/*

let n = +gets();
let arr = gets().split(",").map(Number);
let forwardSum = 0;
let backwardsSum = 0;
let currentPosition = n;

while (true) {
    let fullCommand = gets().split(" ");
    let direction = fullCommand[1];
    let steps = Number(fullCommand[0]);
    let size = Number(fullCommand[2]);

    for (let i = 0; i < steps; i++) {
        if (size > arr.length) {
        size = size % arr.length;
        }
        if (direction === 'forward') {
            currentPosition += size;
            if (currentPosition >= arr.length) {
                currentPosition = currentPosition - arr.length;
            }
            forwardSum += arr[currentPosition];
        } else {
            currentPosition -= size;
            if (currentPosition < 0) {
                currentPosition = currentPosition + arr.length;
            }
            backwardsSum += arr[currentPosition];
        }
    }


    if (fullCommand[0] === "exit") {
        break;
    }

}

print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardsSum}`);

*/


// Another solution 

/*

let input = [
    '0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 1',
    '3 forward 2',
    '3 backwards 2',
    'exit'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  
  const start = +gets();
  const arr = gets().split(",").map(Number);
  
  let forwardSum = 0;
  let backwardSum = 0;
  let command = '';
  let pos = start;
  
  while (true) {
    let way = gets().split(" ");
    let direction = way[1];
    let steps = Number(way[0]);
    let size = Number(way[2]);
 
    for (let i = 0; i < steps; i++) {
        if (size > arr.length) {
            size = size % arr.length;
        }
        if (direction === 'forward') {
            pos += size;
            if (pos >= arr.length) {
                pos = pos - arr.length;
            }
            forwardSum += arr[pos];
        } else {
            pos -= size;
            if (pos < 0) {
                pos = pos + arr.length;
            }
            backwardSum += arr[pos];
        }
    }
    if (way[0] === "exit") {
        break;
    }
 
}print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardSum}`);

*/


// Another solution 


/*

let input = [
    '0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 forward 1',
    '3 forward 2',
    '3 backwards 2',
    'exit'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let position = +gets();
let arr = gets().split(',').map(Number);
let sumForward = 0;
let sumBackwards = 0;

while ((moves = gets()) != 'exit') {
    let instructions = moves.split(' ');
    let direction = instructions[1];
    let size = +instructions[2];
    let steps = +instructions[0];
    let cycles = 0;
    if (steps > 0) {
        if (direction === 'forward') {
            position += size;
            for (let i = position; cycles < steps; i += size) {
                i = isOutOfBoard(i, arr);
                sumForward += arr[i];
                position = i;
                cycles++;
            }
        } else if (direction === 'backwards') {
            position -= size;
            for (let i = position; cycles < steps; i -= size) {
                i = isOutOfBoard(i, arr);
                sumBackwards += arr[i];
                position = i;
                cycles++
            }
        }
    }
}

function isOutOfBoard(index, array) {
    while (index < 0) {
        index = array.length + index;
    }
    while (index >= array.length) {
        index = index - array.length;
    }
    return index;
}

print(`Forward: ${sumForward}`);
print(`Backwards: ${sumBackwards}`);

*/