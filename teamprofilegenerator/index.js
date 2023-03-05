const inquirer = require("inquirer");
const Manager = require("./manager");
const Engineer = require("./engieneer");
const Intern = require("./intern");
const fs = require("fs");
const generatePage = require("./page-template");

const teamResponses = [];

const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your team manager's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your team manager's employee ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your team manager's email:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your team manager's office number:",
        validate: (numberInput) => {
          if (numberInput) {
            return true;
          } else {
            console.log("Please enter an office number!");
            return false;
          }
        },
      },
    ])
    .then((managerAnswers) => {
      const { name, id, email, officeNumber } = managerAnswers;
      const manager = new Manager(name, id, email, officeNumber);

      teamResponses.push(manager);
      console.log(manager);
    });
};

const additionalEmployees = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Would you like to add:",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter your employee's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your employee's ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your employee's email:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your employee's Github username:",
        when: (input) => input.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a Github username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter your employee's school name:",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school name!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAdditional",
        message: "Do you want to add another employee?",
        default: false,
      },
    ])
    .then((additionalData) => {
      const { name, id, email, github, school, confirmAdditional, role } =
        additionalData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamResponses.push(employee);

      if (confirmAdditional) {
        return additionalEmployees(teamResponses);
      } else {
        return teamResponses;
      }
    });
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

questions()
.then(additionalEmployees)
.then(teamResponses => {
  return generatePage(teamResponses);
})
.then(newHTML => {
  return writeFile(newHTML);
})
.catch(err => {
  console.log(err)
})