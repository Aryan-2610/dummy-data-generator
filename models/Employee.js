//getting mongoose to use schema function
console.log("getting mongoose to use schema function")
const mongoose = require('mongoose'); 


//setting up schema called employeeSchema
console.log("making employeeSchema");
const employeeSchema=new mongoose.Schema({
    name:String,
    salar:Number,
    language:String,
    city:String,
    isManager:Boolean
})

//making employee variable using module.schema and strucutre as employeeschema
console.log("making Employee using employeeSchema")
const Employee=mongoose.model('Employee',employeeSchema);

//export the module
console.log("exporting module");
module.exports=Employee