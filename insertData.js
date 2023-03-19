const connection = require('./databaseConnection')

let name = "", // your values here
    age  = ""; // your values here

const insertDataQuery = `INSERT INTO Table_Name (name,age) VALUES('${name}','${age}')`
connection.query(insertDataQuery,(error)=>{
    if(error){
        return console.log(error)
    }else{
        console.log("Inserted Successfully")
    }
    connection.end();
})
