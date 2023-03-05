class Employee {
    costructor (name,email,id){
        this.name= name ;
        this.email = email;
        this.id =id;
    }

getName() {
    return ` Employee's name is ${this.name}`;
    }
    getEmail() {
        return ` Employee's email is ${this.email}`;
      }
    
    getId() {
      return `  Employee's id is ${this.id}`;
    }
    
    getRole() {
      return 'Employee';
    }
    }
    module.exports = Employee;