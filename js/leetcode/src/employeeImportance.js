const GetImportance = function (employees, id) {
  const employeeDict = makeEmployeeDict(employees);

  let totalImportance = 0;
  const root = employeeDict[id];
  const queue = [root];

  while (queue.length > 0) {
    const qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();
      totalImportance += node.importance;

      if (node.subordinates) {
        node.subordinates.forEach((subId) => {
          queue.push(employeeDict[subId]);
        });
      }
    }
  }

  return totalImportance;
};

function makeEmployeeDict(employees) {
  return employees.reduce((acc, e) => {
    acc[e.id] = e;
    return acc;
  }, {});
}

module.exports = { GetImportance };
