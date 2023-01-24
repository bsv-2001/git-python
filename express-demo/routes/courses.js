const express = require('express')
const Joi = require('joi')
const router = express.Router()


function validateCourse(body){
    const schema = {
        name : Joi.string().required().min(3)
    }
    return Joi.validate(body,schema)
}

const courses = [{id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    ]

router.get('/',(req,res)=>{
    res.send(courses)
})

router.get('/getCourse',(req,res)=>{
    res.send(courses)
})

router.get('/getCourse/:id',(req,res)=>{
    let t_id = req.params.id
    let req_obj=courses.find(obj=>obj.id==t_id)
    if(req_obj)
        res.send(req_obj)
    else
        res.status(404).send('Course not found')
})
router.post('/addCourse',(req,res)=>{
    const {error} = validateCourse(req.body)
    if(error){
        res.status(400).send(error.details) // return res.status(404).send(error.details)
        return;
    }
    let t_id=courses.length+1
    let res_obj={
        id : t_id,
        name : req.body.name
    }
    courses.push(res_obj)
    res.send(courses)
})
router.put('/updateCourse/:id',(req,res)=>{
    //extract id
    let t_id=req.params.id
    //course exist check
    let res_index = courses.findIndex(obj=>obj.id==t_id)
    console.log(res_index);
    //item not found
    if(res_index==-1){
        res.status(404).send('Error not found status code 404')
        return;
    }
    //validation
    const {error} = validateCourse(req.body)
    //invalid 
    if(error){
        res.status(400).send('Invalid format status code 400')
        return;
    }
    //valid -> update the course object
    const updated_obj={
        id : t_id,
        name : req.body.name

    }
    courses[res_index]=updated_obj
    res.send(courses)
})
router.delete('/deleteCourse/:id',(req,res)=>{
    let t_id=req.params.id
    let res_index=courses.findIndex(obj=>obj.id==t_id)
    if(res_index==-1){
        res.status(404).send('Object not found ! returned with status code 404')
        return;
    }

    courses.splice(res_index,1)
    res.send(courses)
})

module.exports = router