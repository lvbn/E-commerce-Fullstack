import express from 'express'
import { getShoppingCart } from '../controllers/shoppingCart'

export default function shoppingCartRouter (router: express.Router) {
  router.get('/shoppingcart', getShoppingCart)
}