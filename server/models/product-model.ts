import mongoose, { Schema, Types, model } from 'mongoose'

interface IProduct {
  name: string;
  description: string;
  price: mongoose.SchemaDefinitionProperty<number>;
  sellerId: Types.ObjectId;
  quantity: number;
  imgUrl: string[]
}

// 2. Create a Schema corresponding to the document interface.
export const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  quantity: { type: Number, required: true },
  imgUrl: { type: [String], required: true }
});

// 3. Create a Model.
const Product = model<IProduct>('Product', productSchema);

export { Product, IProduct };
