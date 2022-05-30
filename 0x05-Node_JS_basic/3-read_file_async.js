const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object
          .values(studentGroups)
          .reduce((pre, cur) => (pre || []).length + cur.length);
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          console.log(
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          );
        }
        resolve(true);
      }
    });
  }
});

module.exports = countStudents;
