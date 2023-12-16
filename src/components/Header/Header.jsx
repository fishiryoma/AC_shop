import styles from "./../../style/header/header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <img
          src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/toggle.svg"
          alt="mobile button"
          className={styles.mobileBtn}
        />
        <ul className={`${styles.navList} ${styles.siteMenuList}`}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              男款
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              女款
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              最新消息
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              客製商品
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              聯絡我們
            </a>
          </li>
        </ul>
        <img
          className={styles.logoImg}
          src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/logo.svg"
          alt="AC logo"
        />
        <ul className={`${styles.navList} ${styles.siteActionList}`}>
          {/* <!-- search --> */}
          <li className={styles.navBtn}>
            <object
              data="./public/icons/search.svg"
              className={styles.navBtn}
              type="image/svg+xml"
            ></object>
          </li>
          {/* <!-- cart --> */}
          <li className={styles.navBtn}>
            <object
              data="./public/icons/cart.svg"
              className={styles.navBtn}
              type="image/svg+xml"
            ></object>
          </li>
          <li id="theme-toggle" className={styles.navBtn}>
            {/* <!-- moon --> */}
            <object
              data="./public/icons/moon.svg"
              className={styles.navBtn}
            ></object>
            {/* <!-- sun -->
              <!-- <object data="./public/icons/sun.svg" className={styles.navBtn}>
              </object>    --> */}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
