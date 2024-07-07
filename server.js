const express=require('express');
const db=require('./db');
const app=express();
const bodyParser=require('body-parser');
const subroutes=require('./Routes/subroutes')
app.use(bodyParser.json());
require('dotenv').config();
const PORT=process.env.PORT || 3000;
app.get('/',(req,res)=>{
   res.send("Welcome to Subject_INFO");
});


app.use('/data',subroutes);



app.listen(PORT,()=>{
    console.log("Listening on port 3000");
})