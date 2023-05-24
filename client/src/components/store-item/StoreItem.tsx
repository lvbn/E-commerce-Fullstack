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
        onClick={() => navigate(`./${product.id}`)}
      ></div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}
