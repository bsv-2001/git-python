const express = require('express')
const router = express.Router();
const Joi = require('joi')
let courses = [{id : 1,name : "course1",price : 1},{id : 2,name : "course2",price : 2},{id : 3,name : "course3",price : 3}]

function validateCourse(body){
    const schema={
        name : Joi.string().required().min(3),
        price : Joi.required()
    }
    return Joi.validate(body,schema)
}


router.get('/courses',(req,res)=>{
res.send(courses)
})


router.post('/add',(req,res)=>{
    const {error} = validateCourse(req.body)
    if(error){
        res.status(400).send(error.details)
        return;
    }
    const new_obj={
        id : courses.length+1,
        name : req.body.name,
        price : req.body.price
    }
    
    courses.push(new_obj)
    res.send(courses)
})

router.delete('/del/:id',(req,res)=>{
    let id=req.params.id
    let index=courses.findIndex(obj=>obj.id==id)
    if(index==-1){
        res.status(404).send('not found error')
        return
    }
    courses.splice(index,1)
    res.send(courses)
})

module.exports=router