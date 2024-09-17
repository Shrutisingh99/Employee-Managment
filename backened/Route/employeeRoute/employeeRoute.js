const express = require ('express')

const employeeRouter = express.Router()

const {getemployee,getemployeeId,AddEmployee,delEmployee,editEmployee, getdepartment} = require('../../Controller/emp_controller/empController')

const{employeeSignup}= require("../../Controller/eidValidation/eidValidation")
/** 
 * @swagger
 * components:
 *        schemas:
 *              employee:
 *                  type: object
 *                  properties:
 *                        e_id:
 *                             type: number
 *                        e_name:
 *                             type: string
 *                        d_id:
 *                             type: number
 *                        salary:
 *                             type: number
 *                        email:
 *                             type: string
 * 
 */


/**
 * @swagger
 * /employee:
 *       get:
 *             summary: Retrive all employee records
 *             description: node js api
 *             responses:
 *                 200:
 *                    description: successful retrival of employee records
 *                    content:
 *                        application/json:
 *                                 schema:
 *                                     type: array
 *                                     items:
 *                                         $ref : "#components/schemas/employee" 
 */

/**
 * @swagger
 * /savedate:
 *       post:
 *             summary: node js api
 *             description: node js api
 *             requestBody:
 *                    required: true
 *                    content:
 *                        application/json:
 *                             schema:
 *                                  $ref: '#components/schemas/employee'
 *             responses:
 *                   200:
 *                         description: added successfully                    
 */

/**
 * @swagger
 * /editemployee/{e_id}:
 *         patch:
 *              summary: node js api
 *              description: node js api
 *              parameters:
 *                   - in: path
 *                     name: e_id
 *                     required: true
 *                     description: number e_id required
 *                     schema:
 *                            type: number
 *              requestBody:
 *                   required: true
 *                   content:
 *                     application/json:
 *                       schema:
 *                          $ref:  '#components/schemas/employee'
 *              responses:
 *                   200:
 *                       description: added successfully
 *                       content:
 *                         application/json:
 *                                   schema:
 *                                       type: array
 *                                       items:
 *                                           $ref: '#components/schemas/employee'
 * 
 *                       
 */


employeeRouter.get('/employee',getemployee)
employeeRouter.get('/employee',getemployeeId)
employeeRouter.post("/savedate",employeeSignup,AddEmployee)
employeeRouter.post('/employee',getemployee)
employeeRouter.patch('/editemployee/:eid',editEmployee)
employeeRouter.delete('/deleteemployee/:eid',delEmployee)
employeeRouter.get('/department',getdepartment)

module.exports = {employeeRouter}