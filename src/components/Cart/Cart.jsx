import styles from "./../../style/cart/cart.module.scss";
import CartList from "./CartList";

const cartItem = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function Cart() {
  const cartLits = cartItem.map((list) => (
    <CartList key={list.id} data={list} />
  ));
  return (
    <section className="cart">
      <div className={styles.container}>
        <h3 className={styles.title}>購物籃</h3>
        <ul>{cartLits}</ul>
        <div className={`${styles.cart_col} ${styles.shipfee}`}>
          <p>運費</p>
          <p className={styles.text}>免費</p>
        </div>
        <div className={`${styles.cart_col} ${styles.subtitle}`}>
          <p>小計</p>
          <p className={styles.text}>$9999</p>
        </div>
      </div>
    </section>
  );
}

export default Cart;
