const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const htmlRenderer = require("./lib/htmlRenderer");
const fs = require("fs");


const managerQuestions = [{
    type: "input",
    name: "name",
    message: "What is your Manager's name?",
    validate: function(name) {
        return /[a-z]/gi.test(name);
    }
}, {
    type: "input",
    name: "id",
    message: "What is your Manager's ID?",
    validate: function(id) {
        return /[1-9]/gi.test(id);
    }
}, {
    type: "input",
    name: "email",
    message: "What is your Manager's Email Address?",
    validate: function(email) {
        return /[a-z1-9]/gi.test(email);
    }
}, {
    type: "input",
    name: "extraInformation",
    message: "What is your Manager's Office Number?",
    validate: function(num) {
        return /[1-9]/gi.test(num);
    }
}];

const engineerQuestions = [{
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
    validate: function(name) {
        return /[a-z]/gi.test(name);
    }
}, {
    type: "input",
    name: "id",
    message: "What is your Engineer's ID?",
    validate: function(id) {
        return /[1-9]/gi.test(id);
    }
}, {
    type: "input",
    name: "email",
    message: "What is your Engineer's Email Address?",
    validate: function(email) {
        return /[a-z1-9]/gi.test(email);
    }
}, {
    type: "input",
    name: "extraInformation",
    message: "What is your Engineer's GitHub username?",
    validate: function(username) {
        return /[a-z1-9]/gi.test(username);
    }
}];

const internQuestions = [{
    type: "input",
    name: "name",
    message: "What is your Intern's name?",
    validate: function(name) {
        return /[a-z]/gi.test(name);
    }
}, {
    type: "input",
    name: "id",
    message: "What is your Intern's ID?",
    validate: function(id) {
        return /[1-9]/gi.test(id);
    }
}, {
    type: "input",
    name: "email",
    message: "What is your Intern's Email Address?",
    validate: function(email) {
        return /[a-z1-9]/gi.test(email);
    }
}, {
    type: "input",
    name: "extraInformation",
    message: "What is your Intern's School?",
    validate: function(school) {
        return /[a-z]/gi.test(school);
    }
}];

const newTeamMember = {
    type: "list",
    name: "newTeamMember",
    message: "Which type of team member would you like to add?",
    choices: ["Manager", "Engineer", "Intern", "None"]
};

function writeToFile(inquirerData, role) {
    const html = htmlRenderer.generateHTML({
        ...inquirerData,
        role
    })
    fs.writeFile(`./templates/${role}.html`, html, function(err) {
        if (err) {
            throw err;
        }
    })
}

function createNewManager() {
    inquirer.prompt(managerQuestions)
        .then(response => {
            writeToFile(response, "manager")
            return new Manager(response.name, response.id, response.email, response.extraInformation);
        })
        .then(() => {
            addTeamMember()
        })
        .catch(err => {
            console.log(err);
        })
}

function createNewEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            writeToFile(response, "engineer")
            return new Engineer(response.name, response.id, response.email, response.extraInformation);
        })
        .then(() => {
            addTeamMember();
        })
        .catch(err => {
            console.log(err);
        })
}

function createNewIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            writeToFile(response, "intern")
            return new Intern(response.name, response.id, response.email, response.extraInformation);
        })
        .then(() => {
            //generateHTML()
            addTeamMember();
        })
        .catch(err => {
            console.log(err);
        })
}

function addTeamMember() {
    inquirer.prompt(newTeamMember)
        .then(response => {
            switch (response.newTeamMember) {
                case "Manager":
                    createNewManager();
                    break;
                case "Engineer":
                    createNewEngineer();
                    break;
                case "Intern":
                    createNewIntern();
                    break;
                case "None":
                    console.log("all done")
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        })
}

function init() {
    console.log("Please build your team");
    createNewManager();
}

init()