const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function makeEmployeeCards(employeeArray) {
    const answerArray = employeeArray;

    const htmlOutputArray = []

    const testManager = (answer) => (answer.officeNumber) ? true : false;

    const testEngineer = (answer) => (answer.github) ? true : false;

    const testIntern = (answer) => (answer.school) ? true : false; 

    const managerArray = answerArray.filter(testManager).map(item => new Manager(item));

    const engineerArray = answerArray.filter(testEngineer).map(item => new Engineer(item));

    const internArray = answerArray.filter(testIntern).map(item => new Intern(item));

    managerArray.forEach(function (answers){
        let managerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-user"></i> Manager</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">Office number : ${answers.name.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </article>`
        
        htmlOutputArray.push(managerCard);
    })

    engineerArray.forEach(function (answers){
        let engineerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-gears"></i> Engineer</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">GitHub : <a href="https://github.com/${answers.name.github}" target="_blank" rel="noopener noreferrer">${answers.name.github}</a></li>
                        </ul>
                    </div>
                </div>
            </article> `
        
        htmlOutputArray.push(engineerCard);
    })

    internArray.forEach(function (answers){
        let internCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-user-graduate"></i> Intern</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">School : ${answers.name.school}</li>
                        </ul>
                    </div>
                </div>
            </article>`

        htmlOutputArray.push(internCard);
    })

    return generateHTML(htmlOutputArray.join())

}

function generateHTML(htmloutput){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <script
            src="https://kit.fontawesome.com/2af300434d.js"
            crossorigin="anonymous">
        </script>
        
        <link rel="stylesheet" href="style.css" />
        <title>Document</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1 class="display-4 d-flex justify-content-center">My Team Profile</h1>
        </header>
    
        <main class="mx-3">
            <section class="row row-cols-1 row-cols-md-3">
                
            ${htmloutput}
                
            </section>
    
        </main>
    
        <!-- Links -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`
}

module.exports = [makeEmployeeCards, generateHTML];