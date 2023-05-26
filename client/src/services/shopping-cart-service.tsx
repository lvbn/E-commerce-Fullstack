import { CartItemType } from "../models/models"

const baseUrl = import.meta.env.VITE_BASE_URL

export const getAllCartProductsByUser = async (userId: {userId: string}) => {
  // console.log('USER ID - SERVICE: ', userId)
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
      // console.log('ADDING TO SC - SERVICE:', data)
      return data
    }
  } catch (error) {
    return error
  }
}

export const deleteCartProduct = async (cartItemId: string) => {
  // console.log('CartProductId in the service: ', cartItemId)
  try {
    const response = await fetch(baseUrl + '/shoppingcart/' + cartItemId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })

    //  console.log('DELETE FROM SC - SERVICE: ', response)

    if (response.ok) {
      // console.log(response)
      const data = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}

export const increaseCartProductQuantity = async (cartItemId: string) => {
  // console.log('CartProductId in the service: ', cartItemId)
  try {
    const response = await fetch(baseUrl + '/shoppingcart/increase/' + cartItemId, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      }
    })

    //  console.log('DELETE FROM SC - SERVICE: ', response)

    if (response.ok) {
      // console.log(response)
      const data = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}

export const decreaseCartProductQuantity = async (cartItemId: string) => {
  // console.log('CartProductId in the service: ', cartItemId)
  try {
    const response = await fetch(baseUrl + '/shoppingcart/decrease/' + cartItemId, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      }
    })

    //  console.log('DELETE FROM SC - SERVICE: ', response)

    if (response.ok) {
      // console.log(response)
      const data = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}