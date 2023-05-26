import { Product } from '../models/product-model'
import { CartProduct, ICartProduct } from '../models/shopping-cart';


export const postOneCartProduct = async (req, res) => {
  try {
    const product = new CartProduct({
      sellerId: req.body.sellerId,
      productId: req.body.productId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      sizes: req.body.sizes,
      imgUrl: req.body.imgUrl,

      userId: req.body.userId,
      selectedSize: req.body.selectedSize,
      selectedQuantity: req.body.selectedQuantity
    })

  const savedProduct =  await product.save()
  // console.log('saved to the cart - controller: ', savedProduct)

    if (savedProduct) {
      res.status(200)
      res.json(savedProduct)
    }
  } catch (error) {
    res.status(404)
    res.json(error)
  }
}


export const getShoppingCartByUser = async (req, res) => {
  const userId = req.params
  // console.log('GET SC PRODUCTS - ID - CONTROLLER: ', userId)

  try {
    const products = await CartProduct.find({
      // userId: req.body.userId
      userId: userId.userId
    }).populate<{ cartProduct: ICartProduct }>('_id')
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

export const deleteProductFromShoppingCart = async (req, res) => {
  const product_id = req.params
  // console.log('PRODUCT ID RECEIVED IN THE CONTROLLER: ', product_id)
  try {
    const product = await CartProduct.deleteOne({
      // userId: req.body.userId
      _id: product_id.id
    })
    // console.log('product remove - controller: ', product)
    if (product.deletedCount === 1) {
      res.status(200)
      res.json('deleted succesfully')
    } else {
      res.status(400)
      res.json('no such item in the cart')
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}

export const increaseQuantity = async (req, res) => {
  const _id = req.params
  const filter = { _id: _id.id}
  const update = { 'selectedQuantity': 1}
  // console.log('PRODUCT ID RECEIVED IN THE CONTROLLER: ', product_id)
  try {
    const product = await CartProduct.findOneAndUpdate(
      { _id: _id.id },
      { $inc: {'selectedQuantity': 1 } },
      {new: true }
    )

    // console.log('increae quantity - controller: ', product)
    if (product) {
      res.status(200)
      res.send(product)
    } else {
      res.status(400)
      res.json('problem while updating')
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}

export const decreaseQuantity = async (req, res) => {
  const _id = req.params
  const filter = { _id: _id.id}
  const update = { 'selectedQuantity': -1}
  // console.log('PRODUCT ID RECEIVED IN THE CONTROLLER: ', product_id)
  try {
    const product = await CartProduct.findOneAndUpdate(
      { _id: _id.id },
      { $inc: {'selectedQuantity': -1 } },
      { new: true }
    )

    // console.log('decreae quantity - controller: ', product)
    if (product) {
      res.status(200)
      res.send(product)
    } else {
      res.status(400)
      res.json('problem while updating')
    }

  } catch (error) {
    res.status(404)
    res.json(error)
  }
}