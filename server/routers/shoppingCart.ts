import express from 'express'
import {
  getShoppingCartByUser,
  postOneCartProduct,
  deleteProductFromShoppingCart,
  increaseQuantity,
  decreaseQuantity
} from '../controllers/shoppingCart'

export default function shoppingCartRouter (router: express.Router) {
  router.get('/shoppingcart/:userId', getShoppingCartByUser)
  router.post('/shoppingcart', postOneCartProduct)
  router.delete('/shoppingcart/:id', deleteProductFromShoppingCart)
  router.put('/shoppingcart/increase/:id', increaseQuantity)
  router.put('/shoppingcart/decrease/:id', decreaseQuantity)
}