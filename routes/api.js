const { Route } = require('express')
const { Router } = require('express')
const express = require('express')
const router = express.Router()




const mongoose = require('mongoose')
const message = require('../models/message')







const db = "mongodb+srv://karangoel1609:Karangoel1@cluster0.khsi4.mongodb.net/rahul?retryWrites=true&w=majority"

mongoose.connect(db, err=>{
    if(err){
        console.log('errr form db'+ err)
    }
    else{
        console.log('connected to mongadb')
    }
})

router.get('/',  (req , res )=> {
    res.send('hello from api route')
})

router.post('/sendmessage',(req , res) =>{

    console.log("posting a request")
  
  var newMessage = new message()


  newMessage.description = req.body.description

  console.log(newMessage)


  newMessage.save(function(error,addMessage){

    
      if(error){
          console.log("eooro saving video")
      }
      else{
          

        console.log("what the f"),
        
        res.status(200).send({addMessage})
      }
  })

})


router.get('/displaymessages',(req,res)=>{

console.log("getting messages");

message.find({}).sort({_id: -1})
.exec(function(err,messages){
    if(err){
        console.log(err)
    }
    else{
        res.json(messages)
    }
})



})


router.delete('/deleatemessages',(req,res)=>{


    console.log("deleating")

    message.deleteMany({}).exec(function(err,messages){
        if(err){
            console.log(err)
        }
        else{
            res.json(messages)
        }
    })
})










module.exports  =router