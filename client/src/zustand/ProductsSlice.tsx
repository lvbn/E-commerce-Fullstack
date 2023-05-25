import { create } from 'zustand'
import { Product } from '../models/models'

type ProductsState = {
  products: Product[]
}

type ProductsAction = {
  addItem: (newItem: Product) => void
}


export const useProductsSlice = create<ProductsState & ProductsAction>()((set) => ({
  products: [],

  addItem: (newItem) => set((state) => {
    // if there is no such item in the cart yet
    if (!state.products.find(item => item._id === newItem._id))
    {
      return { products: [...state.products, newItem] }
    } else {
      return { products: [...state.products] }
    }
  })

}))