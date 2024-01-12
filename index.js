require('dotenv/config');
const express = require('express');
const PORT = 8000;
const app = express();
const db = require('./config/mongoose');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = YAML.load('./api.yaml');


app.use(express.json());
app.use('/api', require('./routes'))
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.listen(PORT, (err) => {
    if(err){
        console.log("Error while running the server");
    }else{
        console.log("Server is running on port", PORT);
    }
});