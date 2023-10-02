import express from 'express';
import { createEmployeeDetails, deleteEmployeeDetail, getEmployeDetails, getEmployeDetailsById, updateEmployeedetail } from '../Controller/employee.controller.js';


const router = express.Router();


router.get('/data', getEmployeDetails);
router.get('/:id', getEmployeDetailsById);
router.post('/add', createEmployeeDetails);
router.put('/edit/:id', updateEmployeedetail);
router.delete('/delete/:id', deleteEmployeeDetail);




export default router;