const Employee = require('../lib/employee');

test ('creates an employee object', () => {
  const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  //const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  console.log(employee1);
  

  expect(employee.getName()).toEqual(('Diana'));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
 
});

test ("gets employee's name", () => {
  const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  expect(employee.getName()).toEqual(expect.any(String));
});

test ("gets employee's id", () => {
  const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  expect(employee.getId()).toEqual(expect.any(String));
});

test ("get employee's email", () => {
  const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  expect(employee.getEmail()).toEqual(expect.any(String));
})

test ("get employee's role", () => {
  const employee = new Employee('Diana', 'abcd', 'dianamacias1218@icloud.com');
  expect(employee.getRole()).toBe('Employee');
})


