const input = ['hoopa']; 
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let str = gets(); 

let longestBlock = ''; 
let currentBlock = ''; 

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i-1]) { 
    currentBlock += str[i]; 
  } else { 
    if (currentBlock.length > longestBlock.length) { 
      longestBlock = currentBlock; 
    }
    currentBlock = str[i]; 
  }
}


if (currentBlock.length > longestBlock.length) {
  longestBlock = currentBlock; 
}

print(longestBlock);

// Another solution 

/*
let str = gets(), externalCounter = 0, position = 0;

for (let i = 0; i < str.length;){
    let currentChar = str[i];

    let internalCounter = 1;

    for (let j = i + 1; j < str.length; j++){
        if (currentChar === str[j]){
            internalCounter++;
        }
        else break;
    }

    if (internalCounter > externalCounter){
        externalCounter = internalCounter;
        position = i;
    }

    i += internalCounter;
}

print(str.slice(position, position + externalCounter));

*/

// Another solution 

/*

let arr = gets().split(''), count = 0, max = 0, cur = 0, res = '', curSeq = '';

for (let i = 0; i < arr.length; i++){

    if (count === 0){
        count ++, cur = arr[i], curSeq = arr[i]
    }else if (cur === arr[i]){
        count++, curSeq += arr[i]
    }else{
        count = 1, cur = arr[i], curSeq = arr[i]
    }
    
    if(count > max){max = count, res = curSeq}
}

print(res)


*/

// Another solution 

/*

let arr = gets().split(''), count = 0, max = 0, cur = 0, res = '', curSeq = '';

for (let i = 0; i < arr.length; i++){

    if (count === 0){
        count ++, cur = arr[i], curSeq = arr[i]
    }else if (cur === arr[i]){
        count++, curSeq += arr[i]
    }else{
        count = 1, cur = arr[i], curSeq = arr[i]
    }
    
    if(count > max){max = count, res = curSeq}
}

print(res)

*/

