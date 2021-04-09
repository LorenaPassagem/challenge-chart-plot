const express = require('express');
const app = express();

app.get("/", function( req, res){
    res.send("Seja bem-vindo vá embora!!!")
});

app.get('/sobre', function( req, res){
    res.send('sobre o site')
})

app.listen(5500, function(){
    console.log("SERVER RUNNING!!!")
});



