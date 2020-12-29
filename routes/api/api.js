const express = require('express');
const {v4:v4} = require('uuid');
const router = express.Router();
const dat = require('../../sample_data/data');

router.get('/', (req, res) => {
    res.json({msg: "Here is a list of your tasks", dat})
});

router.put('/:id', (req, res) => {
    const found = dat.some(task => {
        return req.params.id == task.id});
    if (found) { //multiple of the same ids may be an issue
        dat.filter(task => req.params.id == task.id).map(task => {
            if (req.body.name) {
                task.name = req.body.name
            }
            if (req.body["logged-time"]) {
                task["logged-time"] = req.body["logged-time"]
            }
        });
        res.json({'msg':`Updated task with id ${req.params.id}`, dat})
    } else {
        res.status(400).json({"msg":"Couldn't find matching id"})
    }
});

router.post('/', (req, res) => {
    console.log('post request made')
    //res.json(req.body)
    if (!req.body.name){
        res.status(400).send("Todo needs name.")
    } else {
        const newTask = {
            id: v4(),
            name: req.body.name,
            "logged-time":req.body["logged-time"]
        }
        dat.push(newTask)
        res.json(dat);
    }
});

router.delete('/:id', (req, res)=> {
    const found = dat.some(task => task.id == req.params.id);
    if (found){
        let i = 0;
        while (true){
            if (req.params.id == dat[i].id){
                dat.splice(i,1);
                res.json(dat);
                break;
            }
            else {
                i++;
            }
        }
    } else {
        res.status(400).json({"msg":`Item of id ${req.params.id} does not exist.`})
    }
});

module.exports = router;