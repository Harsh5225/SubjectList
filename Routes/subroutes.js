const express=require('express');
const subject=require('../Models/subject');
const router=express.Router();

//get

router.get('/',async(req,res)=>{
    try {
        const response= await subject.find();
        console.log("Data fetched");
        res.status(200).json({response});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//post 

router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newData=new subject(data);
        const response=await newData.save();
        console.log('Data Saved Successfully');
        res.status(200).json({response});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
})


// worktype
router.get('/:sub',async(req,res)=>{
    try {
        const subi= req.params.sub;
        if(['DSA','Analog','Signal','Communication','TechnicalCommunication','CyberSecurity'].includes(subi)){
            const response=await subject.find({Subjet_Name:subi});
            console.log('Data Fetched Successfully');
            res.status(200).json(response);
        }
        else{
            return res.status(404).json({ error: 'Not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//new: true: This option tells Mongoose to return the modified document rather than the original. By default, findByIdAndUpdate returns the document as it was before the update. Setting new: true ensures that you get the updated document instead.

// This option ensures that the update operation runs schema validators on the updated data. 



//put
router.put('/:sub', async (req, res) => {
    try {
        const subi = req.params.sub;
        const UpdatedData = req.body;
        const response = await subject.findOneAndUpdate({Subjet_Name:subi}, UpdatedData, {
            new: true,
            runValidators: true
        });
        
        if (!response) {
            return res.status(404).json({ error: "Document not found" });
        }
        
        console.log('Data updated successfully');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports=router;