const express = require('express')
const Stud = require('./stud')
const router = express.Router();

router.get("/students",async (req,res)=>{
        const student = await Stud.find();
        //console.log(student);
        //console.log("test");
        res.send(student)
})

module.exports = router;