const Employee = require('./employee');
const validation = require('../src/validate');

class Intern extends Employee {

    constructor(school, ...args) {
        super(...args);
        this.school = school;
        this.role = 'Intern';

        this.promptQuestions.push({
            name: 'school',
            message: 'Enter school name:',
            validate: validation.isNeeded
        })
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern