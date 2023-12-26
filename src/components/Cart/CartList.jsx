import styles from "./../../style/cart/cartList.module.scss";

function CartList({ list, editQuantity }) {
  // 將id & e.target往父元件傳
  const handleClick = (e) => {
    editQuantity(list.id, e.target.name);
  };

  return (
    <li className={styles.cart_list}>
      <img src={list.img} alt="cart" />
      <div className={styles.detail}>
        <p className={styles.product_name}>{list.name}</p>
        <p className={styles.product_price}>${list.price}</p>
        <div className={styles.quantity_wrap} onClick={handleClick}>
          <a name="minus" className={styles.quantity_btn}>
            &#8722;
          </a>
          <p className={styles.quantity}>{list.quantity}</p>
          <a name="plus" className={styles.quantity_btn}>
            &#43;
          </a>
        </div>
      </div>
    </li>
  );
}

export default CartList;
