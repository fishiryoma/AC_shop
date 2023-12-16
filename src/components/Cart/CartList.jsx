import styles from "./../../style/cart/cartList.module.scss";

function CartList({ data }) {
  return (
    <li className={styles.cart_list}>
      <img src={data.img} alt="cart" />
      <div className={styles.detail}>
        <p className={styles.product_name}>{data.name}</p>
        <p className={styles.product_price}>${data.price}</p>
        <div className={styles.quantity_wrap}>
          <a href="#" className={styles.quantity_btn}>
            &#8722;
          </a>
          <p className={styles.quantity}>{data.quantity}</p>
          <a href="#" className={styles.quantity_btn}>
            &#43;
          </a>
        </div>
      </div>
    </li>
  );
}

export default CartList;
