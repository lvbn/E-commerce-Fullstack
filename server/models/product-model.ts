import mongoose, { Schema, Types, model } from 'mongoose'

interface IProduct {
  sellerId: Types.ObjectId,
  productId: string
  name: string
  description: string
  price: number
  quantity: number
  sizes: string[]
  imgUrl: string[]
}

// 2. Create a Schema corresponding to the document interface.
export const productSchema = new Schema<IProduct>({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  sizes:  { type: [String], required: true},
  imgUrl: { type: [String], required: true }
});

// 3. Create a Model.
const Product = model<IProduct>('Product', productSchema);

export { Product, IProduct };
