const studentModel = require("../models/student.model")
const getStudents = (req,res)=>{
    res.render('signupStudent')
}
const getStudentsLogin = (req,res)=>{
    res.render('loginStudent')
}
const registerStudents = (req,res)=>{
    console.log(req.body);
    let form = new studentModel(req.body)
    form.save()
    res.send('YOU HAVE SIGNED UP SUCCESSFULLY')
}

module.exports={ getStudents,getStudentsLogin,registerStudents}
