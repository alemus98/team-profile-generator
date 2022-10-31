const inquirer = require('inquirer');
const createPage = require('./src/createPage');
const renderPage = require('./src/renderHTML');
const employeeJobs = require('./lib/roles');

// prompta user input and log prompt questions from ./libs
const getEmployeeDataAsync = async () => {
    const employeeList = [];

    while (true) {
        // prompts user for selection of role
        const response = await inquirer.prompt({
            type: 'list',
            name: 'role', 
            message: 'Please select role to add:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        });

        const employeeJob = response.role;
        if (employeeJob === 'Exit') break;

  
        const employeeConstructor = employeeJobs[employeeJob];
        const employeeInfo = await inquirer.prompt((new employeeConstructor).getPromptQuestions());

        console.log(`\nNew ${employeeJob} profile created for ${employeeInfo.name}.\n`);

        employeeList.push({
            role: employeeJob,
            ...employeeInfo
        });
    }

    return employeeList;
}

getEmployeeDataAsync()
    .then(createPage)
    .then(renderPage);