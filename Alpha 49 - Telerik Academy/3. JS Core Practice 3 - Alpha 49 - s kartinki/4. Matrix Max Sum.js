
let input = [
    '6',
    '1 2 3 4 5 6',
    '2 3 4 5 6 7',
    '6 5 4 3 2 1',
    '3 4 5 6 7 8',
    '4 5 6 7 8 9',
    '9 8 7 6 5 4',
    '3 5 3 -5 -4 -2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let rows = +gets();
let counter = rows;
let matrix = [];
let cols = 0;

while (counter != 0) {
    let rowInput = gets().split(' ').map(Number);
    cols = rowInput.length;
    matrix.push(rowInput);
    counter--;
}

let coordinates = gets().split(' ').map(Number);

let sum = 0;
let resultArray = [];

for (let k = 0; k < coordinates.length; k++) {
    if (k % 2 === 1) {
        continue;
    } else {
        let coordRow = coordinates[k];               // 3
        let coordCol = coordinates[k + 1];           // 5
        sum = 0;
                                        // First case - when both are positive
        if (coordRow > 0 && coordCol > 0) {
            for (let j = 0; j <= coordCol - 1; j++) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = 0; m < coordRow - 1; m++) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
                                          // Second case - both are negative
        else if (coordCol < 0 && coordRow < 0) {
            coordCol = Math.abs(coordCol);
            coordRow = Math.abs(coordRow);
            for (let j = cols -1; j >= coordCol - 1; j--) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = rows - 1; m > coordRow - 1; m--) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
                         // Third case - when Col is positive and Row is negative
        else if (coordCol > 0 && coordRow < 0) {
            coordRow = Math.abs(coordRow);
            for (let j = cols -1; j >= coordCol - 1; j--) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = 0; m < coordRow - 1; m++) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
                              //Fourth case - when Col is negative and Row is positive
        else if (coordCol < 0 && coordRow > 0) {
            coordCol = Math.abs(coordCol);
            for (let j = 0; j <= coordCol - 1; j++) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = rows - 1; m > coordRow - 1; m--) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
    }
}

print(Math.max.apply(null, resultArray));


                     // Another solution 

/*


let input = [
    '6',
    '1 2 3 4 5 6',
    '2 3 4 5 6 7',
    '6 5 4 3 2 1',
    '3 4 5 6 7 8',
    '4 5 6 7 8 9',
    '9 8 7 6 5 4',
    '3 5 3 -5 -4 -2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let rows = +gets();
let counter = rows;
let matrix = [];
let cols = 0;

while (counter != 0) {
    let rowInput = gets().split(' ').map(Number);
    cols = rowInput.length;
    matrix.push(rowInput);
    counter--;
}

let coordinates = gets().split(' ').map(Number);

let sum = 0;
let resultArray = [];

for (let k = 0; k < coordinates.length; k++) {
    if (k % 2 === 1) {
        continue;
    } else {
        let coordRow = coordinates[k]; // 3
        let coordCol = coordinates[k + 1]; // 5
        sum = 0;
        // First case - when both are positive
        if (coordRow > 0 && coordCol > 0) {
            for (let j = 0; j <= coordCol - 1; j++) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = 0; m < coordRow - 1; m++) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
        // Second case - both are negative
        else if (coordCol < 0 && coordRow < 0) {
            coordCol = Math.abs(coordCol);
            coordRow = Math.abs(coordRow);
            for (let j = cols -1; j >= coordCol - 1; j--) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = rows - 1; m > coordRow - 1; m--) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
        // Third case - when Col is positive and Row is negative
        else if (coordCol > 0 && coordRow < 0) {
            coordRow = Math.abs(coordRow);
            for (let j = cols -1; j >= coordCol - 1; j--) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = 0; m < coordRow - 1; m++) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
        //Fourth case - when Col is negative and Row is positive
        else if (coordCol < 0 && coordRow > 0) {
            coordCol = Math.abs(coordCol);
            for (let j = 0; j <= coordCol - 1; j++) {
                sum += matrix[coordRow - 1][j];
            }
            for (let m = rows - 1; m > coordRow - 1; m--) {
                sum += matrix[m][coordCol - 1];
            }
            resultArray.push(sum);
        }
    }
}

print(Math.max.apply(null, resultArray));


//           Another solution 


/*

let loopingFunc = (coordRow, coordCol) => {
    if (coordRow > 0) {
        coordRow = Math.abs(coordRow);
        coordCol = Math.abs(coordCol);
        for (let m = 0; m < coordRow - 1; m++) {
            sum += matrix[m][coordCol - 1];
        }
    } else if (coordRow < 0) {
        coordRow = Math.abs(coordRow);
        coordCol = Math.abs(coordCol);
        for (let m = rows - 1; m > coordRow - 1; m--) {
            sum += matrix[m][coordCol - 1];
        }
    }
v    if (coordCol > 0) {
        coordRow = Math.abs(coordRow);
        coordCol = Math.abs(coordCol);
        for (let j = 0; j <= coordCol - 1; j++) {
            sum += matrix[coordRow - 1][j];
        }
    } else if (coordCol < 0) {
        coordRow = Math.abs(coordRow);
        coordCol = Math.abs(coordCol);
        for (let j = cols -1; j >= coordCol - 1; j--) {
            sum += matrix[coordRow - 1][j];
        }
    }
    return sum;
}

// Another solution 

let n = +gets();
let matrix = [[]];
let sum = 0;
let maxSum = Number.MIN_SAFE_INTEGER;
 
 
for (let i = 0; i < n; i++) {
    let matrixRow = gets().split(" ").map(Number);
    matrixRow.unshift(0);
    matrix.push(matrixRow);
}
 
let coordinates = gets().split(" ").map(Number);
 
let startCol = 1;
let lastCol = matrix[1].length - 1;
let firstRow = 1;
let lastRow = matrix.length - 1;
 
 
for (let i = 0; i < coordinates.length; i += 2) {
    let row = coordinates[i];
    let col = coordinates[i + 1];
 
    if (row > 0 && col > 0) {
        while (true) {
            if (col !== startCol) {
                sum += matrix[row][startCol];
                startCol++;
            } else if (col === startCol && row !== firstRow) {
                sum += matrix[row][col];
                row--;
            }
            if (row === firstRow && col === startCol) {
                sum += matrix[firstRow][col];
                break;
            }
 
        }
    }
 
    if (row > 0 && col < 0) {
        col *= -1;
        while (true) {
            if (col !== startCol) {
                sum += matrix[row][startCol];
                startCol++;
            } else if (col === startCol && row !== lastRow) {
                sum += matrix[row][col];
                row++;
            }
            if (row === lastRow && col === startCol) {
                sum += matrix[lastRow][col];
                break;
            }
 
        }
    }
 
    if (row < 0 && col < 0) {
        col *= -1;
        row *= -1;
        while (true) {
            if (col !== lastCol) {
                sum += matrix[row][lastCol];
                lastCol--;
            } else if (col === lastCol && row !== lastRow) {
                sum += matrix[row][col];
                row++;
            }
            if (row === lastRow && col === lastCol) {
                sum += matrix[row][col];
                break;
            }
 
        }
    }
 
    if (row < 0 && col > 0) {
        row *= -1;
        while (true) {
            if (col !== lastCol) {
                sum += matrix[row][lastCol];
                lastCol--;
            } else if (col === lastCol && row !== firstRow) {
                sum += matrix[row][col];
                row--;
            }
            if (row === firstRow && col === lastCol) {
                sum += matrix[firstRow][col];
                break;
            }
 
        }
    }
 
    if (sum > maxSum) {
        maxSum = sum;
    }
 
    startCol = 1;
    lastCol = matrix[1].length - 1;
    sum = 0;
}
 
print(maxSum);




*/

