import * as userController from './user.controller.js'
import Router from 'express'
const router=Router()


router.get('/allUsers',userController.allUsers)
router.get('/allUser',userController.allUser)
router.get('/getUser',userController.getUser)
router.get('/InUser',userController.InUser)
router.put('/updateUser',userController.updateUser)
router.delete('/daleteUser',userController.daleteUser)
router.post('/addUser',userController.addUser)


export default router