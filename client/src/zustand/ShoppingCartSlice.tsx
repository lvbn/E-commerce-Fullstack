import { create } from 'zustand'
import { CartItemType } from '../models/models'

type ShoppingCartState = {
  isOpen: boolean,
  cartItems: CartItemType[]
}

type ShoppingCartAction = {
  addItem: (newItem: CartItemType) => void
  increaseQuantity: (newItem: CartItemType) => void
  decreaseQuantity: (existingItem: CartItemType) => void
  removeFromCart: (existingItemID: string) => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

export const useCartSlice = create<ShoppingCartState & ShoppingCartAction>()((set) => ({
  isOpen: false,
  cartItems: [],

  addItem: (newItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item._id === newItem._id) == null) {
      return { cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] }
    } else {
      return { cartItems: [...state.cartItems] }
    }
  }),

  increaseQuantity: (existingItem) => set((state) => {

    const newState = state.cartItems.map(item => {
      // if the item does exist in the cart
      if (existingItem.quantity && item._id === existingItem?._id) {
        return { ...existingItem, quantity: existingItem.quantity + 1 }
      } else {
        return item
      }
    })
    return { cartItems: newState }
    }
  ),

  decreaseQuantity: (existingItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item === existingItem)?.quantity === 1) {
      return { cartItems: state.cartItems.filter(item => item._id != existingItem._id) }
    }
    else {
      const newState = state.cartItems.map(item => {
        // if the item does exist in the cart
        if (existingItem.quantity && item._id === existingItem?._id) {
          return { ...existingItem, quantity: existingItem.quantity - 1 }
        } else {
          return item
        }
      })
      return { cartItems: newState }
    }
  }),

  removeFromCart: (existingItemID) => set((state) => {
    return { cartItems: state.cartItems.filter(item => item._id != existingItemID) }
  }),

  toggleCart: () => set((state) => {
    if (state.isOpen === false) return { isOpen: true }
    else return { isOpen: false }
  }
),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

}))