const Employee = require('./employee');

class Manager extends Employee {

    constructor(officeNumber, ...args) {
        super(...args);
        this.officeNumber = officeNumber;
        this.role = 'Manager'

        this.promptQuestions.push({
            name: 'officeNumber',
            message: 'Enter office number:',
           
        });
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
}

module.exports = Manager