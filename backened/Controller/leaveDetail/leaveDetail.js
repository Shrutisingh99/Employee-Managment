const connection = require("../../Model/db_config");

const getleavedetail= (req,res)=>{

    const sqlQuery = 'SELECT * FROM leavedetail'

    connection.query(sqlQuery,(error,result)=>{
        if(error){
             res.json(error)
        }
        else{
            res.json(result)
        }
    })

}

module.exports={getleavedetail};