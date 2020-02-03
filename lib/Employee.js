const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return inquirer
            .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",
                validate: function(name) {
                    return /[a-z]/gi.test(name);
                }
            }])
            .then(res => {
                this.name = res.name;
                this.getId();
            });
    }

    getId() {
        return inquirer
            .prompt([{
                type: "input",
                name: "id",
                message: "What is your ID?",
                validate: function(id) {
                    return /[1-9]/gi.test(id);
                }
            }])
            .then(res => {
                this.id = res.id;
                this.getEmail(); 
            });
    }

    getEmail() {
        return inquirer
            .prompt([{
                type: "input",
                name: "email",
                message: "What is your Email Address?",
                // validate: function(email) {
                    // TODO
                    // return /[1-9]/gi.test(email);
                // }
            }])
            .then(res => {
                this.email = res.email;
                this.getRole()
            })
    }

    getRole() {
        return inquirer
            .prompt([{
                type: "input",
                name: "role",
                message: "What is your title?",
                validate: function(title) {
                    return /[a-z]/gi.test(title);
                }
            }])
            .then(res => {
                return this.Employee;
            });
    }

}

module.exports = Employee;
