const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required : [true, "An employee must have an email."],
            unique : true  // email should be unique
        },
        age:{
            type: Number
        },
        gender:{
            type: String
        },
        phone:{
            type: String
        },
        address:{
            type: String
        },
        department:{
            type: String
        },
        role:{
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee