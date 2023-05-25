const baseUrl = import.meta.env.VITE_BASE_URL

export const getAllCartProductsByUser = async () => {
  try {
    const response = await fetch(baseUrl + '/shoppingcart/' + '646d4919d6085ae75cb0f64c', {
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