import styles from './ItemDetails.module.css'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { useParams } from 'react-router-dom'
import { Product, Sizes, ProductSize, CartItemType } from '../../models/models'
import { useEffect, useState } from 'react'

import { motion } from "framer-motion";
// import { getOneProduct } from '../../services/products-service'
import { useProductsSlice } from '../../zustand/ProductsSlice'
import { postCartProduct } from '../../services/shopping-cart-service'

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0.71, 0.2, 1.01],
      delayChildren: 0.1,
      staggerChildren: 0.07
    }
  }
};


const sizes: Sizes = {
  activeSize: { size: 'M' },
  sizes: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
}

export default function ItemDetails() {

  const [item, setItem] = useState<CartItemType>({
    _id: '',
    sellerId: '',
    productId: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    sizes: [],
    image: [],
    selectedQuantity: 0,
    selectedSize: 'M'
  })
  const [product, setProduct] = useState<Product>()
  const [sizeState, setSizeState] = useState(sizes)

  const addItem = useCartSlice((state) => state.addItem)
  const openCart = useCartSlice((state) => state.openCart)
  const products = useProductsSlice((state) => state.products)

  // URL param
  const productId = useParams()

  useEffect(() => {
    setProduct(products.find(product => product._id === productId.id))
  }, [])

  // handle add to cart
  const handleAddToCart = async (item: CartItemType) => {
    const res = await postCartProduct(item)

    if (res) {
      // console.log('RES: ', res)
      addItem(item);
      openCart()
    } else {
      // add toast here
      // fail()
    }
  }

  // handle size selection
  const handleSizeSelection = (e: React.SyntheticEvent, index: number) => {
    setSizeState({
      ...sizeState, activeSize: sizeState?.sizes[index]
    })

    const selectedSize = e.currentTarget.textContent as ProductSize
    const cartItem = {...product, selectedSize: selectedSize, selectedQuantity: 1, userId: '646d4919d6085ae75cb0f64c'}
    setItem({
      ...item, ...cartItem
    })

  }

  const activeClass = (index: number) => {
    if (sizeState.activeSize === sizeState.sizes[index]) {
      return `${styles.active}`
    } else {
      return ''
    }
  }

  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >

      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.mainImage}></div>
        <div className={styles.sideImages}>
          <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div>
        </div>
      </div>


      {/* RIGHT */}
      <div className={styles.right}>
        <h1 className={styles.name}>{product?.name}</h1>
        <h4 className={styles.description}>{product?.description}</h4>
        <h4 className={styles.price}>{product?.price}</h4>

        {/* https://www.youtube.com/watch?v=-Lx-YlI9hlY */}
        <div className={styles.sizes}>
          {
            sizes.sizes.map((size, index) => (
              <button
                key={size.size}
                className={activeClass(index)}
                onClick={(e) => handleSizeSelection(e, index)}
              >
                {size.size}
              </button>
            ))
          }
        </div>

        <motion.div
        whileTap={{ scale: 0.97 }}
          className={styles.addToCart}
          onClick={() => {
            console.log('ITEM: ', item, product)
            if (item) {
              // addItem(item);
              handleAddToCart(item)
              // postCartProduct(item)
              // openCart()
            } else {
              // add toast here
              console.log('problem here')
            }
          }}
        >ADD TO CART
        </motion.div>
      </div>

    </motion.div>
  )
}
