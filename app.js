const http = require('http');
const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log('in the middleware here');
    next();
});

app.use((req,res,next)=>{
    console.log('in the another middleware here');
});



const server =  http.createServer(app);

server.listen(3000);