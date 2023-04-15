const input = ['3 4'];

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let [n, m] = gets().split(' ').map(BigInt);

let sum = BigInt(0);

let row = BigInt(0);
let col = BigInt(0);
let directionRow = BigInt(1);
let directionCol = BigInt(1);

if (n === m) {
    for (let index = BigInt(0); index < n; index++) {
        sum += BigInt(2) ** (index * BigInt(2));
    }
} else if (n === BigInt(1) || m === BigInt(1)) {
    sum = BigInt(1);
} else {
    while (true) {
        let value = BigInt(2) ** (row + col);
        sum += value;

        if (row + directionRow < BigInt(0) || row + directionRow >= n) {
            directionRow *= BigInt(-1);
        }

        if (col + directionCol < BigInt(0) || col + directionCol >= m) {
            directionCol *= BigInt(-1);
        }

        row += directionRow;
        col += directionCol;

        if (row === BigInt(0) && col === BigInt(0) || row === BigInt(0) && col === m - BigInt(1) ||
            row === n - BigInt(1) && col === BigInt(0) || row === n - BigInt(1) && col === m - BigInt(1)) {
            sum += value;
            break;
        }
    }
}

print(sum.toString());






// Another solution 


/* 

let input = ['3 4',];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let [n,m]= gets().split(' ').map(Number);
let mat = [];
for(let i=0; i<n; i++){
    mat.push([]);
    for(let j =0; j<m; j++){
        mat[i].push(BigInt(Math.pow(2, i+j)));
    }
}


let sum = BigInt(0);
let r = 0, c=0;
let down = true, right = true;
while(true){
    sum += mat[r][c];
    //print(mat[r][c],sum,r,c);
    if (((r==n-1)&&(c==0))||((r==n-1)&&(c==m-1))||((r==0)&&(c==m-1))){
        break;
    }
    if(r==n-1){
        down=false;
    }
    if(r==0){
        down=true;
    }
    r = down ? r+1 : r-1;
    if(c==m-1){
        right=false;
    }
    if(c==0){
        right=true;
    }
    c = right ? c+1 : c-1;  
};
print(sum);


//                         // Another solution                       //

const input = ['3 4'];

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let [n, m] = gets().split(' ').map(BigInt);

let sum = BigInt(0);

let row = BigInt(0);
let col = BigInt(0);
let directionRow = BigInt(1);
let directionCol = BigInt(1);

if (n === m) {
    for (let index = BigInt(0); index < n; index++) {
        sum += BigInt(2) ** (index * BigInt(2));
    }
} else if (n === BigInt(1) || m === BigInt(1)) {
    sum = BigInt(1);
} else {
    while (true) {
        let value = BigInt(2) ** (row + col);
        sum += value;

        if (row + directionRow < BigInt(0) || row + directionRow >= n) {
            directionRow *= BigInt(-1);
        }

        if (col + directionCol < BigInt(0) || col + directionCol >= m) {
            directionCol *= BigInt(-1);
        }

        row += directionRow;
        col += directionCol;

        if (row === BigInt(0) && col === BigInt(0) || row === BigInt(0) && col === m - BigInt(1) ||
            row === n - BigInt(1) && col === BigInt(0) || row === n - BigInt(1) && col === m - BigInt(1)) {
            sum += value;
            break;
        }
    }
}

print(sum.toString());


*/

