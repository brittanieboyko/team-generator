const generateEmployeeHTML = (employee) => {
    const role = employee.getRole();
    switch (role) {
        case "Manager":
            return `
            <div class="col mb-4">
                <div class="card border-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>`

        case "Engineer":
            return `
            <div class="col mb-4">
                <div class="card border-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">GitHub Username: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                </div>
            </div>`
        case "Intern":
            return `
            <div class="col mb-4">
                <div class="card border-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">Intern School: ${employee.school}</li>
                    </ul>
                </div>
            </div>`
    }
}

const generatePage = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                line-height: 1;
                background-color: #F9F9FF;
                color: #343148FF;
                
            }
            .jumbotron {
                text-align: center;
                background-color: transparent;
                color: #232122;
                border-radius: 0;
                border-bottom: 10px solid #343148FF;
            }
          </style>
        <title>Team</title>
    </head>
    <body>
        <div class="container">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4 text-center">My Team</h1>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3">`
}


module.exports = {
    generatePage: generatePage,
    generateEmployeeHTML: generateEmployeeHTML
};