// const fs = require('fs');
// const path = require('path');

const roleTitles = {
    "Engineer": {value: 'github', render: "Github"},
    "Intern": {value: 'school', render: "School"},
    "Manager": {value: 'officeNumber', render: "Office #"}
}

const getGeneratedWorkerInfo = (role, data) => {
    console.log(role, data);
    if (role === 'github') {
        return `<a href="https://github.com/${data}">${data}</a>`;
    } else {
        return data;
    }
}

const getTemplate = data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        
        <header class="p-5">
            <h1>My Team</h1>
        </header>
        <div class="d-flex justify-content-center flex-row flex-wrap p-3">
            ${data}
        </div>
        
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

const generatePage = data => {
    let employeeCards = '';

    data.forEach(worker => {
        const employeeRoleInfo = roleTitles[worker.role];
        const employeeRoleData = worker[employeeRoleInfo.value];

        const employeeCard = `
        <div class="card flex-column flex-start m-3">
            <div class="card-header px-2 pt-3 pb-2">
                <h2>${worker.name}</h2>
                <p>${worker.role}</p>
            </div>
            <div class="shadow card-content mt-3 p-2">
                <p><span>ID: </span>${worker.id}</p>
                <p><span>Email: </span><a href="mailto:${worker.email}">${worker.email}</a></p>
                <p><span>${employeeRoleInfo.render}: </span>${getGeneratedWorkerInfo(employeeRoleInfo.value, employeeRoleData)}</p>
            </div>
        </div>
        `

        employeeCards += employeeCard;
    });

    return getTemplate(employeeCards);
}

// const fs = require('fs');
// const path = require('path');

const renderHTML = content => {
    fs.writeFile(path.join(__dirname, '../dist/test.html'), content, err => {
        if (err) throw err;
    });
}

module.exports = renderHTML;

module.exports = generatePage