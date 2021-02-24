const Employee = require("./Employee")

class Intern extends Employee {
    constructor(id, role, school){
        super(email, id, name)
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getRole() {
    return "Intern";
    }
}
module.exports = Intern