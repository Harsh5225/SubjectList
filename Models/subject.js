const mongoose=require('mongoose');
const subjects= new mongoose.Schema({
    Subjet_Name:{
        type:String,
        enum:['DSA','Analog','Signal','Communication','TechnicalCommunication','CyberSecurity'],
        required:true,
    },
    Subject_Code:{
        type:Number,
        required:true
    },
    Subject_Teacher:{
        type:String,
         reuired:true
    }

})
const subject=mongoose.model('subject',subjects)
module.exports=subject;
