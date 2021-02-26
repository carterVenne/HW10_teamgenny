const prompt = [
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
        default: 'My Name is JEFF'
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
        when: function (response) {
            return response.role === "Manager";
        },
        type: 'input',
        name: 'officeNumber',
        message: "What is this manager's office number?",
        default: '000',
    },
    {
        when: function (response) {
            return response.role === "Engineer";
        },
        type: 'input',
        name: 'github',
        message: "What is this engineer's GitHub username?",
        default: 'supercoder'
    },
    {
        when: function (response) {
            return response.role === "Intern";
        },
        type: 'input',
        name: 'school',
        message: 'What school is this intern attending or most recently attended?',
        default: 'The School of Hard Knocks',
    },
    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Do you have another employee to add?',
        default: true
    },
];

module.exports = prompt