import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Payment from "./components/Payment/Payment";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <p className={styles.title}>結帳</p>
        <div className={styles.pay_wrap}>
          <Payment />
          <Cart />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
