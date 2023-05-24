import express from 'express'
import { getAllProducts, getProductBySeller, postOneProduct } from '../controllers/products'

export default function productsRouter (router: express.Router) {
  router.get('/products', getAllProducts)
  router.post('/products', postOneProduct)
  router.get('/products/:sellerId', getProductBySeller)
}