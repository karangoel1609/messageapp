const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const port = process.env.PORT || 3000;

const app = express()


app.use(express.static('./dist/rahul-app'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api)

app.get('*',(req , res )=>{
    res.sendFile('index.html',{root:'dist/angular-app-heroku/'});
})



const cors = require('cors')





app.listen(port,function(){
    console.log('server  runiing on')
})

    


