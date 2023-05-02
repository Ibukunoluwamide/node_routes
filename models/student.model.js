const { default: mongoose } = require("mongoose")

const studentSchema = {
    fullname : {type: String,required:true},
    email : {type: String,required:true,unique: true},
    password : {type: String,required:true}
}

const studentModel = mongoose.model('students_details',studentSchema)

module.exports = studentModel