const express = require('express');
const UserRouter = express.Router();
const userSignup= require("../../Route/employeeRoute/userRouter.js")
UserRouter.post('/user/post',userSignup);

module.exports = UserRouter