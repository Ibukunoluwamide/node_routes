const express = require('express')
const {getStudents,getStudentsLogin, registerStudents} = require('../controllers/students_controller')
const studentModel = require('../models/student.model')
const router = express.Router()

router.get('/', getStudents)
router.get('/login',getStudentsLogin)
router.post('/signup', registerStudents)


module.exports = router