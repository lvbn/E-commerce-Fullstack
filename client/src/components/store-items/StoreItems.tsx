import styles from './StoreItems.module.css'

import StoreItem from '../../components/store-item/StoreItem'
import mock from '../../mock-data/mock.json'
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

export default function StoreItems() {

  // console.log(mock)
  const data = JSON.parse(JSON.stringify(mock))
  const products: Product[] = data.products;

  return (
    // <div className={styles.storeItems} >
    //     {
    //       products.map((product: Product) => (
    //         <StoreItem
    //           key={product.id}
    //           product={product}
    //         />
    //       ))
    //     }
    //   </div>

    <motion.ul
        className={styles.storeItems}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {
          products.map((product: Product) => (
            <motion.li key={product.id} variants={item}>
              <StoreItem
                product={product}
              />
            </motion.li>
          ))
        }
      </motion.ul>
  )
}
