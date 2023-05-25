
import { Product } from '../models/product-model'
import { IProduct } from '../models/product-model'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()

    if (products) {
      res.status(200)
      res.send(products)
    } else {
      res.status(200)
      res.send([])
    }
  } catch (error) {
    res.status(404)
    res.json({ error: error })
  }
}

export const getOneProduct = async (req, res) => {
  const product_Id = req.params
  // console.log(product_Id.productId)

  try {
    const products = await Product.findOne({
      _id: product_Id.productId
    })

    if (products) {
      res.status(200)
      res.send(products)
    } else {
      res.status(200)
      res.send([])
    }
  } catch (error) {
    res.status(404)
    res.json({ error: error })
  }
}

export const postOneProduct = async (req, res) => {
  console.log('one prod: ', req.body)
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
      // .orFail() // throws an error if there is no match
      .then(doc => {
      // Works
      const t = doc;
      return t
    });

    if (products) {
      res.status(200)
      res.send(products)
    } else {
      res.status(200)
      res.send([])
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}