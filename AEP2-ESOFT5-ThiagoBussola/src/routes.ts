import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './users/user.controller'
import productController from './products/product.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get('/randomProducts', productController.randomProducts)
routes.get('/writeFileProducts', productController.writeFileProducts)
routes.get('/readFileProducts', productController.readFileProducts)

routes.get('/stockValorTotal', productController.stockValorTotal)
routes.get('/stock', productController.getStock)

// 17 - Estamos exportando a constante routes
export default routes