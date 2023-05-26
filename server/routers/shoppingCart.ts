import express from 'express'
import { getShoppingCartByUser, postOneCartProduct, deleteProductFromShoppingCart } from '../controllers/shoppingCart'

export default function shoppingCartRouter (router: express.Router) {
  router.get('/shoppingcart/:userId', getShoppingCartByUser)
  router.post('/shoppingcart', postOneCartProduct)
  router.delete('/shoppingcart/:id', deleteProductFromShoppingCart)
}