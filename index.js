require('dotenv/config');
const express = require('express');
const PORT = 8000;
const app = express();
const db = require('./config/mongoose');


app.use(express.json());

app.listen(PORT, (err) => {
    if(err){
        console.log("Error while running the server");
    }else{
        console.log("Server is running on port", PORT);
    }
});