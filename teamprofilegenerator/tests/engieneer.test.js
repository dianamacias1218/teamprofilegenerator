
const Engineer = require('../lib/engieneer');

test ('creates a engineer object', () => {
  const engineer = new Engineer('Diana', 'abcd', 'dianamacias1218@icoud.com', 'dianamacias1218');

  expect(engineer.github).toEqual(expect.any(String));
})

test ("gets engineer's github account", () => {
  const engineer = new Engineer('Diana', 'abcd', 'dianamacias1218@icoud.com', 'dianamacias1218');

  expect(engineer.getGithub()).toEqual(expect.any(String));
})

test ("gets engineer's role", () => {
  const engineer = new Engineer('Diana', 'abcd', 'dianamacias1218@icoud.com', 'dianamacias1218');
  expect(engineer.getRole()).toBe('Engineer');
})