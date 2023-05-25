
import { connect } from 'mongoose'

export default async function run() {
  // 4. Connect to MongoDB
  await connect(process.env.DB_CONN_STRING);
  // await connect('mongodb+srv://luiznetov:aafBeKd9GfEymwnc@e-commerce.ephpd1z.mongodb.net/e-commerce?retryWrites=true&w=majority');
  console.log("🔋 MongoDB connected! 🚀");
}
