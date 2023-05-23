import express from 'express'

import shoppingCartRouter from './shoppingCart'

const router = express.Router()

export default function routerRoutes (): express.Router {
  shoppingCartRouter(router)
  return router
}