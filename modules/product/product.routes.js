import * as productController from './product.controller.js'
import Router from 'express'
const router=Router()


router.post('/addProduct',productController.addProduct)
router.get('/getAllProductsFn',productController.getAllProductsFn)
// router.get('/getAllProductsWithUserFn',productController.getAllProductsWithUserFn)
router.get('/allUserProd',productController.allUserProd)
router.put('/updateProduct',productController.updateProduct)
router.delete('/deleteProduct',productController.deleteProduct)


export default router