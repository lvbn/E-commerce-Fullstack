import styles from './ShoppingCart.module.css'

import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { CartItemType } from '../../models/models'
import CartItem from '../cart-item/CartItem'

import {
  deleteCartProduct,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  getAllCartProductsByUser
} from '../../services/shopping-cart-service'

import { useStripe } from '@stripe/react-stripe-js';

import { motion } from "framer-motion";
import { useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { checkout } from '../../services/stripe-service'

const fail = () => toast.error('something went wrong... 😕 please try again.', {
  style: {
    border: '1px solid #BE0000',
    backgroundColor: '#FDB6C1',
    padding: '16px',
    color: '#BE0000',
  },
  iconTheme: {
    primary: '#BE0000',
    secondary: '#FDB6C1',
  },
});

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

export default function ShoppingCart() {

  const cartItems = useCartSlice((state) => state.cartItems)
  const isOpen = useCartSlice((state) => state.isOpen)
  const closeCart = useCartSlice((state) => state.closeCart)
  const addItem = useCartSlice((state) => state.addItem)
  const increaseQuantity = useCartSlice((state) => state.increaseQuantity)
  const decreaseQuantity = useCartSlice((state) => state.decreaseQuantity)
  const removeFromCart = useCartSlice((state) => state.removeFromCart)
  const stripe = useStripe();

  useEffect(() => {

    const fetchAllCartProductsByUser = async () => {
      const res = await getAllCartProductsByUser({userId: '646d4919d6085ae75cb0f64c'})
      if (res !== undefined) {
        res.forEach((product: CartItemType) => {
          addItem(product)
        })
      }
    }

    fetchAllCartProductsByUser()
  }, [])

  const handleDelete = async (cartItemId: string) => {
    const res =  await deleteCartProduct(cartItemId)

    if (res) {
      console.log('Response after delete from shopping cart', res)
      removeFromCart(cartItemId)
    } else {
      fail()
    }

  }

  const handleIncrease = async (cartItemId: string) => {
    const res =  await increaseCartProductQuantity(cartItemId)

    if (res) {
      console.log('update successful', res)
      increaseQuantity(res)
    } else {
      fail()
    }

  }

  const handleDecrease = async (cartItemId: string) => {
    const res =  await decreaseCartProductQuantity(cartItemId)

    if (res && res !== 'deleted succesfully') {
      console.log('decreased quantity successful', res)
      decreaseQuantity(res)
    } else if (res && res === 'deleted succesfully') {
      console.log('deleted last item successful', res)
      removeFromCart(cartItemId)
    } else {
      fail()
    }

  }

  const handleSubmit = async (cartItems: CartItemType[]) => {
    const session = await checkout(cartItems)
    console.log('SESSION: ', session)
    stripe?.redirectToCheckout({ sessionId: session.id})
  }

  return (
    <>
      {isOpen &&
        <motion.div
          className={`${styles.container} ${container}`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
           <Toaster />
          <div className={styles.cartHeader}>
            <h1>Cart</h1>
            <motion.h1
              className={styles.closeCart}
              onClick={() => { closeCart() }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
            >+</motion.h1>
          </div>

          <motion.ul
            className={`${container}`}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {cartItems.map((cartItem: CartItemType) => (
              <motion.li key={cartItem._id} variants={item}>
                <CartItem
                  cartItem={cartItem}
                  handleDelete={handleDelete}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
              </motion.li>
            ))}
          </motion.ul>

          <div className={styles.cartFooter}>
            <div className={styles.total}>
              <h3>Total</h3>
              <h3
                className={styles.totalValue}
              >
                {(cartItems.reduce((total, cartItem) => {
                  return total + (cartItem.price * cartItem.selectedQuantity)
                }, 0) / 100).toFixed(2)}
              </h3>
            </div>
            <div className={styles.checkout} onClick={() => handleSubmit(cartItems)}>
              <h3>Checkout</h3>
            </div>
          </div>

        </motion.div>
      }
    </>
  )
}
