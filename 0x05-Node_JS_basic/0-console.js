/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const displayMessage = (msg) => {
  process.stdout.write(`${msg}\n`);
};

module.exports = displayMessage;
