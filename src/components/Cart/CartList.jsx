import CartContext from "../../cartContext";
import styles from "./../../style/cart/cartList.module.scss";
import { useContext } from "react";

function CartList({ list }) {
  const { editQuantity } = useContext(CartContext);
  return (
    <li className={styles.cart_list}>
      <img src={list.img} alt="cart" />
      <div className={styles.detail}>
        <p className={styles.product_name}>{list.name}</p>
        <p className={styles.product_price}>${list.price}</p>
        <div className={styles.quantity_wrap}>
          <button
            className={styles.quantity_btn}
            onClick={() => {
              editQuantity(list.id, -1);
            }}
          >
            &#8722;
          </button>
          <p className={styles.quantity}>{list.quantity}</p>
          <button
            className={styles.quantity_btn}
            onClick={() => {
              editQuantity(list.id, 1);
            }}
          >
            &#43;
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartList;
