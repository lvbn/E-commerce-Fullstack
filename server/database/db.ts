
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://luiznetov:aafBeKd9GfEymwnc@e-commerce.ephpd1z.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// export const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("🔋 MongoDB connected! 🚀");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }

// run().catch(console.dir);











import { connect } from 'mongoose'

export default async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb+srv://luiznetov:aafBeKd9GfEymwnc@e-commerce.ephpd1z.mongodb.net/e-commerce?retryWrites=true&w=majority');
  console.log("🔋 MongoDB connected! 🚀");
}
















// // import { User, userSchema } from "../models/user-model";
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://luiznetov:aafBeKd9GfEymwnc@e-commerce.ephpd1z.mongodb.net/e-commerce?retryWrites=true&w=majority');
//   console.log('MongoDB connected via mongoose ✅')
// }

// // const user = mongoose.model('User', userSchema)

// module.exports = {
//   mongoose,
//   // user
// }