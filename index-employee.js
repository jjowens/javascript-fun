const fs = require('fs');
const path = require('path');
const employeeMod = require("./models/employee");
const writerLib = require("./lib/writer");

function Department() {
    return this.department = "IT Services";
}

function Role(val) {
    return this.role = val;
}

let employeeObj = new employeeMod.employee("John", "Smith");
Department.call(employeeObj);
Role.call(employeeObj, "Web Developer");

let outputPath = "./output/employee.json";
let jsonStr = JSON.stringify(employeeObj, null, 1);

writerLib.writer().writeToFile(outputPath, jsonStr);

