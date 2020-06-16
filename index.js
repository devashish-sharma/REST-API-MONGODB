// Import express
const express = require('express');
const app = express();
// Import Body parser
const bodyParser = require('body-parser');
// Initialise the app
const mongoose = require('mongoose');
// Import routes
const apiRoutes = require('./apiRoutes');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/StudentsData',
    { useNewUrlParser: true });
var db = mongoose.connection;

//check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 2020;

app.get("/", (req, res) => {
    res.send("Hello Welcome to Student Data REST API");
})

app.use("/api", apiRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});