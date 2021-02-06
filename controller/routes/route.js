const express = require('express');
const app = express();
const router = express.Router();
const connection= require('../../model/database')

connection.connect((err) => {
    if(err) throw err;
    console.log('Connection successful');
})

//QUESTION ONE
router.get('/question1',function(req,res){
    console.log("Question 1");
    connection.query('select * from marksheet',(err,results)=>{
        console.log("Question 1 values fetch");
        res.render('Question1',{userData:results});
    })
})

//QUESTION TWO
router.get('/question2',function(req,res){
    console.log("Question 2");
    connection.query('select * from Products where price>16000',(err,results)=>{
        console.log("Question 2 values fetch");
        res.render('Question2',{userData:results});
    })
})

//QUESTION THREE
router.get('/question3',function(req,res){
    console.log("Question 3");
    connection.query('select country,high,low from temperature',(err,results)=>{
        console.log("Question 3 values fetch");
        res.render('Question3',{userData:results});
    })
})

module.exports = router;