const express =require('express')

const roleAssRouter = express.Router()

const {getApi,postApi,editRole,delRole} = require('../../Controller/Roleassign_controller/roleAssign')


roleAssRouter.get('/get/api/Assign',getApi)
roleAssRouter.post('/post/api/Post',postApi)
roleAssRouter.put('/update/api/editRole',editRole)
roleAssRouter.delete('/delete/api/:role_id',delRole)


module.exports = {roleAssRouter}