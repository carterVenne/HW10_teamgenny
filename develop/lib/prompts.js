const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'role',
        message: "What is this employee's role on this project?",
        choices: ['Engineer', 'Intern', 'Manager'],
        default: 'Hard worker'
    },
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?",
        default: 'Name'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?",
        default: '000'
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email?",
        default: 'johnsmith@yahoo.com'
    },
    {
        type: 'input', 
        name: 'officeNum', 
        message: "What is this manager's office number?",
        when: function (answers) {
            return answers.role === "Manager";
        },
    },
    {
        type: 'input', 
        name: 'github', 
        message: "What is this engineer's GitHub username?",
        when: function (answers) {
            return answers.role === "Engineer";
        },
    },
    {
        type: 'input', 
        name: 'school', 
        message: 'What school is this intern attending or most recently attended?',
        when: function (answers) {
            return answers.role === "Intern";
        },
    },
    {
        type: "confirm",
        name: "anotherOne",
        message: "Do you have another employee to add?",
        default: true
    },
]);

module.exports = prompts