
import { Product } from '../models/product-model'
import { IProduct } from '../models/product-model'

export const getAllProducts = async (req, res) => {
  try {
    const user = await Product.find()
    res.status(200)
    res.json(user)
  } catch (error) {
    res.status(404)
    res.json({ error: error })
  }
}

export const postOneProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      sellerId: req.body.sellerId,
      quantity: req.body.quantity,
      imgUrl: req.body.imgUrl
    })

    await product.save()

    if (product) {
      res.status(200)
      res.json(product)
    }
  } catch (error) {
    res.status(404)
    res.json(error)
  }
}

export const getProductBySeller = async (req, res) => {
  try {
    const products = await Product.find({
      sellerId: req.body.sellerId
    }).populate<{ product: IProduct }>('_id')
      .orFail()
      .then(doc => {
      // Works
      const t = doc;
      return t
    });

    if (products) {
      res.status(200)
      res.json(products)
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}