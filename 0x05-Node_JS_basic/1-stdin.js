process.stdin.on('print_name', (userName) => {
  process.stdout.write(`Your name is: ${userName}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdin.emit('print_name', chunk.toString().trim());
  }
});
