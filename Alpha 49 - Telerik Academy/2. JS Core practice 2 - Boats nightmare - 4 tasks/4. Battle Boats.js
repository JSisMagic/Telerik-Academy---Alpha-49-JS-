const input = ['2 2', '0 1', '1 1', '1 0', '1 1', 'Shoot 1 1', 'Shoot 0 1', 'Shoot 0 0', 'Shoot 0 0', 'Shoot 1 1', 'Shoot 1 0', 'END'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
 
const [rows, cols] = gets().split(' ').map(Number);
 
let igrach1 = [];
let igrach2 = [];
 
for (let i = 0; i < rows; i++) {
    igrach1.push(gets().split(' ').map(Number));
}
for (let i = 0; i < rows; i++) {
    igrach2.push(gets().split(' ').map(Number));
}
 
igrach2 = igrach2.map(row => row.reverse()).reverse();
 
const actions = [];
 
while (true) {
    const line = gets().trim();
    if (line === 'END') break;
    actions.push(line);
}
 
let korab1 = igrach1.flat().filter(el => el === 1).length;
let korab2 = igrach2.flat().filter(el => el === 1).length;
 
let redNaigrach1 = true;
 
for (let i = 0; i < actions.length; i++) {
    const [action, row, col] = actions[i].split(' ');
 
    if (redNaigrach1) {
        if (igrach2[row][col] === 1) {
            print('Booom');
            igrach2[row][col] = 2;
            korab2--;
        } else if (igrach2[row][col] === 0) {
            print('Missed');
            igrach2[row][col] = 2;
        } else {
            print('You already shot there!');
        }
    } else {
        if (igrach1[row][col] === 1) {
            print('Booom');
            igrach1[row][col] = 2;
            korab1--;
        } else if (igrach1[row][col] === 0) {
            print('Missed');
            igrach1[row][col] = 2;
        } else {
            print('You already shot there!');
        }
    }
 
    redNaigrach1 = !redNaigrach1;
}
 
print(`${korab1}:${korab2}`);