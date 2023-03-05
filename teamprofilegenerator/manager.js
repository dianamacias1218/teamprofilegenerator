const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name,email,id);
    this.officeNumber = officeNumber
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager;