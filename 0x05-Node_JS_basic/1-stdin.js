process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.on('print_name', (userName) => {
  process.stdout.write(`Your name is: ${userName}\n`);
});

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.emit('print_name', chunk.toString().trim());
  }
});

process.stdin.on('end', () => {
  process.stderr.write('This important software is now closing\n');
});
