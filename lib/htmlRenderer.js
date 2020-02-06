const generateEmployeeHTML = function(employee) {
    let role = employee.getRole();
    switch (role) {
        case "Manager":
            return `<div class="card border-light mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${employee.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.id}</li>
                <li class="list-group-item">${employee.email}</li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
            </ul>
        </div>`

        case "Engineer":
            return `<div class="card border-light mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${employee.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.id}</li>
                <li class="list-group-item">${employee.email}</li>
                <li class="list-group-item">Github Username: ${employee.github}</li>
            </ul>
        </div>`
        case "Intern":
            return `<div class="card border-light mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.id}</li>
                    <li class="list-group-item">${employee.email}</li>
                    <li class="list-group-item">Intern School: ${employee.school}</li>
                </ul>
            </div>`
    }
}

function generatePage() {
    return `    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team</title>
        </head>
        <body>`
}


module.exports = {
    generatePage: generatePage,
    generateEmployeeHTML: generateEmployeeHTML
};