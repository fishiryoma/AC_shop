import CartContext from "./../../cartContext";
import styles from "./../../style/cart/cart.module.scss";
import CartList from "./CartList";
import { useContext } from "react";

function Cart() {
  const { item, totalPrice } = useContext(CartContext);
  // 渲染購物車
  const cartLits = item.map((el) => <CartList key={el.id} list={el} />);

  return (
    <section className="cart">
      <div className={styles.container}>
        <h3 className={styles.title}>
          {item.length ? "購物籃" : "目前沒有商品"}
        </h3>
        <ul>{cartLits}</ul>
        <div className={`${styles.cart_col} ${styles.shipfee}`}>
          <p>運費</p>
          <p className={styles.text}>免費</p>
        </div>
        <div className={`${styles.cart_col} ${styles.subtitle}`}>
          <p>小計</p>
          <p className={styles.text}>{`${String.fromCodePoint(
            36
          )}${totalPrice()}`}</p>
        </div>
      </div>
    </section>
  );
}

export default Cart;
