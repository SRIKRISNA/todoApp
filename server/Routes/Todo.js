const express = require('express');
const Todo = require('../Models/Todo')
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const allTodos = await Todo.find({userName: req.user._id})
        .populate(
            "userName",
            "password"
        )
        if(allTodos.length === 0){
            return res.status(200).send('add new todos, and see it')
        }else{
            return res.status(200).json(allTodos[0].todo)
        }
    } catch(err){
        console.log(err);
    }
})

router.post('/addtodo', async(req,res) => {
    try{
        const allTodos = await Todo.find({userName: req.user._id})
        if(allTodos.length){
            var savedTodo = await Todo.updateMany({userName: req.user._id}, {
                $push : { todo: req.body}
            })
            const list = await Todo.find({userName: req.user._id});
        }
    } catch(err){
        console.log(err);
    }
})