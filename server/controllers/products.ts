
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
      sellerId: req.body.sellerId,
      productId: req.body.productId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      sizes: req.body.sizes,
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
  const sellerId = req.params

  try {
    const products = await Product.find({
      // sellerId: req.body.sellerId
      sellerId: sellerId.sellerId
    }).populate<{ product: IProduct }>('_id')
      .orFail()
      .then(doc => {
      // Works
      const t = doc;
      return t
    });

    if (products) {
      res.status(200)
      res.send(products)
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}