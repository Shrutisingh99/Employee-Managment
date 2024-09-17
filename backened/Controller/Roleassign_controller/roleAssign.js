const connection = require("../../Model/db_config")


const getApi = (req,res) =>{
const sqlQuery = "SELECT * FROM role_assign"
connection.query(sqlQuery,(error,result)=>{

    if(error){
        res.json(error)
        console.log(error)
    }else{
        res.json(result)
        console.log(result)
    }
}
)
}

const postApi = (req,res) =>{
    const sqlQuery = " INSERT into role_assign SET ?"
    const data = req.body;
    connection.query(sqlQuery,[data],(error,result)=>{
        if(error){
            res.send(err.sqlMessage)
        }else{
            res.send(result)
        }
    })
}

const editRole = (req,res) =>{
    const sqlQuery = "UPDATE role_assign SET ? WHERE role_id=?";
  
    const role_id = req.query.role_id;
    const data=req.body
    connection.query(sqlQuery,[data,role_id], (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else {
            res.send(result)
        } 
    })
}


const delRole = (req,res) =>{
    const sqlQuery = "DELETE FROM role_assign WHERE role_id=?"
    const role_id = req.params.role_id;
    connection.query(sqlQuery,[role_id],(err,result)=>{
        if(err){
            res.send(err,sqlMessage)
        }else{
            res.send(result)
        }
    })
}




module.exports = {getApi,postApi,delRole,editRole}
