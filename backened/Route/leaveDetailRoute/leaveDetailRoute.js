const express = require ('express')

const leavedetailRouter = express.Router()

const {getleavedetail} = require("../../Controller/leaveDetail/leaveDetail");

leavedetailRouter.get('/leave',getleavedetail)


module.exports = {leavedetailRouter}