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


export const getShoppingCartByUser = async (req, res) => {
  const userId = req.params
  // console.log(userId)

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