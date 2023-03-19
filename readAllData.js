const connection = require('./databaseConnection.js');

const readAllDataQuery = 'SELECT * FROM Table_Name'

connection.query(readAllDataQuery, (error, results, fields) => {
  if (error) {
    return console.error('Error executing query:', error);
  } else {
    console.log('Results:', results);
  }

  connection.end();
});
