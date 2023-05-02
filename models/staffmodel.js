const { default: mongoose } = require("mongoose")

const staffSchema = {
    fullname : {type: String,required:true},
    email : {type: String,required:true,unique: true},
    password : {type: String,required:true}
}

const staffModel = mongoose.model('staffs_details',staffSchema)

module.exports = staffModel