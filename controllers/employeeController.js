const Employee = require('../models/employee')


// get all employees
const getEmployees = async (req,res) => {
    try {
        const employees = await Employee.find({})
        res.status(200).send(employees)
    } catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

// get a single employee
const getEmployee = async (req,res) => {
    try {
        const {id} = req.params
        const employee = await Employee.findById(id)
        //if employee not found in db
        if(!employee) {
            return res.status(404).send({message: "Employee not found"})
        }
        res.status(200).send(employee)
    } catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

const createEmployee = async (req,res) => {
    try {
        const newEmployeeData = req.body
        const employee = await Employee.create(newEmployeeData)
        res.status(200).send(employee)
    }
    catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

const updateEmployee = async (req,res) => {
    try {
        const {id} = req.params
        const updateData = req.body
        const employee = await Employee.findByIdAndUpdate(id, updateData, {new: true})
        //if employee not found in db
        if(!employee) {
            return res.status(404).send({message: "Employee not found"})
        }
        res.status(200).send(employee)
    } catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

const deleteEmployee = async (req,res) => {
    try {
        const {id} = req.params
        const employee = await Employee.findByIdAndDelete(id)
        //if employee not found in db
        if(!employee) {
            return res.status(404).send({message: "Employee not found"})
        }
        res.status(200).send(employee)
    } catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
