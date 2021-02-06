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

module.exports = router;