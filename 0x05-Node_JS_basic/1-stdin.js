let userName = '';
const chunks = [];

process.stdin.on('print_name', () => {
  let i = 0;
  userName = chunks.join('');
  console.log(`Your name is: ${userName}\n`);
  for (; i < chunks.length; i += 1) {
    chunks.pop();
  }
  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on('close', () => {
  console.log('This important software is now closing\n');
});

console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  let chunk;
  do {
    chunk = process.stdin.read();
    let i = 0;
    let canPrintName = false;
    if (chunk) {
      for (const code of chunk) {
        if (code === '\n'.charCodeAt(0)) {
          canPrintName = true;
          break;
        }
        i += 1;
      }
      chunks.push(chunk.slice(0, i).toString());
      if (canPrintName) {
        process.stdin.emit('print_name');
      }
    }
  } while (chunk !== null);
});
