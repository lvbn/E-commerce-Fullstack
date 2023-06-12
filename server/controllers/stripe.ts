

import { Request, Response } from "express";
import { stripe } from "../app";

const payment = async (productsArray) => {
  const SUCCESS_DOMAIN = 'http://localhost:5173/'
  const FAIL_DOMAIN = 'http://localhost:5173/checkoutfail'

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: productsArray,
      mode: 'payment',

      success_url: `${SUCCESS_DOMAIN}?success=true`,
      cancel_url: `${FAIL_DOMAIN}?canceled=true`,
    });

    // res.json(session);
    console.log('we have come this far', session)
    return session
  } catch (error) {
    console.log(error)
    // res.json('error on checkout')
    return 'error on checkout'
  }
}

const price = async (product: {price: number, name: string}) => {
  try {
    const price = await stripe.prices.create({
      unit_amount: product.price,
      currency: 'usd',
      product_data: {
        name: product.name
      }
    });

    return price
  } catch (error) {
    return 'error on price'
  }
}

export const  stripeCheckout = async(req: Request, res: Response) => {

  const cartItems = req.body.cartItems
  // console.log('BODY: ', cartItems)
  const productsArray = []

  const prices = cartItems.map(async (item) => {
    return await price({price: item.price, name: item.name})
    // const checkoutObj = await payment(priceObj.id)
  })

  Promise.allSettled(prices)
  .then(prices => {
    // console.log('RESULT ALL PROMISES: ', prices)
    prices.map(async (price, index) => {
      if (price.status === 'fulfilled') {
        productsArray.push({
          price: price.value.id,
          quantity: cartItems[index].selectedQuantity,
        })
      } // if it is not fulfilled should it throw an error?
    })
  })
  .then(async () => {
    const session = await payment(productsArray)
    if (session) res.send(session)
    else throw new Error('failed to generate new session')
  })
  .catch(error => console.log('ERROR: ', error))

}
