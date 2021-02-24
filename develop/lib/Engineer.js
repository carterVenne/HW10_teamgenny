const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github, email, id, name){
        super(email, id, name)
        this.github = github
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer