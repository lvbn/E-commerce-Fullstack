import styles from './CartItem.module.css'
import { CartItemType } from '../../models/models'

interface Props {
  cartItem: CartItemType;
  handleDelete: (cartItemId: string) => void;
  handleIncrease: (cartItemId: string) => void;
  handleDecrease: (cartItemId: string) => void;
}

export default function CartItem ({ cartItem, handleDelete, handleIncrease, handleDecrease }: Props) {

  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <div className={styles.img}>
          <img src={cartItem.imgUrl[0]}></img>
        </div>

        <div className={styles.left}>
          <p className={styles.name}>{cartItem.name}</p>
          <p className={styles.size}>{cartItem.selectedSize}</p>
          <p className={styles.price}>{cartItem.price}</p>
        </div>

        <div className={styles.right}>
          <p
            className={styles.decrease}
            // onClick={() => decreaseQuantity(cartItem)}
            onClick={() => handleDecrease(cartItem._id)}
          >-</p>
          <p className={styles.size}>{cartItem.selectedQuantity}</p>
          <p
            className={styles.increase}
            // onClick={() => increaseQuantity(cartItem)
            onClick={() => handleIncrease(cartItem._id)
            }
          >+</p>
        </div>

        <p
          className={styles.delete}
          // onClick={() => removeFromCart(cartItem._id)}
          onClick={() => handleDelete(cartItem._id)}
        >+</p>

      </div>
    </div>
  )
}
