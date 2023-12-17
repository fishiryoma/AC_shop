import styles from "./../../style/footer/footer.module.scss";
import about_styles from "./../../style/footer/about.module.scss";
import About from "./About";

// 練習使用map方法生成footer的list
const footerInfo = [
  {
    title: "客戶服務",
    list: ["運送說明", "退換貨相關", "付款資訊", "FAQ"],
  },
  { title: "關於我們", list: ["品牌故事", "媒體連繫", "Press kit"] },
  { title: "資訊", list: ["隱私權政策", "Cookie", "GDPR"] },
];

function Footer() {
  const footerList = footerInfo.map((info, index) => (
    <About key={index} title={info.title} list={info.list} />
  ));

  return (
    <footer>
      <div className={styles.container}>
        <img
          src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/logo.svg"
          alt="logo"
        />
        {footerList}

        {/* SNS聯絡方式區，因為跟前面三欄結構不同，只好重新寫。
        這邊混用了兩個SASS檔案，因為部分樣式跟前面三欄是共用的
        只有在SNS圖示的地方再重新寫新的 */}
        <div className={`${about_styles.container} ${styles.sns_wrap}`}>
          <p className={about_styles.title}>追蹤ALPHA Shop</p>
          <ul className={about_styles.listwrap}>
            <li>+886 02123-45678</li>
            <li>
              <div className={styles.sns}>
                <img src="./public/icons/facebook.svg" alt="facebook" />
                <img src="./public/icons/instagram.svg" alt="instagram" />
                <img src="./public/icons/whatsapp.svg" alt="whatapp" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
