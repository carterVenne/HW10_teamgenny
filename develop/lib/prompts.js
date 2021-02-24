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
        type: "confirm",
        name: "anotherOne",
        message: "Do you have another employee to add?",
        default: true
    },
]).then((data) => {

})