
const express = require('express');
const path = require('path');

const app = express();

console.log("Starting the server...");
app.get('/',(req,res) =>
    {
        const filePath = path.join(__dirname,'./index.html');
        
        res.sendFile(filePath,(err) => {
            if(err)
            {
                console.log("Error serving file");
                res.status(500).send(err);
            }        
        })
    })


app.get('/index.js', (req, res) => {
    const filePath = path.join(__dirname,'./index.js');
    res.setHeader('Content-Type','application/javascript');
    res.sendFile(filePath);
});
app.use(express.static(__dirname));


app.listen(1356, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log("Listening on localhost:1356");
    }
});