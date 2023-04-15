import readline from 'readline';

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const read = text => new Promise((r, R) => {
  io.question(text, input => {

    r(input);
    io.close();
  });
});
