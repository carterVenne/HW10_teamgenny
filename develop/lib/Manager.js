 const Employee = require("./Employee")
//subclass defining "manager"
class Manager extends Employee {
    constructor(officeNum, email, id, name){
        super(email, id, name);
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;