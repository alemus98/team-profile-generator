
class Employee {

    promptQuestions = [
        {
            name: 'name',
            message: 'Enter employee name:',

        },
        {
            name: 'id',
            message: 'Enter employee ID:',
            validate: validation.isNumber        },
        {
            name: 'email',
            message: 'Enter employee email:',

        }
    ]

    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    
    getPromptQuestions() {
        return this.promptQuestions;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;