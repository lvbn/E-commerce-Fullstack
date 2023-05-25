import { CartItemType } from "../models/models"

const baseUrl = import.meta.env.VITE_BASE_URL

export const getAllCartProductsByUser = async (userId: {userId: string}) => {
  try {
    const response = await fetch(baseUrl + '/shoppingcart/' + userId.userId, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })

    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}

export const postCartProduct = async (newCartProduct: CartItemType) => {
  try {
    const response = await fetch(baseUrl + '/shoppingcart', {
      method: "POST",
      body: JSON.stringify(newCartProduct),
      headers: {
        "Content-type": "application/json"
      }
    })

    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}