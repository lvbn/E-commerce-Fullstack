import express from 'express'
import { getAllProducts, getProductBySeller, postOneProduct, getOneProduct } from '../controllers/products'

export default function productsRouter (router: express.Router) {
  router.get('/products', getAllProducts)
  router.get('/products/:productId', getOneProduct)
  router.post('/products', postOneProduct)
  router.get('/products/:sellerId', getProductBySeller)
}