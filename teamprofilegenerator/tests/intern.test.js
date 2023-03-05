
const Intern = require('../lib/intern');

test ("creates an intern object", () => {
  const intern = new Intern('Diana', 'abcd', 'dianamacias1218@icloud.com', 'University');

  expect(intern.school).toEqual(expect.any(String));
});

test ('gets the interns school', () => {
  const intern = new Intern('Diana', 'abcd', 'dianamacias1218@icloud.com', 'University');

  expect(intern.getSchool()).toEqual(expect.any(String));
})

test ("gets intern's role", () => {
  const intern = new Intern('Diana', 'abcd', 'dianamacias1218@icloud.com', 'University');
  expect(intern.getRole()).toBe('Intern')
});