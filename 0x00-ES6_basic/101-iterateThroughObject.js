export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
