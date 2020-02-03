const inquirer = require("inquirer");

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
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
            .then(name => {
                this.name = name;
                this.getId();
            });
    }

    getId() {
        return inquirer
            .prompt([{
                type: "input",
                name: "ID",
                message: "What is your ID?",
                validate: function(id) {
                    return /[1-9]/gi.test(id);
                }
            }])
            .then(id => {
                this.id = id;
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
            .then(email => {
                console.log(email)
            });
    }

    getRole() {}

}

module.exports = Employee;