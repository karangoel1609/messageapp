const mongoose = require('mongoose')


const Schema = mongoose.Schema

const messageSchema = new Schema({
  
  
  description:String

 
})

module.exports = mongoose.model('message', messageSchema , 'messages')