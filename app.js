const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

parameters = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "nusmoneyapp",
    multipleStatements: true
};

connection = mysql.createConnection(parameters);

connection.connect((error) => {
    if (error){
        console.log(error);
    } else {
        console.log("Connection was successful");
    }
});

app = express();
app.use(bodyParser.json());

//get
app.get("/getusers", (request, response) => {
    connection.query("select * from users limit 5;", 
    (error, result) => {
        if (error) {
            console.log(error);
            response.send("An error has occurred.");
        } else if (result.length == 0) {
            response.send("There are no users with those details.");
        } else {
            response.send(result);
        }
    });
});

app.listen(3306);