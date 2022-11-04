const inquirer = require("inquirer");
const fs = require("fs");
const makeEmployeeCards = require("./src/generateHTML")[0];

const employeeInput = [];

const questions = [
    {
        type: "input", 
        name: "name", 
        message: "what is your name?",
        validate: function (input) {
            { 
                if (input) return true; 
                }        
        }
    },
    {
        type: "input", 
        name: "id", 
        message: "what is your employee id?",
        validate: function (input) {
            { 
                if (input) return true; 
                }            
        }

    },
    {
        type: "input", 
        name: "email", 
        message: "what is your email?",
        validate: function (input) {
            { 
                if (input) return true; 
                }          
        }
    },
    {
        type: "input", 
        name: "officeNumber", 
        message: "what is your office number?",
        validate: function (input) {
            { 
                if (input) return true; 
                }           
        }
    },
    {
        type: "list", 
        name: "typeEmployee", 
        message: "what type of employee would you like to add?",
        choices: ["Engineer","Intern","Exit"],
    },
]

async function init() {
    let questioning = true;

    while (questioning) {
        const answers = await inquirer.prompt (questions)

        if (answers.typeEmployee === "Exit") {
            questioning = false;
        }

        if (answers.typeEmployee === "Engineer") {
            questions.splice(3, 1, {
                type: "input", 
                name: "github", 
                message: "what is your Github username?",
                validate: function (input) {
                    { 
                        if (input) return true; 
                        }
                    
                }
            })
        }
        
        if (answers.typeEmployee === "Intern") {
            questions.splice(3, 1, {
                type: "input", 
                name: "school", 
                message: "what is the name of your school?",
                validate: function (input) {
                    { 
                        if (input) return true; 
                        }
                    
                }
            })
        }

        employeeInput.push(answers);
        
    }

    const htmlOutput = makeEmployeeCards(employeeInput)
    writeToFile("./dist/template.html", htmlOutput)
    
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        (err) ? console.log("error") : console.log("HTML File Generated")
    )
}
init();