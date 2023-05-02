const staffModel = require("../models/staffmodel")

const getStaff = (req,res)=>{
    res.render('signupStaff')
}
const getStaffLogin = (req,res)=>{
    res.render('loginStaff')
}
const registerStaff = (req,res)=>{
    console.log(req.body);
    let form = new staffModel(req.body)
    form.save()
    res.send('YOU HAVE SIGNED UP SUCCESSFULLY')
}

module.exports={ getStaff,getStaffLogin,registerStaff}
 