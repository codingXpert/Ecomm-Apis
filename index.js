const express = require('express');
const PORT = 8000;
const app = express();



app.listen(PORT, (err) => {
    if(err){
        console.log("Error while running the server");
    }else{
        console.log("Server is running on port", PORT);
    }
});