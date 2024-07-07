const express=require('express');
const db=require('./db');
const app=express();
const bodyParser=require('body-parser');
const subroutes=require('./Routes/subroutes')
app.use(bodyParser.json());


app.get('/',(req,res)=>{
   res.send("Welcome to Subject_INFO");
});


app.use('/data',subroutes);



app.listen(3000,()=>{
    console.log("Listening on port 3000");
})