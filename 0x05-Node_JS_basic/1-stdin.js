process.stdin.on('print_name', (userName) => {
  console.log(`Your name is: ${userName}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdin.emit('print_name', chunk.toString().trim());
  }
});
