import styles from './Navbar.module.css'
import BagIcon from '../../assets/icons/bag-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { useMenuSlice } from '../../zustand/MenuSlice'
import Menu from '../menu/Menu'

import { motion } from "framer-motion";

export default function Navbar() {

  const navigate = useNavigate()

  const toggleMenu = useMenuSlice((state) => state.toggleMenu)
  const isOpen = useMenuSlice((state) => state.isOpen)

  const toggleCart = useCartSlice((state) => state.toggleCart)
  const cartItems = useCartSlice((state) => state.cartItems)

  return (
    <div className={styles.navbarContainerSticky} >
      <div className={styles.navbarContainerBlock}>

        <h1
          className={styles.navbarLeft}
          onClick={() => navigate('/products')}
        >E-COMMERCE
        </h1>

        <input className={styles.navbarCenter}></input>

        <div className={styles.navbarRight}>
          <div
            className={styles.cartItems}
            onClick={toggleCart}
          >
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.selectedQuantity
            }, 0)}
          </div>
          <img
            src={BagIcon}
            className={styles.cartItemsIcon}
            alt="logo"
            onClick={toggleCart}
          />
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={styles.userThumbnail}
            onClick={toggleMenu}
          >
          {isOpen && <Menu />}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
