const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://idahope:Hope@002@mangodb.zzsgich.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if(err){
        console.error('Error!'+err)
    }
    else{
        console.log('connected to mongodb')
    }
})

router.get('/',(req,res)=>{
    res.send('From API Route')
})

router.post('/register',(req, res)=>{
    let userdata = req.body
})

module.exports = router