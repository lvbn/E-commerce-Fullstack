import styles from './Menu.module.css'
import UserIcon from '../../assets/icons/user-icon.svg'
import FavoritesIcon from '../../assets/icons/favorites-icon.svg'
import SellOnline from '../../assets/icons/sell-online-icon.svg'
import Configuraitons from '../../assets/icons/configurations-icon.svg'
import Logout from '../../assets/icons/logout-icon.svg'

import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
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

export default function Menu() {

  const navigate = useNavigate()

  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >

      <motion.div className={styles.menuItem} variants={item} onClick={() => navigate('/login')}>
        <img
          src={UserIcon}
          className={styles.cartItemsIcon}
          alt="login"
        />
        <p>log in</p>
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

      <motion.div className={styles.menuItem} variants={item}>
      <img
            src={SellOnline}
            className={styles.cartItemsIcon}
            alt="sell online"
            // onClick={() => openCart()}
          />
        <p>sell online</p>
      </motion.div>

      <motion.div className={styles.menuItem} variants={item}>
      <img
            src={Configuraitons}
            className={styles.cartItemsIcon}
            alt="configurations"
            // onClick={() => openCart()}
          />
        <p>configurations</p>
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
