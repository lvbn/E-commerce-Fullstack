import express from 'express'
import { signup } from '../controllers/users'

export default function productsRouter (router: express.Router) {
  router.post('/users', signup)
}