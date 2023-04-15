const input = ['3']; 
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();
const matrix = [];


for (let i = 0; i < n; i++) {
  matrix.push(Array(n).fill(0));
}

let count = 1;


for (let j = 0; j < n; j++) {
  if (j % 2 === 0) { 
    for (let i = 0; i < n; i++) {
      matrix[i][j] = count;
      count++;
    }
  } else { 
    for (let i = n - 1; i >= 0; i--) {
      matrix[i][j] = count;
      count++;
    }
  }
}


for (let i = 0; i < n; i++) {
  print(matrix[i].join(" "));
}

// Another solution 

/*

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let mat = [];
let size = Number(gets());
for(let i=0; i<size; i++){
    mat.push([]);
    for(let j=0; j<size; j++){
        if(j%2){
            mat[i].push(-i+size*j+size)
        }
        else{
            mat[i].push(i+1+j*size);
        }
        
    }
}

let output;
for(let i=0; i<size; i++){
    output = ``
    for(let j=0; j<size; j++){
        output += mat[i][j] + ' ';
    }
    console.log(output+'\r');
}

*/
