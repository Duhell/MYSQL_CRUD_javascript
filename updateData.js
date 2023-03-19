const connection = require('./databaseConnection')

let updatedName = "", // updated values
    updatedAge  = "", //updated values
    id = ""  // ID to compare 

const updateDataQuery = `UPDATE Table_Name SET name='${updatedName}', age='${updatedAge}' WHERE id = '${id}'`
connection.query(updateDataQuery,(error,results)=>{
    if(error){
        return console.log(error)
    }else{
        console.log(results['message'])
        console.log("Update Successfully!")
    }
    connection.end()
})