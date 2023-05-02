const express = require('express')
const { getStaff, getStaffLogin, registerStaff } = require('../controllers/staff_controller')
const router = express.Router()

router.get('/',getStaff)
router.get('/login',getStaffLogin)
router.post('/signup',registerStaff)


module.exports = router