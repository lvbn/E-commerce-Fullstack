
import styles from './NewProduct.module.css'
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../../../services/products-service'

import { motion } from "framer-motion";
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { useProductsSlice } from '../../../zustand/ProductsSlice';
import { postImage } from '../../upload-widget/UploadWidget';

const failToAddProduct = () => toast.error('something went wrong... 😕 please try again.', {
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

const failToLoadImage = () => toast.error('something went wrong... 😕 please refresh the page and try again.', {
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

  const [img, setImg] = useState()
  const [sizes, setSizes] = useState<string[]>([]);
  const [state, setState] = useState({
    sellerId: '646d3615ee38ef18f3490506',
    productId: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    sizes: null,
    imgUrl: ''
  })

  const handleChange = (e: { target: { value: any; name: any; type?: string; checked?: boolean }; }) => {
    let copyOfSizes: string[] = [];

    if (e.target.type === 'checkbox' && e.target.checked) copyOfSizes = [...sizes, e.target.value]
    else if (e.target.type === 'checkbox' && !e.target.checked) copyOfSizes = sizes.filter(size => size !== e.target.value)

    const value = e.target.type === "checkbox" ? copyOfSizes : e.target.value;

    setSizes(copyOfSizes)

    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleFileSelection = async (files: FileList | null) => {

    if (files) {

      const imageUrl = await postImage(files[0])
      console.log(imageUrl)
      if (imageUrl) {
        setState({ ...state, imgUrl: imageUrl })
      } else {
        failToLoadImage()
      }

      // console.log(files[0])
      console.log(files)
      setImg(imageUrl)

    }
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    // const promises = img.map(async (i) => {
    //   return await postImage(i)
    // })

    // await Promise.allSettled(promises)
    //   .then((results: PromiseSettledResult<any>[]) => results.forEach(async (result) => {

    //     if (result.status === 'fulfilled') {
    //       setImageFromCloudinary([...imgFromCloudinary, result.value])
    //     }

    //   }))
    //   .then(() => console.log('3. ', imgFromCloudinary))
    //   .then(async () => {
    //     const res = await postProduct(state)

    //       if (res) {
    //         console.log('RES: ', res)
    //         // dispatch(addOrder(state))
    //         addItem(res)
    //         navigate('/mystore/products')
    //       } else {
    //         failToAddProduct()
    //       }
    //   })
    //   .catch(error => console.log('error: ', error))

    const res = await postProduct(state)

    if (res) {
      console.log('RES: ', res)
      // dispatch(addOrder(state))
      addItem(res)
      navigate('/mystore/products')
    } else {
      failToAddProduct()
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

        <div className={styles.formFields}>
          <div className={styles.leftSide}>
            <label htmlFor='productId'>ID (numeric value)</label><br></br>
            <input type='number' id='productId' name='productId' value={state.productId} onChange={handleChange}></input><br></br>

            <label htmlFor='name'>Name</label><br></br>
            <input type='text' id='name' name='name' value={state.name} onChange={handleChange}></input><br></br>

            <label htmlFor='description'>Description</label><br></br>
            <input type='textarea' id='description' name='description' value={state.description} onChange={handleChange}></input><br></br>

            <label htmlFor='quantity'>Quantity (numeric value)</label><br></br>
            <input type='number' id='quantity' name='quantity' value={state.quantity} onChange={handleChange}></input><br></br>

            <div className={styles.selectors}>

              <div className={styles.selector}>
                <label htmlFor='sizes'>Sizes</label>
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

            <label htmlFor='price'>Price (without comma)</label><br></br>
            <input type='number' id='price' name='price' value={state.price} onChange={handleChange}></input>

          </div>

          <div className={styles.rightSide}>

            <label htmlFor='mainImg'>Select an image file</label>
            <input type='file' multiple id='mainImg' name='mainImg' onChange={(e) => handleFileSelection(e.target.files)}>
            </input>

            {/* <ul className={styles.imgList}>
              {img &&
                img.map((i, idx) => (
                  <li key={idx} className={styles.img}>
                    <img src={URL.createObjectURL(i)}></img>
                  </li>
                ))
              }
            </ul> */}

            <img className={styles.mainImg} src={img}></img>

            {/* <div className={styles.sideImgs}>
              <div className={styles.sideImg}>
                <img src={img}></img>
              </div>
              <div className={styles.sideImg}></div>
              <div className={styles.sideImg}></div>
            </div> */}

          </div>
        </div><br></br>

        <div className={styles.buttons}>

          <motion.button
            whileTap={{ scale: 0.99 }}
            type='button'
            className={styles.cancelButton}
            onClick={() => navigate('/orders')}
          >
            Cancel
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.99 }}
            type='submit'
            className={styles.addButton}
          >
            Add Product
          </motion.button>

        </div>

      </form>
    </motion.div>
  )
}
