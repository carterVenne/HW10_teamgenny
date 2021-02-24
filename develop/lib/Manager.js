 const Employee = require("./Employee")

class Manager extends Employee {
    constructor(officeNum, email, id, name){
        super(email, id, name)
        this.officeNum = officeNum
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager