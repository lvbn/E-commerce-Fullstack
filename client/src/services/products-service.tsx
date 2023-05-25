// const baseUrl = 'http://localhost:3000'
const baseUrl = import.meta.env.VITE_BASE_URL

export const getAllProducts = async () => {
  try {
    const response = await fetch(baseUrl + '/products', {
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

export const postProduct = async (newProduct: any) => {
  try {
    const response = await fetch(baseUrl + '/products', {
      method: "POST",
      body: JSON.stringify(newProduct),
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

export const getProductsBySellerId = async (sellerId: any) => {
  try {
    const response = await fetch(baseUrl + '/products/' + sellerId.sellerId, {
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