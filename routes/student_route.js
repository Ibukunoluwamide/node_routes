const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.render('signupStudent')
})
router.get('/login',(req,res)=>{
   res.render('loginStudent')
})


module.exports = router