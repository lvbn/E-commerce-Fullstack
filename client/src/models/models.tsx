export type ProductSize = 'S' | 'M' | 'L' | 'XL';


export interface Product {
  _id: string
  sellerId: string
  productId: number
  name: string
  description: string
  price: number
  quantity: number
  sizes: string[]
  image: string[]
}

export interface CartItemType extends Product {
  selectedQuantity: number
  selectedSize: ProductSize
}

interface SizeObject {
  size: ProductSize
}
export interface Sizes {
  activeSize: SizeObject,
  sizes: SizeObject[]
}