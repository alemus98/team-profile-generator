const Employee = require('./employee');


class Engineer extends Employee {

    constructor(github, ...args) {
        super(...args);
        this.github = github;
        this.role = 'Engineer';

        this.promptQuestions.push({
            name: 'github',
            message: 'Enter GitHub username:',

        })
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer