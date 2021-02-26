const Manager = require("./develop/lib/Manager");
const Engineer = require("./develop/lib/Engineer");
const Intern = require("./develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const prompt = require("./develop/lib/prompts");
const employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./develop/lib/htmlRenderer");

function newTeam() {
    return inquirer.prompt(prompt).then((response) => {
        let info = response;
        let newEmployee = "";
        if (info.role === "Manager") {
        newEmployee = new Manager(
        info.name,
        info.id,
        info.email,
        info.officeNumber
        );
    } 
    else if (info.role === "Engineer") {
        newEmployee = new Engineer(
        info.name,
        info.id,
        info.email,
        info.github
        );
    } 
    else if (info.role === "Intern") {
        newEmployee = new Intern(
        info.name,
        info.id,
        info.email,
        info.school
        );
    }
    employees.push(newEmployee);
    if (info.anotherOne) {
        newTeam();
    } 
    else {
        console.log(employees);
        render();
    }
});
}
newTeam();