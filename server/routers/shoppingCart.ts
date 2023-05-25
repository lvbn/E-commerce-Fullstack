import express from 'express'
import { getShoppingCartByUser, postOneCartProduct } from '../controllers/shoppingCart'

export default function shoppingCartRouter (router: express.Router) {
  router.get('/shoppingcart/:userId', getShoppingCartByUser)
  router.post('/shoppingcart', postOneCartProduct)
}