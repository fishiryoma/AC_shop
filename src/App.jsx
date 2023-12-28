import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Payment from "./components/Payment/Payment";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./cartContext";

function App() {
  return (
    <>
      <Header />
      <main>
        <p className={styles.title}>結帳</p>
        <div className={styles.pay_wrap}>
          {/* 購物車數據&金額、信用卡數據儲存於CartContext */}
          <CartProvider>
            <Payment />
            <Cart />
          </CartProvider>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
