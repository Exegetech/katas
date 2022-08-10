const { GetImportance } = require('../src/employeeImportance');

class Employee {
  constructor(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
  }
}

test('GetImportance', () => {
  const e1 = new Employee(1, 5);
  const e2 = new Employee(2, 3);
  const e3 = new Employee(3, 3);

  e1.subordinates = [2, 3];

  const employees = [e1, e2, e3];
  const id = 1;
  const output = 11;

  expect(GetImportance(employees, id)).toEqual(output);
});

test('GetImportance', () => {
  const e1 = new Employee(1, 2);
  const e5 = new Employee(5, -3);

  e1.subordinates = [5];

  const employees = [e1, e5];
  const id = 5;
  const output = -3;

  expect(GetImportance(employees, id)).toEqual(output);
});
