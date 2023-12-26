import styles from "./../../style/cart/cart.module.scss";
import CartList from "./CartList";
import { useState } from "react";

// 起始數據
const initCartItem = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 4,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 2,
  },
];

function Cart() {
  // 購物車數據設定為state
  const [item, setItem] = useState(initCartItem);
  // 編輯商品數量，並更新購物車
  const editQuantity = (id, status) => {
    const updatedQuantity = item
      .map((el) => {
        if (el.id === id) {
          if (status === "plus") return { ...el, quantity: el.quantity + 1 };
          if (status === "minus" && el.quantity !== 0)
            return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      })
      .filter((el) => el.quantity !== 0);
    // 確認是否有數量為0的商品，若有則移除出購物車
    setItem(updatedQuantity);
  };

  const totalPrice = () => {
    if (!item.length) return 0;
    // 計算總價
    const price = item
      .map((el) => el.price * el.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return price;
  };
  // 渲染購物車
  const cartLits = item.map((el) => (
    <CartList key={el.id} list={el} editQuantity={editQuantity} />
  ));

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
