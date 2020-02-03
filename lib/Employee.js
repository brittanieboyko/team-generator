const inquirer = require("inquirer");

class Employee {
    constructor(name, id, title) {
      this.name = name;
      this.id = id;
      this.title = title;
    }
  
    getName() {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your name?",
              validate: function(name) {
                return /[a-z]/gi.test(name);
              }
            }
          ])
          .then(name => {
            return name
          });
      }

    getId() {
    }

    getEmail() {
    }

    getRole() {
    }

  }
  
  module.exports = Employee;