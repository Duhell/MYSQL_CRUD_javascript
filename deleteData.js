const connection = require('./databaseConnection')
let id = "", // Incremented ID or Unique ID
    deleteDataQuery = `DELETE FROM Table_Name WHERE id = '${id}'`

connection.query(deleteDataQuery,(error,results)=>{
    if(error){
        return console.log(error)
    }else{
        console.log("Affected Rows", results['affectedRows'])
        console.log("Deleted Successfully!")
    }
})
