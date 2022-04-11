/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  set.forEach((value) => {
    if (value.length !== 0 && startString.length === 0) {
      return;
    }
    if (value.startsWith(startString)) {
      parts.push(value.substring(startString.length));
    }
  });
  return parts.join('-');
}
