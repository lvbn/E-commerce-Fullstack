import { CartItemType } from "../models/models"

export async function checkout(cartItems: CartItemType[]) {

  // this function should be in the service

  console.log('ok')

  try {
    const response = await fetch('http://localhost:8080/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({cartItems})
  })
  console.log(response)
  if (response.ok) {
    const data = await response.json()
    // console.log(data)
    return data;
  } else {
    throw new Error('Failed to checkout');
  }

  } catch (error) {
    console.log(error)
  }
}