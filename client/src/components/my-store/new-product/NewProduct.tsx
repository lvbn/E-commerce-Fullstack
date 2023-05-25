
import styles from './NewProduct.module.css'
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../../../services/products-service'

import { motion } from "framer-motion";
import { useState } from 'react';

// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

import toast, { Toaster } from 'react-hot-toast';
import { useProductsSlice } from '../../../zustand/ProductsSlice';

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

  const addItem = useProductsSlice((state) => state.addItem)

  const [sizes, setSizes] = useState<string[]>([]);
  const [state, setState] = useState({
    sellerId: '646d3615ee38ef18f3490506',
    productId: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    sizes: null,
    imgUrl: []
  })

  const handleChange = (e: { target: { value: any; name: any; type?: string; checked?: boolean}; }) => {
    let copyOfSizes: string[] = [];

    if (e.target.type === 'checkbox' && e.target.checked) copyOfSizes = [...sizes, e.target.value]
    else if (e.target.type === 'checkbox' && !e.target.checked) copyOfSizes = sizes.filter(size => size !== e.target.value)
    // else if (e.target.type === 'checkbox' && !e.target.checked) setSizes(sizes.filter(size => size !== e.target.value))

    const value = e.target.type === "checkbox" ? copyOfSizes : e.target.value;

    setSizes(copyOfSizes)

    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const res = await postProduct(state)

    if (res) {
      // console.log('RES: ', res)
      // dispatch(addOrder(state))
      addItem(res)
      navigate('/mystore/products')
    } else {
      fail()
    }
  }


  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Toaster />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4>add</h4>
        <h1>New Product</h1>

        <label htmlFor='productId'>ID</label><br></br>
        <input type='number' id='productId' name='productId' value={state.productId} onChange={handleChange}></input><br></br>

        <label htmlFor='name'>Name</label><br></br>
        <input type='text' id='name' name='name' value={state.name} onChange={handleChange}></input><br></br>

        <label htmlFor='description'>Description</label><br></br>
        <input type='textarea' id='description' name='description' value={state.description} onChange={handleChange}></input><br></br>

        <label htmlFor='quantity'>Quantity</label><br></br>
        <input type='number' id='quantity' name='quantity' value={state.quantity} onChange={handleChange}></input><br></br>

        {/* <label htmlFor='sizes'>Sizes</label><br></br>
        <input type='text' id='sizes' name='sizes' value={state.sizes} onChange={handleChange}></input><br></br> */}

        <div className={styles.selectors}>

          <div className={styles.selector}>
            <label htmlFor='sizes'>Sizes</label>
            {/* <select className={styles.select} name='sizes' value={state.sizes} onChange={handleChange}>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select> */}

            {/* <FormGroup>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <FormControlLabel
                  key={size}
                  control={<Checkbox onChange={handleChange}/>}
                  label={size}
                  // checked={checked}
                />
              ))}
            </FormGroup> */}

            <div className={styles.sizes}>
              {
                ['S', 'M', 'L', 'XL'].map((size) => (
                  <div key={size} className={styles.checkboxSize}>
                    <input type="checkbox" id={size} name='sizes' value={size} onChange={handleChange}></input>
                    <span className={styles.checkmark}></span>
                    <label htmlFor={size}>{size}</label>
                  </div>
                ))
              }
            </div>
          </div>

        </div><br></br>

        <label htmlFor='price'>Price</label><br></br>
        <input type='number' id='price' name='price' value={state.price} onChange={handleChange}></input><br></br>

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
            Add Product
          </button>

        </div>
      </form>
    </motion.div>
  )
}
