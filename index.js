const Employee = require("./lib/Employee");
const inquirer = require("inquirer");

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
    name: "officeNumber",
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
    name: "engineerGitHub",
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
    name: "internSchool",
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

function init() {
    console.log("Please build your team");
    createManager()
}

function createManager() {
    inquirer.prompt(managerQuestions)
        .then(response => {
            console.log(response);
            createNewTeamMember();
        })
}
function createNewTeamMember() {
    inquirer.prompt(newTeamMember)
    .then(response => {
        switch (response.newTeamMember) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "None":
                console.log("all done")
                break;
        }
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            console.log(response);
            createNewTeamMember();
        })
}

function createIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            console.log(response);
            createNewTeamMember();
        })
}

init()