const input = [  '3 4',  '8 3 3',  '6 2 4 2',];

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let arraySize = gets().split(' ').map(Number);
let firstArray = gets().split(' ').map(Number);
let secondArray = gets().split(' ').map(Number);

let length = Math.max(arraySize[0], arraySize[1]);
let tempCurrent = 0;
let arrayResult = [];

for (let index = 0; index < length; index++) {
  let currentSum = 0;

  if (firstArray[index] != undefined && secondArray[index] != undefined) {
    currentSum = firstArray[index] + secondArray[index] + tempCurrent;
    tempCurrent = 0;
    if (currentSum > 9) {
      currentSum -= 10;
      tempCurrent++;
    }
  } else if (firstArray[index] == undefined && secondArray[index] != undefined) {
    currentSum = secondArray[index] + tempCurrent;
    tempCurrent = 0;
    if (currentSum > 9) {
      currentSum -= 10;
      tempCurrent++;
    }
  } else if (firstArray[index] != undefined && secondArray[index] == undefined) {
    currentSum = firstArray[index] + tempCurrent;
    tempCurrent = 0;
    if (currentSum > 9) {
      currentSum -= 10;
      tempCurrent++;
    }
  }

  arrayResult[index] = currentSum;
}

if (tempCurrent > 0) {
  arrayResult.push(tempCurrent);
}

print(arrayResult.join(' '));


// Another solution

/*

let print = this.print || console.log;

let line =  gets().split(' ').map(Number);
let l1 = line[0], l2 = line[1];
let arr1 = gets().split(' ').map(Number);
let arr2 = gets().split(' ').map(Number);

if (l1<l2){
    for(let i=0; i<l2-l1; i++){
        arr1.push(0);
    }
}
if (l2<l1){
    for(let i=0; i<l1-l2; i++){
        arr2.push(0);
    }
}

let arr = [];
let carry = 0;
for (let i=0; i<arr1.length; i++){
    let sum = arr1[i]+arr2[i]+carry;
    carry=0;
    if(sum>=10){
        sum = sum-10;
        carry=1;
    }
    arr.push(sum);
}
if(carry==1){
    arr.push(carry);
}
print(...arr);

*/