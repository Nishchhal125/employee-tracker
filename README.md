# employee-tracker

## Description

This Node.js application provides a RESTful API for managing Employee records. It uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library. The API supports basic CRUD (Create, Read, Update, Delete) operations for Employee records.


## Installation

1. Clone the repository:

```
git clone https://github.com/Nishchhal125/employee-tracker.git
cd employee-tracker
```

2. Install dependencies:

 ```
   npm install
 ```

3. Start the application:
   
 ```
   npm run start
 ```

## Usage

* Make API requests to manage Employee records.
* Example API requests can be found in the Endpoints section.


## Endpoints

### Get All Employees
* Endpoint: GET /api/employees
* Description: Get a list of all Employee records.
* Example: curl http://localhost:3000/api/employees

### Get Employee by ID
* Endpoint: GET /api/employees/:id
* Description: Get an Employee record by ID.
* Example: curl --location 'http://localhost:3000/api/employees/6517f323120e006c0f19c2d8'

### Create Employee
* Endpoint: POST /api/employees
* Description: Create a new Employee record.
* Example: curl --location 'http://localhost:3000/api/employees' --header 'Content-Type: application/json' --data-raw '{
    "email": "sam123@gmail.com",
    "name": "Sam",
    "age": 25,
    "gender": "Male",
    "phone": "8532819927",
    "address": "New Delhi, India",
    "department": "Tech",
    "role": "Engineering Manager"
}'
### Update Employee by ID
* Endpoint: PUT /api/employees/:id
* Description: Update an Employee record by ID.
* Example: curl --location --request PUT 'http://localhost:3000/api/employees/6517f323120e006c0f19c2d8' --header 'Content-Type: application/json' --data-raw '{
    "name": "Sam Smith",
    "age": 25,
    "gender": "Male",
    "email": "sam123@gmail.com",
    "phone": "8532819927",
    "address": "New Delhi, India",
    "department": "Tech",
    "role": "Product Manager"
}'

### Delete Employee by ID
* Endpoint: DELETE /api/employees/:id
* Description: Delete an Employee record by ID.
* Example: curl --location --request DELETE 'http://localhost:3000/api/employees/6517f323120e006c0f19c2d8'


## Models
### Employee
Fields:
* name (String): The name of the employee. (required field)
* role (String): The employee's role. (required field)
* email (String): The employee's email. (unique and required field)
* department (String): The employee's department.
* age (Number): The employee's age.
* gender (String): The employee's gender.
* phone (String): The employee's phone number.


