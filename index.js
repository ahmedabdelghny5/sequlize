import express from 'express'
import { dbConnection } from './DB/dbConnection.js'
import userRouter from './modules/user/user.routes.js'
import productRouter from './modules/product/product.routes.js'
const app = express()
const port = 3000
app.use(express.json())
// const baseUrl = "/api/v1"

app.use('/users',userRouter)
app.use('/products',productRouter)

dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))