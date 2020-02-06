const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const htmlRenderer = require("./lib/htmlRenderer");
const fs = require("fs");
let team = [];


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

const createNewTeamMember = role => {
    switch (role) {
        case "Manager":
            inquirer.prompt(managerQuestions)
                .then(response => {
                    const manager = new Manager(response.name, response.id, response.email, response.extraInformation)
                    generateEmployeeHTML(manager)
                })
                .catch(err => {
                    throw err
                })
            break;
        case "Engineer":
            inquirer.prompt(engineerQuestions)
                .then(response => {
                    const engineer = new Engineer(response.name, response.id, response.email, response.extraInformation)
                    generateEmployeeHTML(engineer)
                })
                .catch(err => {
                    throw err
                })
            break;
        case "Intern":
            inquirer.prompt(internQuestions)
                .then(response => {
                    const intern = new Intern(response.name, response.id, response.email, response.extraInformation)
                    generateEmployeeHTML(intern)
                })
                .catch(err => {
                    throw err
                })
            break;
        case "None":
            createTeamPage();
            break;
    }
}

const addTeamMember = () => {
    inquirer.prompt(newTeamMember)
        .then(response => {
            createNewTeamMember(response.newTeamMember);
        })
        .catch(err => {
            console.log(err);
        })
}

const generateEmployeeHTML = employee => {
    const html = htmlRenderer.generateEmployeeHTML(employee)

    const htmlString = employee.getRole().toLowerCase()
    fs.writeFile(`./templates/${htmlString}.html`, html, function(err) {
        if (err) {
            throw err
        }
    })
    team.push(html)
    addTeamMember();
}

const createTeamPage = () => {
    const mainHTML = htmlRenderer.generatePage()
    const teamHTML = team.join("\n");
    fs.writeFile(`./output/team.html`, mainHTML + teamHTML + `\n</div>\n</div>\n</body>\n</html>`, function(err) {
        if (err) {
            throw err
        }
    })
}

const init = () => {
    console.log("Please build your team");
    createNewTeamMember("Manager");
}

init()