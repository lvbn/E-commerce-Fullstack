import express from 'express'

import shoppingCartRouter from './shoppingCart'
import productsRouter from './products'
import usersRouter from './users'
import stripeRouter from './stripe'

const router = express.Router()

export default function routerRoutes (): express.Router {
  shoppingCartRouter(router)
  productsRouter(router)
  usersRouter(router)
  stripeRouter(router)
  return router
}