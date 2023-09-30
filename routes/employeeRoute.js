const express = require('express')
const Employee = require('../models/employee')
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employeeController')

const router = express.Router();

// get all Employees details
router.get('/', getEmployees);

// get Employee by id
router.get('/:id', getEmployee);

// create a new Employee
router.post('/', createEmployee);

// update an Employee's details
router.put('/:id', updateEmployee);

// delete an Employee
router.delete('/:id', deleteEmployee);

module.exports = router;