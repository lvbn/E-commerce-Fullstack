import styles from './StoreItem.module.css'
import { Product } from '../../models/models'

import { useNavigate } from 'react-router-dom'

type Props = {
  product: Product
}

export default function StoreItem({product}: Props) {

  // console.log('Store Item: ', product)
  const navigate = useNavigate()

  return (
    <div className={styles.storeItem}>
      <div
        className={styles.img}
        // onClick={() => navigate(`./${product.id}`)}
        onClick={() => {
          navigate(`./${product._id}`)
        }}
      >
        <img src={product.imgUrl[0]}></img>
      </div>
      <p>{product.name}</p>
      <p>{(product.price / 100).toFixed(2)}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}
