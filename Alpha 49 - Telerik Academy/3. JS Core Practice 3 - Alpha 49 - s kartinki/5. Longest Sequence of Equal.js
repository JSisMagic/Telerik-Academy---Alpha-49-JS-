let N = gets();
let numbers = [];
for (let i = 0; i < N; i++) {
    numbers.push(gets());
}


let longestSequence = 1;
let currentSequence = 1;
for (let i = 1; i < N; i++) {
    if (numbers[i] === numbers[i-1]) {
        currentSequence++;
    } else {
        longestSequence = Math.max(longestSequence, currentSequence);
        currentSequence = 1;
    }
}


longestSequence = Math.max(longestSequence, currentSequence);


print(longestSequence);


// Another solutuon 


/*

let n = +gets(), arr = [];

for (let i = 0; i < n; i++){
    arr[i] = gets();
}

let externalCounter = 0;

for (let i = 0; i < n;){
    let currentElement = arr[i];

    let internalCounter = 1;

    for (let j = i + 1; j < n; j++){
        if (currentElement === arr[j]){
            internalCounter++;
            continue;
        }
        break;
    }

    if (internalCounter > externalCounter) externalCounter = internalCounter;

    i += internalCounter;
}

print(externalCounter);

*/