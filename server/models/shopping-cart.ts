import mongoose, { Schema, Types, model } from 'mongoose'

interface ICartProduct {
  sellerId: Types.ObjectId,
  productId: string
  name: string
  description: string
  price: number
  quantity: number
  sizes: string[]
  imgUrl: string[]

  userId: Types.ObjectId,
  selectedSize: string
  selectedQuantity: number
}

// 2. Create a Schema corresponding to the document interface.
export const cartProductSchema = new Schema<ICartProduct>({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  sizes:  { type: [String], required: true},
  imgUrl: { type: [String], required: true },

  userId: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  selectedSize: { type: String, required: true },
  selectedQuantity: { type: Number, required: true }
});

// 3. Create a Model.
const CartProduct = model<ICartProduct>('CartProduct', cartProductSchema);

export { CartProduct, ICartProduct };
