const mongoose=require('mongoose');
const URL="mongodb://localhost:27017/Subject_INFO";

mongoose.connect(URL)
.then(()=>{
    console.log("Connected to MONGODB server");
})
.catch((err)=>{
    console.log("MongoDB connection error: ",err);
})

const db=mongoose.connection;
db.on('disconnected',()=>{
    console.log("Connection to MongDB server lost");
})

module.exports=db;


 // const response = await subject.findByIdAndUpdate(id, UpdatedData, {
        //     new: true,
        //     runValidators: true
        // });