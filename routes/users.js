const express= require('express');
const router=express.Router();
const userscontroller=require('../controllers/usercontroller')
router.route('/')
.get(userscontroller.index)
.post(userscontroller.createUser);
router.route('/:userId')
.get(userscontroller.indexById)
.put(userscontroller.updateUser);

//cars
router.route('/:userId/cars')
.get(userscontroller.getUserCars)
.post(userscontroller.newUserCars);


module.exports=router;