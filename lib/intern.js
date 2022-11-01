const Employee = require('./Employee');


class Intern extends Employee {

    constructor(school, ...args) {
        super(...args);
        this.school = school;
        this.role = 'Intern';

        this.promptQuestions.push({
            name: 'school',
            message: 'Enter school name:',
        })
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern