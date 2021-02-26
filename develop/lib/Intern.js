const Employee = require("./Employee")
//subclass defining "intern"
class Intern extends Employee {
    constructor(school, email, id, name){
        super(email, id, name);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
    return "Intern";
    }
}
module.exports = Intern;