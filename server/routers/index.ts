import express from 'express'

import shoppingCartRouter from './shoppingCart'
import productsRouter from './products'
import usersRouter from './users'

const router = express.Router()

export default function routerRoutes (): express.Router {
  shoppingCartRouter(router)
  productsRouter(router)
  usersRouter(router)
  return router
}