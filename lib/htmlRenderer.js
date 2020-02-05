const generateHTML = function(data) {

    if (data.role === "manager") {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Manager</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
            <div class="card border-light mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.id}</li>
                    <li class="list-group-item">${data.email}</li>
                    <li class="list-group-item">Office Number: ${data.extraInformation}</li>
                </ul>
            </div>
        </body>
    </html>`
    } else if (data.role === "engineer") {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Engineer</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
            <div class="card border-light mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.id}</li>
                    <li class="list-group-item">${data.email}</li>
                    <li class="list-group-item">Github Username: ${data.extraInformation}</li>
                </ul>
            </div>
        </body>
    </html>`
    } else if (data.role === "intern") {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Intern</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
            <div class="card border-light mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.id}</li>
                    <li class="list-group-item">${data.email}</li>
                    <li class="list-group-item">School: ${data.extraInformation}</li>
                </ul>
            </div>
        </body>
    </html>`
    }
}

module.exports = {
    generateHTML: generateHTML
};