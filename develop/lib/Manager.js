 const Employee = require("./Employee")
//subclass defining "manager"
class Manager extends Employee {
    constructor(email, id, name, officeNumber){
        super(email, id, name);
        this.officeNumber = officeNumber;
    }
    getOfficeNum() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;