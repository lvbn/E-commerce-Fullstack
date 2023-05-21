import styles from './ItemDetails.module.css'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import mock from '../../mock-data/mock.json'
import { useParams } from 'react-router-dom'
import { Product, Sizes, ProductSize } from '../../models/models'
import { useState } from 'react'

import { motion } from "framer-motion";

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

  const addItem = useCartSlice((state) => state.addItem)
  const openCart = useCartSlice((state) => state.openCart)

  // URL param
  const param = useParams()

  // URL query and fetch the DB
  const data = JSON.parse(JSON.stringify(mock))
  const products: Product[] = data.products;
  let product = products.find(product => String(product.id) === param.id)

  const [item, setItem] = useState(product)
  const [sizeState, setSizeState] = useState(sizes)

  // handle size selection
  const handleSizeSelection = (e: React.SyntheticEvent, index: number) => {
    setSizeState({
      ...sizeState, activeSize: sizeState?.sizes[index]
    })
    if (item) {
      const selectedSize = e.currentTarget.textContent as ProductSize
      setItem({
        ...item, size: selectedSize
      })
    }
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
                key={index}
                className={activeClass(index)}
                onClick={(e) => handleSizeSelection(e, index)}
              >
                {size.size}
              </button>
            ))
          }
        </div>

        <div
          className={styles.addToCart}
          onClick={() => {
            if (item) {
              addItem(item);
              openCart();
            }
          }}
        >ADD TO CART
        </div>
      </div>

    </motion.div>
  )
}
