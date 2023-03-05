const Manager = require('../lib/manager');

test ('creates a manager object', () => {
  const manager = new Manager('Diana', 'abcd', 'dianamacias1218@icloud.com', 1234);

  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test ("gets manager's role", () => {
  const manager = new Manager('Diana', 'abcd', 'dianamacias1218@icloud.com', 1234);
  expect(manager.getRole()).toBe('Manager');
})