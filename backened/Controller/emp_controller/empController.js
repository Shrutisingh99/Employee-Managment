const connection = require("../../Model/db_config");

const getemployee= (req,res)=>{

    const sqlQuery = 'SELECT * FROM employee'

    connection.query(sqlQuery,(error,result)=>{
        if(error){
             res.json(error)
        }
        else{
            res.json(result)
        }
    })

}


const getemployeeId= (req,res)=>{
     
    const data = req.body; 
    const sqlQuery = 'SELECT * FROM employee WHERE eid = ?'

    connection.query(sqlQuery,[data],(error,result)=>{
        if(error){
             res.json(error)
        }
        else{
            res.json(result)
        }
    })

}


const AddEmployee = (req, res) => {
    const sqlQuery = "INSERT INTO employee (eid, ename, email, hiredate, salary) VALUES (?, ?, ?, ?, ?)";
    const { eid, ename, email, salary } = req.body;
    const hiredate = new Date().toDateString();
    const data = [eid, ename, email, hiredate, salary];
    connection.query(sqlQuery, data, (err, result) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).send(err.sqlMessage || 'An error occurred');
            }
        } else {
            if (!res.headersSent) {
                return res.status(200).send(result);
            }
        }
    });
};

const delEmployee = (req, res) => {
    const eid = req.params.eid; 
    const sqlQuery = "DELETE FROM employee WHERE eid = ?";
    
    connection.query(sqlQuery, [eid], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.sqlMessage }); 
        } else {
            if (result.affectedRows > 0) {
                res.json({ message: `Employee with ID ${eid} deleted successfully.` }); 
            } else {
                res.status(404).json({ error: `Employee with ID ${eid} not found.` }); 
            }
        }
    });
};

const editEmployee = (req, res) => {
    const sqlQuery = "UPDATE employee SET ename = ?, email = ?, salary = ? WHERE eid = ?";
    const eid = req.params.eid;
    const { ename, email, salary } = req.body;
    connection.query(sqlQuery, [ename, email, salary, eid], (err, result) => {
        if (err) {
            res.send(err.sqlMessage);
        } else {
            res.send(result);
        }
    });
}


const getdepartment = (req,res) =>{
    const sqlQuery = 'SELECT * FROM department'

    connection.query(sqlQuery,(error,result)=>{
        if(error){
             res.json(error)
        }
        else{
            res.json(result)
        }
    })

}

module.exports={getemployee,getemployeeId,AddEmployee ,delEmployee,editEmployee,getdepartment}