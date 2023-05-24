import styles from './Sidebar.module.css'

import AddProduct from '../../../assets/icons/add-product-icon.svg'
import Orders from '../../../assets/icons/orders-icon.svg'
import NewOrder from '../../../assets/icons/new-order-icon.svg'
import FavoritesIcon from '../../../assets/icons/favorites-icon.svg'
import MyStore from '../../../assets/icons/my-store-icon.svg'
import Logout from '../../../assets/icons/logout-icon.svg'

import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

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


export default function Sidebar() {

  const navigate = useNavigate()

  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >

      <motion.div className={styles.menuItem} variants={item} onClick={() => navigate('/mystore/products')}>
        <img
          src={MyStore}
          className={styles.cartItemsIcon}
          alt="products"
        />
        <p>products</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item} onClick={() => navigate('/mystore/newproduct')}>
      <img
            src={AddProduct}
            className={styles.cartItemsIcon}
            alt="add product"
          />
        <p>add product</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item} >
        <img
          src={FavoritesIcon}
          className={styles.cartItemsIcon}
          alt="favorites"
          // onClick={() => openCart()}
        />
        <p>favorites</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item} onClick={() => navigate('/mystore')}>
      <img
            src={Orders}
            className={styles.cartItemsIcon}
            alt="orders"
          />
        <p>orders</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item} onClick={() => navigate('/mystore/neworder')}>
      <img
            src={NewOrder}
            className={styles.cartItemsIcon}
            alt="new order"
          />
        <p>new order</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item}>
      <img
            src={Logout}
            className={styles.cartItemsIcon}
            alt="log out"
            // onClick={() => openCart()}
          />
        <p>log out</p>
      </motion.div>

    </motion.div>
  )
}
