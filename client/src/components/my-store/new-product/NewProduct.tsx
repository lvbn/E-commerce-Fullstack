
import { useNavigate } from 'react-router-dom';
import styles from './NewProduct.module.css'

import { motion } from "framer-motion";
import { useState } from 'react';

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

export default function NewProduct() {

  const navigate = useNavigate()

  const [state, setState] = useState({
    id: '',
    ourClient: '',
    quantity: '',
    payment: '',
    charge: '',
    finalClient: '',
    delivery: '',
    date: '',
    fullfilment: ''
  })

  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // const baseUrl = 'http://localhost:3000'
    const baseUrl = import.meta.env.VITE_BASE_URL

    const postOrder = async (order: any) => {
      const response = await fetch(baseUrl + '/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json"
        }
      })
      return await response.json()
    }
    postOrder(state)
    // dispatch(addOrder(state))
    navigate('/orders')
  }


  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4>add</h4>
        <h1>New Order</h1>

        <label htmlFor='id'>ID</label><br></br>
        <input type='number' id='id' name='id' value={state.id} onChange={handleChange}></input><br></br>

        <label htmlFor='ourClient'>Our client</label><br></br>
        <input type='text' id='ourClient' name='ourClient' value={state.ourClient} onChange={handleChange}></input><br></br>

        <label htmlFor='date'>Date</label><br></br>
        <input type='datetime-local' id='date' name='date' value={state.date} onChange={handleChange}></input><br></br>

        <label htmlFor='quantity'>Quantity</label><br></br>
        <input type='number' id='quantity' name='quantity' value={state.quantity} onChange={handleChange}></input><br></br>

        <label htmlFor='charge'>Charge</label><br></br>
        <input type='number' id='charge' name='charge' value={state.charge} onChange={handleChange}></input><br></br>

        <label htmlFor='finalClient'>Final client</label><br></br>
        <input type='text' id='finalClient' name='finalClient' value={state.finalClient} onChange={handleChange}></input><br></br>

        <div className={styles.selectors}>

          <div className={styles.selector}>
            <label htmlFor='payment'>Fullfilment</label>
            <select className={styles.select} name='payment' value={state.payment} onChange={handleChange}>
              {[1,2,3].map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className={styles.selector}>
            <label htmlFor='fullfilment'>Fullfilment</label>
            <select className={styles.select} name='fullfilment' value={state.fullfilment} onChange={handleChange}>
              {[1,2,3].map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className={styles.selector}>
            <label htmlFor='delivery'>Fullfilment</label>
            <select className={styles.select} name='delivery' value={state.delivery} onChange={handleChange}>
              {[1,2,3].map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

        </div><br></br>

        <div className={styles.buttons}>

          <button
            type='button'
            className={styles.cancelButton}
            onClick={() => navigate('/orders')}
          >
            Cancel
          </button>

          <button
            type='submit'
            className={styles.addButton}
          >
            Add Order
          </button>

        </div>
      </form>
    </motion.div>
  )
}
