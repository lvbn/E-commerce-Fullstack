import styles from './StoreItems.module.css'

import StoreItem from '../../components/store-item/StoreItem'
import { Product } from '../../models/models'

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0.99 },
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function StoreItems({products}: { products: Product[] }) {

  // console.log('Store Items: ', products)

  return (
    <motion.ul
        className={styles.storeItems}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {
          products.map((product) => (
            <motion.li key={product.productId} variants={item}>
              <StoreItem
                product={product}
              />
            </motion.li>
          ))
        }
    </motion.ul>
  )
}
