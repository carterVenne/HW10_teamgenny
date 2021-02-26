const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const prompt = require("./lib/prompts");
const employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

function newTeamMember() {
    return inquirer.prompt(prompt).then((respObject) => {
        let info = respObject;
        let newEmployee = "";
        if (info.role === "Manager") {
        newEmployee = new Manager(
        info.name,
        info.id,
        info.email,
        info.officeNum
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
    if (respObject.anotherOne) {
        newTeamMember();
    } 
    else {
        console.log(employees);
        render();
    }
});
}
newTeamMember();